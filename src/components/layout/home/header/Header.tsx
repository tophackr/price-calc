'use client'

import { IconButton } from '@telegram-apps/telegram-ui'
import { Settings } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { PAGES_URL } from '@/config/pages-url.config'

export function Header() {
    const router = useRouter()

    const onClick = useCallback(() => {
        router.push(PAGES_URL.SETTINGS)
    }, [router])

    return (
        <header className={'m-4'}>
            <IconButton
                mode={'bezeled'}
                size={'s'}
                onClick={onClick}
            >
                <Settings />
            </IconButton>
        </header>
    )
}
