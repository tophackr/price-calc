'use client'

import { isCloudStorageSupported } from '@telegram-apps/sdk-react'
import { List } from '@telegram-apps/telegram-ui'
import { type PropsWithChildren, memo } from 'react'
import { Header } from './header/Header'

export const HomeLayout = memo(function HomeLayout({
    children
}: PropsWithChildren) {
    return (
        <>
            {isCloudStorageSupported() && <Header />}

            <List>{children}</List>
        </>
    )
})
