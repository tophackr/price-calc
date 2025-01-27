import { Placeholder } from '@telegram-apps/telegram-ui'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { useLocale } from 'next-intl'
import { type PropsWithChildren } from 'react'
import { Providers } from '@/app/providers'

export function AppLayout({ children }: PropsWithChildren) {
    const locale = useLocale()

    return (
        <html lang={locale}>
            <body>
                <Providers>{children}</Providers>

                <Placeholder />
                <SpeedInsights />
            </body>
        </html>
    )
}
