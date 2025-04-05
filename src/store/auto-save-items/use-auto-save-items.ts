import { useCallback } from 'react'
import { useActions } from '../hooks/use-actions'
import { useAppSelector } from '../hooks/use-app-selector'
import { setAutoSaveItems as setAutoSaveItemsCloud } from './auto-save-items'
import { selectAutoSaveItems } from './auto-save-items.slice'

export function useAutoSaveItems() {
    const autoSaveItems = useAppSelector(selectAutoSaveItems)
    const { setAutoSaveItems } = useActions()

    const setAutoSaveItemsWithCloud = useCallback(
        (asi: boolean) => {
            setAutoSaveItems(asi)
            setAutoSaveItemsCloud(asi)
        },
        [setAutoSaveItems]
    )

    return { autoSaveItems, setAutoSaveItems, setAutoSaveItemsWithCloud }
}
