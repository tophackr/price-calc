import {
    backButton,
    initData,
    init as initSDK,
    isConcurrentCallError,
    isFunctionNotAvailableError,
    mainButton,
    miniApp,
    setDebug,
    settingsButton,
    targetOrigin,
    themeParams,
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

    if (!miniApp.isMounted()) {
        miniApp
            .mount()
            .catch(error => {
                if (!isConcurrentCallError(error)) throw error
            })
            .then(() => {
                if (!miniApp.isCssVarsBound()) miniApp.bindCssVars()
            })
            .catch(error => {
                if (!isFunctionNotAvailableError(error)) throw error
            })
    }
    if (!themeParams.isMounted()) {
        themeParams
            .mount()
            .catch(error => {
                if (!isConcurrentCallError(error)) throw error
            })
            .then(() => {
                if (!themeParams.isCssVarsBound()) themeParams.bindCssVars()
            })
            .catch(error => {
                if (!isFunctionNotAvailableError(error)) throw error
            })
    }

    initData.restore()

    if (!viewport.isMounted()) {
        void viewport
            .mount()
            .catch(error => {
                if (!isConcurrentCallError(error)) throw error
            })
            .then(() => {
                if (!viewport.isCssVarsBound()) viewport.bindCssVars()
            })
            .catch(error => {
                if (!isFunctionNotAvailableError(error)) {
                    console.error(
                        'Something went wrong mounting the viewport',
                        error
                    )
                }
            })
    }

    miniApp.ready()

    // Add Eruda if needed.
    if (debug) {
        import('eruda').then(lib => lib.default.init()).catch(console.error)
    }
}
