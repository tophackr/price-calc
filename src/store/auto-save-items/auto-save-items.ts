import { cloudStorage } from '@tma.js/sdk-react'

const ASI_NAME = 'TG_AUTO_SAVE_ITEMS'

export const defaultAutoSaveItems = false

export async function getAutoSaveItems(): Promise<boolean> {
    if (!cloudStorage.isSupported()) return defaultAutoSaveItems

    const asi = await cloudStorage.getItem(ASI_NAME)

    return asi ? Boolean(Number(asi)) : defaultAutoSaveItems
}

export async function setAutoSaveItems(asi?: boolean) {
    if (cloudStorage.isSupported()) {
        await cloudStorage.setItem(
            ASI_NAME,
            String(Number(asi || defaultAutoSaveItems))
        )
    }
}
