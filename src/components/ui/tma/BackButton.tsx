import { backButton, hapticFeedback } from '@tma.js/sdk-react'
import type { PropsWithChildren } from 'react'
import { memo, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router'
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
  const navigate = useNavigate()

  const onClick = useCallback(() => {
    hapticFeedback.impactOccurred('medium')
    if (route) {
      void navigate(route)
    } else {
      void navigate(-1)
    }
  }, [route, navigate])

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
