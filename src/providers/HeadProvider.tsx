import type { PropsWithChildren } from 'react'
import { ClientI18nProvider } from './ClientI18nProvider'
import { StoreProvider } from './StoreProvider'
import { TelegramProvider } from './TelegramProvider'

export function HeadProvider({ children }: PropsWithChildren) {
    return (
        <StoreProvider>
            <TelegramProvider>
                <ClientI18nProvider>{children}</ClientI18nProvider>
            </TelegramProvider>
        </StoreProvider>
    )
}
