import { SpeedInsights } from '@vercel/speed-insights/next'
import { useLocale } from 'next-intl'
import { type PropsWithChildren, StrictMode } from 'react'
import { Providers } from '@/app/providers'

export function AppLayout({ children }: PropsWithChildren) {
    const locale = useLocale()

    return (
        <StrictMode>
            <html lang={locale}>
                <body>
                    <Providers>{children}</Providers>

                    <SpeedInsights />
                </body>
            </html>
        </StrictMode>
    )
}
