import { locales } from '@/i18n/config'
import type { Translation } from '@/i18n/types'

declare module 'use-intl' {
  interface AppConfig {
    Locale: (typeof locales)[number]
    Messages: Translation
  }
}
