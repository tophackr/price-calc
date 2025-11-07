import { mainButton } from '@tma.js/sdk-react'

export const mainButtonReset = (): void => {
  if (mainButton.isVisible()) {
    mainButton.setParams({
      hasShineEffect: false,
      isEnabled: true,
      isLoaderVisible: false,
      isVisible: false
    })
  }
}
