'use client'

import {
  type PropsWithChildren,
  memo,
  useLayoutEffect,
  useState,
  useTransition
} from 'react'
import { IntlProvider } from 'use-intl'
import { defaultTimeZone } from '@/i18n/config'
import { getLocales } from '@/i18n/get-locales'
import type { Translation } from '@/i18n/types'
import { useLocale } from '@/store/lang/useLocale'

export const ClientI18nProvider = memo(function ClientI18nProvider({
  children
}: PropsWithChildren) {
  const { locale } = useLocale()

  const [messages, setMessages] = useState<Translation | null>(null)
  const [, startTransition] = useTransition()

  useLayoutEffect(() => {
    startTransition(async () => {
      const { messages } = await getLocales(locale)
      setMessages(messages)
    })
  }, [locale])

  return (
    <IntlProvider
      locale={locale}
      messages={messages}
      timeZone={defaultTimeZone}
    >
      {children}
    </IntlProvider>
  )
})
