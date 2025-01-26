import ru from '@public/locales/ru.json'
import type { useTranslations } from 'next-intl'
import type { getTranslations } from 'next-intl/server'

export enum Locale {
    ru = 'ru',
    en = 'en'
}

export type Translation = typeof ru

export interface TranslationServer {
    t: Awaited<ReturnType<typeof getTranslations>>
}

export interface TranslationClient {
    t: ReturnType<typeof useTranslations>
}

export interface TranslationConfig {
    locale: Locale
    messages: Translation
}
