'use client'

import { miniApp, useSignal } from '@tma.js/sdk-react'
import { type PropsWithChildren, memo } from 'react'
import { AppRoot, Placeholder } from 'tmaui'
import { useInitStore } from '@/store/hooks/useInitStore'
import { useIsApplePlatform } from '@/hooks/useIsApplePlatform'

export const TelegramProvider = memo(function TelegramProvider({
  children
}: PropsWithChildren) {
  const isApple = useIsApplePlatform()
  const isDark = useSignal(miniApp.isDark)

  useInitStore()

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
