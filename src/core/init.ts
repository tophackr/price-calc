import {
  applyPolyfills,
  backButton,
  initData,
  init as initSDK,
  mainButton,
  miniApp,
  secondaryButton,
  setDebug,
  setTargetOrigin,
  settingsButton,
  themeParams,
  viewport
} from '@tma.js/sdk-react'
import { mockPlatform } from './mocks/mockPlatform'

interface InitProps {
  debug: boolean
  eruda: boolean
  mockForMacOS: boolean
  mockForWebK: boolean
}

/**
 * Initializes the application and configures its dependencies.
 */
export async function init({
  debug,
  eruda,
  mockForMacOS,
  mockForWebK
}: InitProps): Promise<void> {
  applyPolyfills()
  // Set @tma.js/sdk-react debug mode.
  setDebug(debug)
  setTargetOrigin('https://tgl.mini-apps.store')

  // Initialize special event handlers for Telegram Desktop, Android, iOS, etc.
  // Also, configure the package.
  initSDK()
  miniApp.ready()

  // Add Eruda if needed.
  if (eruda) {
    void import('eruda').then(({ default: lib }) => {
      lib.init()
      lib.position({
        x: window.innerWidth - 50,
        y: window.innerHeight - 100
      })
    })
  }

  // Telegram for macOS has a ton of bugs, including cases, when the client doesn't
  // even response to the "web_app_request_theme" method. It also generates an incorrect
  // event for the "web_app_request_safe_area" method.
  if (mockForMacOS || mockForWebK)
    mockPlatform({ macOs: mockForMacOS, webK: mockForWebK })

  // Initialize required components.
  initData.restore()

  // Mount all components used in the project.
  await (viewport.mount.isAvailable() &&
    viewport.mount({ timeout: 3000 }).then(() => {
      viewport.expand()
      if (!viewport.isCssVarsBound()) viewport.bindCssVars()
    }))

  if (themeParams.mount.isAvailable()) {
    themeParams.mount()
    if (!themeParams.isCssVarsBound()) themeParams.bindCssVars()
  }

  mainButton.mount.ifAvailable()
  secondaryButton.mount.ifAvailable()
  backButton.mount.ifAvailable()
  settingsButton.mount.ifAvailable()

  miniApp.mount.ifAvailable()
}
