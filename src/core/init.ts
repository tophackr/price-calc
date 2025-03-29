import {
    backButton,
    initData,
    init as initSDK,
    mainButton,
    miniApp,
    setDebug,
    settingsButton,
    targetOrigin,
    viewport
} from '@telegram-apps/sdk-react'

/**
 * Initializes the application and configures its dependencies.
 */
export function init(debug: boolean): void {
    // Set @telegram-apps/sdk-react debug mode.
    setDebug(debug)
    targetOrigin.set('https://platformer-hq.github.io')

    // Initialize special event handlers for Telegram Desktop, Android, iOS, etc.
    // Also, configure the package.
    initSDK()

    // Mount all components used in the project.
    if (backButton.isSupported()) backButton.mount()
    if (!mainButton.setParams.isAvailable()) mainButton.mount()
    if (settingsButton.mount.isAvailable()) {
        settingsButton.mount()
    }

    if (!miniApp.isMounted()) miniApp.mount()

    initData.restore()

    if (!viewport.isMounted()) {
        void viewport
            .mount()
            .then(async () => {
                if (!viewport.isCssVarsBound()) viewport.bindCssVars()
            })
            .catch(e => {
                console.error('Something went wrong mounting the viewport', e)
            })
    }

    // Add Eruda if needed.
    if (debug) {
        import('eruda').then(lib => lib.default.init()).catch(console.error)
    }
}
