import {
  type ThemeParams,
  emitEvent,
  mockTelegramEnv,
  retrieveLaunchParams,
  themeParams,
  viewport
} from '@tma.js/sdk-react'

interface MockPlatformProps {
  macOs: boolean
  webK: boolean
}

export function mockPlatform({ macOs, webK }: MockPlatformProps) {
  const noInsets = { left: 0, top: 0, right: 0, bottom: 0 }
  let firstThemeSent = false

  mockTelegramEnv({
    onEvent({ name: e }, next) {
      if (macOs) {
        if (e === 'web_app_request_theme') {
          let tp: ThemeParams = {}
          if (firstThemeSent) {
            tp = themeParams.state()
          } else {
            firstThemeSent = true
            tp ||= retrieveLaunchParams().tgWebAppThemeParams
          }
          return emitEvent('theme_changed', { theme_params: tp })
        }
        if (e === 'web_app_request_viewport') {
          return emitEvent('viewport_changed', {
            height: viewport.height(),
            width: viewport.width(),
            is_expanded: viewport.isExpanded(),
            is_state_stable: viewport.isStable()
          })
        }
      }
      if (webK && e === 'web_app_request_safe_area') {
        return emitEvent('safe_area_changed', noInsets)
      }
      if (e === 'web_app_request_content_safe_area') {
        return emitEvent('content_safe_area_changed', noInsets)
      }
      next()
    }
  })
}
