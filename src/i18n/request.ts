import { getRequestConfig } from 'next-intl/server'
import { getLocales } from '@/i18n/get-locales'
import { getLocale } from '@/store/lang/lang'

export default getRequestConfig(async () => {
  const locale = await getLocale()

  return getLocales(locale)
})
