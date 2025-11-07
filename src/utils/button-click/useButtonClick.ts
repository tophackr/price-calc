'use client'

import { hapticFeedback } from '@tma.js/sdk-react'
import { useRouter } from 'next/navigation'
import type { MouseEvent } from 'react'
import { useCallback, useState } from 'react'
import type { RouteProps } from '@/types/route-props'
import type { MouseClickEvent } from './mouse-click.type'

export type UseButtonClickProps<T> =
  | {
      callback?: (data?: T) => unknown
    }
  | {
      callback?: (data: T) => unknown
    }

export function useButtonClick<T = MouseEvent>({
  route,
  callback
}: Partial<RouteProps | { route?: number }> &
  UseButtonClickProps<T>): MouseClickEvent<T> {
  const router = useRouter()

  const [disabled, setDisabled] = useState(false)

  const onClick = useCallback(
    async (data?: T) => {
      if (disabled) {
        return
      }

      setDisabled(true)

      try {
        hapticFeedback.impactOccurred('medium')

        if (callback) {
          await callback(data as never)
        }

        if (route) {
          await router.push(route as string)
        }
      } finally {
        setDisabled(false)
      }
    },
    [callback, disabled, route, router]
  )

  return { disabled, onClick }
}
