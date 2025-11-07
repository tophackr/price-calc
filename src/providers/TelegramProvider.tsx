'use client'

import { miniApp, useLaunchParams, useSignal } from '@tma.js/sdk-react'
import { type PropsWithChildren, memo } from 'react'
import { AppRoot, Placeholder } from 'tmaui'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ErrorPage } from '@/components/ErrorPage'
import { Loader } from '@/components/ui/Loader'
import { useSettingsButton } from '@/components/ui/tma/useSettingsButton'
import { init } from '@/core/init'
import { mockEnv } from '@/core/mocks/mockEnv'
import { useInitStore } from '@/store/hooks/useInitStore'
import { useClientOnce } from '@/hooks/useClientOnce'
import { useDidMount } from '@/hooks/useDidMount'
import { useIsApplePlatform } from '@/hooks/useIsApplePlatform'

const RootInner = memo(function RootInner({ children }: PropsWithChildren) {
  const isDev = process.env.NODE_ENV === 'development'

  // Mock Telegram environment in development mode if needed.
  useClientOnce(() => {
    mockEnv(isDev)
  })

  const lp = useLaunchParams()
  const isApple = useIsApplePlatform()

  const { tgWebAppPlatform: platform, tgWebAppStartParam } = lp
  const debug = (tgWebAppStartParam || '').includes('debug') || isDev

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
  useSettingsButton()

  return (
    <AppRoot
      appearance={isDark ? 'dark' : 'light'}
      platform={isApple ? 'ios' : 'base'}
    >
      {children}
      <Placeholder />
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
    <div className='full-height'>
      <Loader />
    </div>
  )
})
