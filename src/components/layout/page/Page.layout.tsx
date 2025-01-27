import { List } from '@telegram-apps/telegram-ui'
import type { PropsWithChildren } from 'react'

export default function PageLayout({ children }: PropsWithChildren) {
    return <List>{children}</List>
}
