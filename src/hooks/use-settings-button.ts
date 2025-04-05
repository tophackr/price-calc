'use client'

import {
    hideSettingsButton,
    isSettingsButtonVisible,
    onSettingsButtonClick,
    showSettingsButton
} from '@telegram-apps/sdk-react'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect } from 'react'
import { PAGES_URL } from '@/config/pages-url.config'

export function useSettingsButton() {
    const router = useRouter()
    const pathname = usePathname()

    const onClick = useCallback(() => {
        router.push(PAGES_URL.SETTINGS)
    }, [router])

    useEffect(() => {
        const offClick = onSettingsButtonClick(onClick)

        return () => {
            offClick()
        }
    }, [onClick])

    useEffect(() => {
        if (isSettingsButtonVisible() && pathname === PAGES_URL.SETTINGS) {
            hideSettingsButton()
        } else if (
            !isSettingsButtonVisible() &&
            pathname !== PAGES_URL.SETTINGS
        ) {
            showSettingsButton()
        }
    }, [pathname])
}
