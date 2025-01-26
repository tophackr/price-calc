import { Translation } from '@/i18n/types'

declare global {
    // Use type safe message keys with `next-intl`
    type IntlMessages = Translation
}
