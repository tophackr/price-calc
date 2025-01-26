import { useLocale } from 'next-intl'
import type { PropsWithChildren } from 'react'
import { Providers } from '@/app/providers'

export function AppLayout({ children }: PropsWithChildren) {
    const locale = useLocale()

    return (
        <html lang={locale}>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
