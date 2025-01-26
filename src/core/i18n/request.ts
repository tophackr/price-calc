import { getRequestConfig } from 'next-intl/server'
import { getLocales } from '@/core/i18n/getLocales'
import { getLocale } from '@/store/lang/lang'

const i18nRequestConfig = getRequestConfig(async () => {
    const locale = await getLocale()

    return getLocales(locale)
})

export default i18nRequestConfig
