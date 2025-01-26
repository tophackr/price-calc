import { Translation } from '@/core/i18n/types'

declare global {
    // Use type safe message keys with `next-intl`
    interface IntlMessages extends Translation {}
}
