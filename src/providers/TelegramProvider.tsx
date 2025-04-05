'use client'

import { isMiniAppDark, useSignal } from '@telegram-apps/sdk-react'
import { AppRoot } from '@telegram-apps/telegram-ui'
import { type PropsWithChildren } from 'react'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ErrorPage } from '@/components/ErrorPage'
import { Loader } from '@/components/ui/Loader'
import { init } from '@/core/init'
import { mockEnv } from '@/core/mocks/mockEnv'
import { useInitStore } from '@/store/hooks/use-init-store'
import { useClientOnce } from '@/hooks/use-client-once'
import { useDidMount } from '@/hooks/use-did-mount'
import { useIsAppleClient } from '@/hooks/use-is-apple-client'
import { useLaunchParams } from '@/hooks/use-launch-params'

function RootInner({ children }: PropsWithChildren) {
    const isDev = process.env.NODE_ENV === 'development'

    // Mock Telegram environment in development mode if needed.
    useClientOnce(() => {
        mockEnv(isDev)
    })

    const lp = useLaunchParams()
    const isApple = useIsAppleClient(lp)

    const { tgWebAppPlatform: platform } = lp
    const debug = isDev || (lp.tgWebAppStartParam || '').includes('debug')

    // Initialize the library.
    useClientOnce(() => {
        init({
            debug,
            eruda: debug && ['ios', 'android'].includes(platform),
            mockForMacOS: platform === 'macos'
        })
    })

    const isDark = useSignal(isMiniAppDark)

    useInitStore()

    return (
        <AppRoot
            appearance={isDark ? 'dark' : 'light'}
            platform={isApple ? 'ios' : 'base'}
        >
            {children}
        </AppRoot>
    )
}

export function TelegramProvider(props: PropsWithChildren) {
    // Unfortunately, Telegram Mini Apps does not allow us to use all features of
    // the Server Side Rendering. That's why we are showing loader on the server
    // side.
    const didMount = useDidMount()

    return didMount ? (
        <ErrorBoundary fallback={ErrorPage}>
            <RootInner {...props} />
        </ErrorBoundary>
    ) : (
        <Loader />
    )
}
