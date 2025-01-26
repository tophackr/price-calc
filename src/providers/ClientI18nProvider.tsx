'use client'

import { NextIntlClientProvider } from 'next-intl'
import { type PropsWithChildren, useEffect, useState } from 'react'
import { Loader } from '@/components/ui/Loader'
import { useLocale } from '@/store/lang/use-locale'
import { defaultTimeZone } from '@/i18n/config'
import { getLocales } from '@/i18n/get-locales'
import type { Translation } from '@/i18n/types'

export function ClientI18nProvider({ children }: PropsWithChildren) {
    const { locale } = useLocale()

    const [messages, setMessages] = useState<Translation | null>(null)

    useEffect(() => {
        const loadMessages = async () => {
            if (locale) {
                const { messages } = await getLocales(locale)

                setMessages(messages)
            }
        }

        if (locale) {
            loadMessages()
        }
    }, [locale])

    if (!messages) {
        return <Loader />
    }

    return (
        <NextIntlClientProvider
            locale={locale}
            messages={messages}
            timeZone={defaultTimeZone}
        >
            {children}
        </NextIntlClientProvider>
    )
}
