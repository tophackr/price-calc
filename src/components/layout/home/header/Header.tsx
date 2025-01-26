'use client'

import { IconButton } from '@telegram-apps/telegram-ui'
import { Settings } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { PAGES_URL } from '@/config/pages-url.config'

export function Header() {
    const router = useRouter()

    return (
        <header className={'m-4'}>
            <IconButton
                mode={'bezeled'}
                size={'s'}
                onClick={() => router.push(PAGES_URL.SETTINGS)}
            >
                <Settings />
            </IconButton>
        </header>
    )
}
