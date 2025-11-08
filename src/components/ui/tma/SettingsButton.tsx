import { settingsButton, useSignal } from '@tma.js/sdk-react'
import { type JSX, useCallback, useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router'
import { pagesUrl } from '@/config/pages-url.config'

function visibleOnSettingsPage(
  visible: boolean,
  pathname: string | null
): boolean {
  return visible && pathname === pagesUrl.settings
}

function notVisibleOnPage(visible: boolean, pathname: string | null): boolean {
  return !visible && pathname !== pagesUrl.settings
}

export function SettingsButton(): JSX.Element {
  const navigate = useNavigate()
  const location = useLocation()

  const isVisible = useSignal(settingsButton.isVisible)
  const isMounted = useSignal(settingsButton.isMounted)

  const onClick = useCallback(() => {
    void navigate(pagesUrl.settings)
  }, [navigate])

  useEffect(() => {
    const offClick = settingsButton.onClick(onClick)

    return () => {
      offClick()
    }
  }, [onClick])

  useEffect(() => {
    if (!isMounted) {
      return
    }
    if (visibleOnSettingsPage(isVisible, location.pathname)) {
      settingsButton.hide()
    } else if (notVisibleOnPage(isVisible, location.pathname)) {
      settingsButton.show()
    }
  }, [isMounted, isVisible, location])

  return <Outlet />
}
