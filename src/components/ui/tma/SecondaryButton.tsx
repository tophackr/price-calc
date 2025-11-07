'use client'

import type { SecondaryButtonState } from '@tma.js/sdk-react'
import { secondaryButton } from '@tma.js/sdk-react'
import { memo, useEffect } from 'react'

export interface SecondaryButtonProps extends Partial<SecondaryButtonState> {
  onClick: () => void
}

export const SecondaryButton = memo(function SecondaryButton({
  onClick,
  isVisible = true,
  ...params
}: SecondaryButtonProps) {
  useEffect(() => {
    secondaryButton.mount()

    return () => {
      secondaryButton.setParams({
        hasShineEffect: false,
        isEnabled: true,
        isLoaderVisible: false,
        isVisible: false
      })
      secondaryButton.unmount()
    }
  }, [])

  useEffect(() => {
    secondaryButton.setParams({ isVisible, ...params })
  }, [isVisible, params])

  useEffect(() => {
    const offClick = secondaryButton.onClick(onClick)

    return () => {
      offClick()
    }
  }, [isVisible, onClick, params])

  return null
})
