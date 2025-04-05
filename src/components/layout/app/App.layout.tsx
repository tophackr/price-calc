import { Placeholder } from '@telegram-apps/telegram-ui'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { useLocale } from 'next-intl'
import { type PropsWithChildren } from 'react'
import { HeadProvider } from '@/providers/HeadProvider'

export function AppLayout({ children }: PropsWithChildren) {
    const locale = useLocale()

    return (
        <html lang={locale}>
            <body>
                <div id={'app'}>
                    <HeadProvider>{children}</HeadProvider>

                    <Placeholder />
                    <SpeedInsights />
                </div>
            </body>
        </html>
    )
}
