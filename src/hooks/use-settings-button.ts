'use client'

import { settingsButton } from '@telegram-apps/sdk-react'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect } from 'react'
import { PAGES_URL } from '@/config/pages-url.config'

export function useSettingsButton() {
    const router = useRouter()
    const pathname = usePathname()

    const onButtonClick = useCallback(() => {
        router.push(PAGES_URL.SETTINGS)
    }, [router])

    useEffect(() => {
        const offClick = settingsButton.onClick(onButtonClick)

        return () => {
            offClick()
        }
    }, [onButtonClick])

    useEffect(() => {
        if (settingsButton.isVisible() && pathname === PAGES_URL.SETTINGS) {
            settingsButton.hide()
        } else if (
            !settingsButton.isVisible() &&
            pathname !== PAGES_URL.SETTINGS
        ) {
            settingsButton.show()
        }
    }, [pathname])
}
