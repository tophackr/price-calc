import { List } from '@telegram-apps/telegram-ui'
import type { PropsWithChildren } from 'react'
import { RootLayout } from '../app/Root.layout'

export default function PageLayout({ children }: PropsWithChildren) {
    return (
        <RootLayout>
            <List>{children}</List>
        </RootLayout>
    )
}
