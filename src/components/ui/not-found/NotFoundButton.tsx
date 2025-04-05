'use client'

import { Button } from '@telegram-apps/telegram-ui'
import { useRouter } from 'next/navigation'
import { type PropsWithChildren, memo, useCallback } from 'react'
import { PAGES_URL } from '@/config/pages-url.config'

export const NotFoundButton = memo(function NotFoundButton({
    children
}: PropsWithChildren) {
    const router = useRouter()

    const onClick = useCallback(() => {
        router.push(PAGES_URL.HOME)
    }, [router])

    return (
        <Button
            size='l'
            stretched={true}
            onClick={onClick}
        >
            {children}
        </Button>
    )
})
