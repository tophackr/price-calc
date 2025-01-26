import { cloudStorage } from '@telegram-apps/sdk-react'
import { defaultLocale } from '@/core/i18n/config'
import type { Locale } from '@/core/i18n/types'

const LANG_NAME = 'TG_LOCALE'

export async function getLocale(): Promise<Locale> {
    if (!cloudStorage.isSupported()) return defaultLocale

    const locale = await cloudStorage.getItem(LANG_NAME)

    return (locale || defaultLocale) as Locale
}

export async function setLocale(unit?: Locale) {
    if (cloudStorage.isSupported()) {
        await cloudStorage.setItem(LANG_NAME, unit || defaultLocale)
    }
}
