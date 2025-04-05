import {
    getCloudStorageItem,
    isCloudStorageSupported,
    setCloudStorageItem
} from '@telegram-apps/sdk-react'
import { defaultLocale } from '@/i18n/config'
import type { Locale } from '@/i18n/types'

const LANG_NAME = 'TG_LOCALE'

export async function getLocale(): Promise<Locale> {
    if (!isCloudStorageSupported()) return defaultLocale

    const locale = await getCloudStorageItem(LANG_NAME)

    return (locale || defaultLocale) as Locale
}

export async function setLocale(unit?: Locale) {
    if (isCloudStorageSupported()) {
        await setCloudStorageItem(LANG_NAME, unit || defaultLocale)
    }
}
