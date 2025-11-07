import { getLocale } from 'next-intl/server'
import type { PropsWithChildren } from 'react'
import { ClientI18nProvider } from '@/providers/ClientI18nProvider'
import { StoreProvider } from '@/providers/StoreProvider'
import { TelegramProvider } from '@/providers/TelegramProvider'

export async function AppLayout({ children }: PropsWithChildren) {
  const locale = await getLocale()

  return (
    <html lang={locale}>
      <body>
        <div id='app'>
          <StoreProvider>
            <TelegramProvider>
              <ClientI18nProvider>{children}</ClientI18nProvider>
            </TelegramProvider>
          </StoreProvider>
        </div>
      </body>
    </html>
  )
}
