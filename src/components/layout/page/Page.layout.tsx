import { type PropsWithChildren, memo } from 'react'
import { List } from 'tmaui'

export const PageLayout = memo(function PageLayout({
    children
}: PropsWithChildren) {
    return <List>{children}</List>
})
