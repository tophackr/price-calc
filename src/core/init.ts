import {
    $debug,
    addToHomeScreen,
    backButton,
    initData,
    init as initSDK,
    mainButton,
    miniApp,
    settingsButton,
    themeParams,
    viewport
} from '@telegram-apps/sdk-react'

/**
 * Initializes the application and configures its dependencies.
 */
export function init(debug: boolean): void {
    // Set @telegram-apps/sdk-react debug mode.
    $debug.set(debug)

    // Initialize special event handlers for Telegram Desktop, Android, iOS, etc.
    // Also, configure the package.
    initSDK()

    // Mount all components used in the project.
    if (backButton.isSupported()) backButton.mount()
    if (!mainButton.setParams.isAvailable()) mainButton.mount()
    if (settingsButton.mount.isAvailable()) {
        settingsButton.mount()
    }
    if (addToHomeScreen.isAvailable()) addToHomeScreen()

    if (!miniApp.isMounted()) miniApp.mount()
    if (!themeParams.isMounted()) themeParams.mount()

    initData.restore()

    if (!viewport.isMounted()) {
        void viewport
            .mount()
            .then(async () => {
                if (!viewport.isCssVarsBound()) viewport.bindCssVars()
                if (!viewport.isFullscreen())
                    await viewport.requestFullscreen.ifAvailable()
            })
            .catch(e => {
                console.error('Something went wrong mounting the viewport', e)
            })
    }

    // Define components-related CSS variables.
    if (!miniApp.isCssVarsBound()) miniApp.bindCssVars()
    if (!themeParams.isCssVarsBound()) themeParams.bindCssVars()

    // Add Eruda if needed.
    if (debug) {
        import('eruda').then(lib => lib.default.init()).catch(console.error)
    }
}
