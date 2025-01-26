import { getRequestConfig } from 'next-intl/server'
import { getLocale } from '@/store/lang/lang'
import { getLocales } from '@/i18n/getLocales'

const i18nRequestConfig = getRequestConfig(async () => {
    const locale = await getLocale()

    return getLocales(locale)
})

export default i18nRequestConfig
