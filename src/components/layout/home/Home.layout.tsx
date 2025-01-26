'use client'

import { isCloudStorageSupported } from '@telegram-apps/sdk-react'
import { List } from '@telegram-apps/telegram-ui'
import type { PropsWithChildren } from 'react'
import { RootLayout } from '../app/Root.layout'
import { Header } from './header/Header'

export function HomeLayout({ children }: PropsWithChildren) {
    return (
        <RootLayout header={isCloudStorageSupported() && <Header />}>
            <List>{children}</List>
        </RootLayout>
    )
}
