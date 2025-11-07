'use client'

import type { MainButtonState } from '@tma.js/sdk-react'
import { mainButton, useSignal } from '@tma.js/sdk-react'
import { memo, useEffect } from 'react'

export interface MainButtonProps extends Partial<MainButtonState> {
  onClick: () => void
}

export const MainButton = memo(function MainButton({
  onClick,
  isVisible = true,
  ...params
}: MainButtonProps) {
  useSignal(mainButton.isVisible)

  useEffect(() => {
    mainButton.setParams({ isVisible, ...params })
  }, [isVisible, params])

  useEffect(() => {
    const offClick = mainButton.onClick(onClick)

    return () => {
      offClick()
    }
  }, [onClick])

  return null
})
