import { getLocale } from 'next-intl/server'
import type { PropsWithChildren } from 'react'
import { Providers } from '@/app/providers'

export async function AppLayout({ children }: PropsWithChildren) {
    const locale = await getLocale()

    return (
        <html lang={locale}>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
