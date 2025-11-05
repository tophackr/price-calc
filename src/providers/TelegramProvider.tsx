'use client'

import { miniApp, useLaunchParams, useSignal } from '@tma.js/sdk-react'
import { type PropsWithChildren, memo } from 'react'
import { AppRoot } from 'tmaui'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ErrorPage } from '@/components/ErrorPage'
import { Loader } from '@/components/ui/Loader'
import { init } from '@/core/init'
import { mockEnv } from '@/core/mocks/mockEnv'
import { useInitStore } from '@/store/hooks/use-init-store'
import { useClientOnce } from '@/hooks/use-client-once'
import { useDidMount } from '@/hooks/use-did-mount'
import { useIsApplePlatform } from '@/hooks/use-is-apple-platform'

const RootInner = memo(function RootInner({ children }: PropsWithChildren) {
    const isDev = process.env.NODE_ENV === 'development'

    // Mock Telegram environment in development mode if needed.
    useClientOnce(() => {
        mockEnv(isDev)
    })

    const lp = useLaunchParams()
    const isApple = useIsApplePlatform()

    const { tgWebAppPlatform: platform } = lp
    const debug = isDev || (lp.tgWebAppStartParam || '').includes('debug')

    // Initialize the library.
    useClientOnce(() => {
        init({
            debug,
            eruda: debug && ['ios', 'android'].includes(platform),
            mockForMacOS: platform === 'macos',
            mockForWebK: platform === 'webk'
        })
    })

    const isDark = useSignal(miniApp.isDark)

    useInitStore()

    return (
        <AppRoot
            appearance={isDark ? 'dark' : 'light'}
            platform={isApple ? 'ios' : 'base'}
        >
            {children}
        </AppRoot>
    )
})

export const TelegramProvider = memo(function TelegramProvider(
    props: PropsWithChildren
) {
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
})
