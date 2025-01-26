import { getRequestConfig } from 'next-intl/server'
import { getLocale } from '@/store/lang/lang'
import { getLocales } from '@/i18n/get-locales'

export default getRequestConfig(async () => {
    const locale = await getLocale()

    return getLocales(locale)
})
