'use client'

import { backButton } from '@telegram-apps/sdk-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function useBackButton() {
    const router = useRouter()

    useEffect(() => {
        backButton.show()

        return () => {
            backButton.hide()
        }
    }, [])

    useEffect(() => {
        const offClick = backButton.onClick(() => {
            router.back()
        })

        return () => {
            offClick()
        }
    }, [router])
}
