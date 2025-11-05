import {
    emitEvent,
    mockTelegramEnv,
    themeParams,
    viewport
} from '@tma.js/sdk-react'

interface MockPlatformProps {
    macOs: boolean
    webK: boolean
}

export function mockPlatform({ macOs, webK }: MockPlatformProps) {
    const noInsets = { left: 0, top: 0, right: 0, bottom: 0 }

    mockTelegramEnv({
        onEvent({ name: event }, next) {
            if (macOs) {
                if (event === 'web_app_request_theme') {
                    return emitEvent('theme_changed', {
                        theme_params: themeParams.state()
                    })
                }
                if (event === 'web_app_request_viewport') {
                    return emitEvent('viewport_changed', {
                        height: viewport.height(),
                        width: viewport.width(),
                        is_expanded: viewport.isExpanded(),
                        is_state_stable: viewport.isStable()
                    })
                }
            }
            if (webK && event === 'web_app_request_safe_area') {
                return emitEvent('safe_area_changed', noInsets)
            }
            if (event === 'web_app_request_content_safe_area') {
                return emitEvent('content_safe_area_changed', noInsets)
            }
            next()
        }
    })
}
