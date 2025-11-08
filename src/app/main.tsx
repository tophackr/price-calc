import {
  reactErrorHandler,
  replayIntegration,
  init as sentryInit
} from '@sentry/react'
import { retrieveLaunchParams } from '@tma.js/sdk-react'
import mixpanel from 'mixpanel-browser'
import 'normalize.css/normalize.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'tmaui/tmaui.css'
import { AppLayout } from '@/components/layout/app/AppLayout'
import { init } from '@/core/init'
import '@/core/mocks/mockEnv'
import '@/styles/globals.css'

sentryInit({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  enabled: !!import.meta.env.VITE_SENTRY_ENABLED,
  environment: import.meta.env.MODE,
  sendDefaultPii: true,
  integrations: [replayIntegration()],
  replaysSessionSampleRate: import.meta.env.DEV ? 1.0 : 0.1,
  replaysOnErrorSampleRate: 1.0
})
mixpanel.init(import.meta.env.VITE_MIXPANEL_TOKEN, {
  autocapture: true,
  record_sessions_percent: 100,
  api_host: import.meta.env.VITE_MIXPANEL_HOST
})

const root = createRoot(document.querySelector('#app')!, {
  onUncaughtError: reactErrorHandler((error, errorInfo) => {
    console.warn('Uncaught error', error, errorInfo.componentStack)
  }),
  onCaughtError: reactErrorHandler(),
  onRecoverableError: reactErrorHandler()
})

try {
  const launchParams = retrieveLaunchParams()
  const {
    tgWebAppPlatform: platform,
    tgWebAppStartParam,
    tgWebAppData
  } = launchParams
  const debug =
    (tgWebAppStartParam || '').includes('debug') || import.meta.env.DEV

  mixpanel.identify(
    tgWebAppData?.user?.id ? String(tgWebAppData?.user?.id) : undefined
  )

  // Configure all application dependencies.
  await init({
    debug,
    eruda: debug && ['ios', 'android', 'androidx'].includes(platform),
    mockForMacOS: platform === 'macos',
    mockForWebK: platform === 'webk'
  }).then(() => {
    root.render(
      <StrictMode>
        <AppLayout />
      </StrictMode>
    )
  })
} catch {
  // root.render(<EnvUnsupported />)
}
