'use client'

import { settingsButton, useSignal } from '@tma.js/sdk-react'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect } from 'react'
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

export function useSettingsButton() {
  const router = useRouter()
  const pathname = usePathname()

  const isVisible = useSignal(settingsButton.isVisible)
  const isMounted = useSignal(settingsButton.isMounted)

  const onClick = useCallback(() => {
    router.push(pagesUrl.settings)
  }, [router])

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
    if (visibleOnSettingsPage(isVisible, pathname)) {
      settingsButton.hide()
    } else if (notVisibleOnPage(isVisible, pathname)) {
      settingsButton.show()
    }
  }, [isMounted, isVisible, pathname])
}
