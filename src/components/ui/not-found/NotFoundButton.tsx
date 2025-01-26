'use client'

import { Button } from '@telegram-apps/telegram-ui'
import { useRouter } from 'next/navigation'
import type { PropsWithChildren } from 'react'
import { PAGES_URL } from '@/config/pages-url.config'

export function NotFoundButton({ children }: PropsWithChildren) {
    const router = useRouter()

    return (
        <Button
            size='l'
            stretched={true}
            onClick={() => router.push(PAGES_URL.HOME)}
        >
            {children}
        </Button>
    )
}
