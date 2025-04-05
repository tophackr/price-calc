import {
    type RGB,
    isMainButtonVisible,
    onMainButtonClick,
    setMainButtonParams
} from '@telegram-apps/sdk-react'
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
        setMainButtonParams(nUpdates)

        return () => {
            if (isMainButtonVisible()) {
                setMainButtonParams({ isVisible: false })
            }
        }
    }, [nUpdates])

    useEffect(() => {
        if (onClick) {
            const offClick = onMainButtonClick(onClick)

            return () => {
                offClick()
            }
        }
    }, [onClick])
}
