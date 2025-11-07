import { secondaryButton } from '@tma.js/sdk-react'

export const secondaryButtonReset = (): void => {
  if (secondaryButton.isVisible()) {
    secondaryButton.setParams({
      hasShineEffect: false,
      isEnabled: true,
      isLoaderVisible: false,
      isVisible: false
    })
  }
}
