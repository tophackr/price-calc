'use client'

import { backButton, hapticFeedback } from '@tma.js/sdk-react'
import { useRouter } from 'next/navigation'
import type { PropsWithChildren } from 'react'
import { memo, useCallback, useEffect } from 'react'
import type { RouteProps } from '@/types/route-props'
import { mainButtonReset } from './resets/mainButtonReset'
import { secondaryButtonReset } from './resets/secondaryButtonReset'

interface BackButtonProps {
  hide?: boolean
}

export const BackButton = memo(function BackButton({
  children,
  hide,
  route
}: PropsWithChildren<BackButtonProps & Partial<RouteProps>>) {
  const router = useRouter()

  const onClick = useCallback(() => {
    hapticFeedback.impactOccurred('medium')
    if (route) {
      router.push(route)
    } else {
      router.back()
    }
  }, [route, router])

  useEffect(() => {
    if (!backButton.isVisible() && !hide) {
      backButton.show()
    } else if (backButton.isVisible() && hide) {
      backButton.hide()
    }

    return () => {
      mainButtonReset()
      secondaryButtonReset()
    }
  }, [hide])

  useEffect(() => {
    const offClick = backButton.onClick(onClick)

    return () => {
      offClick()
    }
  }, [onClick])

  return children
})
