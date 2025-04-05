import { List } from '@telegram-apps/telegram-ui'
import { type PropsWithChildren, memo } from 'react'

export const PageLayout = memo(function PageLayout({
    children
}: PropsWithChildren) {
    return <List>{children}</List>
})
