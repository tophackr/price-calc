'use client'

import {
    hideBackButton,
    onBackButtonClick,
    showBackButton
} from '@telegram-apps/sdk-react'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect } from 'react'

export function useBackButton() {
    const router = useRouter()

    const onClick = useCallback(() => {
        router.back()
    }, [router])

    useEffect(() => {
        showBackButton()

        return () => {
            hideBackButton()
        }
    }, [])

    useEffect(() => {
        const offClick = onBackButtonClick(onClick)

        return () => {
            offClick()
        }
    }, [onClick])
}
