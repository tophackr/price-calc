'use client'

import { Settings } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { IconButton } from 'tmaui'
import { pagesUrl } from '@/config/pages-url.config'

export function Header() {
    const router = useRouter()

    const onClick = useCallback(() => {
        router.push(pagesUrl.settings)
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
