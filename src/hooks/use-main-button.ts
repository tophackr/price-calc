import { type RGB, mainButton } from '@telegram-apps/sdk-react'
import { useEffect } from 'react'

interface State {
    backgroundColor?: RGB
    hasShineEffect: boolean
    isEnabled: boolean
    isLoaderVisible: boolean
    isVisible: boolean
    text: string
    textColor?: RGB
    onClick: () => void
}

export function useMainButton(updates: Partial<State>) {
    const { onClick, ...nUpdates } = updates

    useEffect(() => {
        mainButton.setParams(nUpdates)

        return () => {
            if (mainButton.isVisible()) {
                mainButton.setParams({ isVisible: false })
            }
        }
    }, [nUpdates])

    useEffect(() => {
        if (onClick) {
            const offClick = mainButton.onClick(onClick)

            return () => {
                offClick()
            }
        }
    }, [onClick])
}
