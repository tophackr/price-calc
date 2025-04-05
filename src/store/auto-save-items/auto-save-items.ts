import {
    getCloudStorageItem,
    isCloudStorageSupported,
    setCloudStorageItem
} from '@telegram-apps/sdk-react'

const ASI_NAME = 'TG_AUTO_SAVE_ITEMS'

export const defaultAutoSaveItems = false

export async function getAutoSaveItems(): Promise<boolean> {
    if (!isCloudStorageSupported()) return defaultAutoSaveItems

    const asi = await getCloudStorageItem(ASI_NAME)

    return asi ? Boolean(Number(asi)) : defaultAutoSaveItems
}

export async function setAutoSaveItems(asi?: boolean) {
    if (isCloudStorageSupported()) {
        await setCloudStorageItem(
            ASI_NAME,
            String(Number(asi || defaultAutoSaveItems))
        )
    }
}
