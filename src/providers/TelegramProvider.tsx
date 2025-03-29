'use client'

import {
    miniApp,
    postEvent,
    useLaunchParams,
    useSignal
} from '@telegram-apps/sdk-react'
import { AppRoot } from '@telegram-apps/telegram-ui'
import { type PropsWithChildren, useEffect } from 'react'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ErrorPage } from '@/components/ErrorPage'
import { Loader } from '@/components/ui/Loader'
import { init } from '@/core/init'
import { useInitStore } from '@/store/hooks/use-init-store'
import { useClientOnce } from '@/hooks/use-client-once'
import { useDidMount } from '@/hooks/use-did-mount'
import { useIsAppleClient } from '@/hooks/use-is-apple-client'
import { useTelegramMock } from '@/hooks/use-telegram-mock'

function RootInner({ children }: PropsWithChildren) {
    const isDev = process.env.NODE_ENV === 'development'

    // Mock Telegram environment in development mode if needed.
    if (isDev) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useTelegramMock()
    }

    const lp = useLaunchParams()
    const isApple = useIsAppleClient(lp)
    const debug = isDev || lp.startParam === 'debug'

    // Initialize the library.
    useClientOnce(() => {
        init(debug)
    })

    const isDark = useSignal(miniApp.isDark)

    useInitStore()

    // TODO: temp fix for ios
    useEffect(() => {
        postEvent('web_app_request_theme')
        postEvent('web_app_ready')
    }, [])

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
