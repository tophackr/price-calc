import { defaultLocale, locales } from '@/core/i18n/config'
import type { Locale, TranslationConfig } from '@/core/i18n/types'

export async function getLocales(
    locale: Locale = defaultLocale
): Promise<TranslationConfig> {
    const fetchMessages = await import(
        `@public/locales/${locale === defaultLocale || !locales.includes(locale) ? defaultLocale : locale}.json`
    )

    return {
        locale,
        messages: fetchMessages.default,
        pages: {
            '*': [
                'Home',
                'PopupUnauthorizedError',
                'Products',
                'Search',
                'Settings'
            ],
            '/_not-found': ['NotFound']
        }
    }
}
