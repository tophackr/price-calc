'use client'

import { isCloudStorageSupported } from '@telegram-apps/sdk-react'
import { List } from '@telegram-apps/telegram-ui'
import type { PropsWithChildren } from 'react'
import { Header } from './header/Header'

export function HomeLayout({ children }: PropsWithChildren) {
    return (
        <>
            {isCloudStorageSupported() && <Header />}

            <List>{children}</List>
        </>
    )
}
