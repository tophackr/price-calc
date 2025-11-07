import { defaultLocale, locales } from '@/i18n/config'
import type { Locale, TranslationConfig } from '@/i18n/types'

export async function getLocales(
  locale: Locale = defaultLocale
): Promise<TranslationConfig> {
  const fetchMessages = await import(
    `./messages/${locale === defaultLocale || !locales.includes(locale) ? defaultLocale : locale}.json`
  )

  return {
    locale,
    messages: fetchMessages.default
  }
}
