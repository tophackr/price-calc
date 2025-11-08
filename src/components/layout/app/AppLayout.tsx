import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ErrorPage } from '@/components/ErrorPage'
import { ClientI18nProvider } from '@/providers/ClientI18nProvider'
import { StoreProvider } from '@/providers/StoreProvider'
import { TelegramProvider } from '@/providers/TelegramProvider'
import { AppRouter } from '@/app/routes/AppRouter'

export function AppLayout() {
  return (
    <ErrorBoundary fallback={ErrorPage}>
      <StoreProvider>
        <TelegramProvider>
          <ClientI18nProvider>
            <AppRouter />
          </ClientI18nProvider>
        </TelegramProvider>
      </StoreProvider>
    </ErrorBoundary>
  )
}
