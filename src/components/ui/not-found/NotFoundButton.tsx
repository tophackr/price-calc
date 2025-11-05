'use client'

import { useRouter } from 'next/navigation'
import { type PropsWithChildren, memo, useCallback } from 'react'
import { Button } from 'tmaui'
import { pagesUrl } from '@/config/pages-url.config'

export const NotFoundButton = memo(function NotFoundButton({
    children
}: PropsWithChildren) {
    const router = useRouter()

    const onClick = useCallback(() => {
        router.push(pagesUrl.home)
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
