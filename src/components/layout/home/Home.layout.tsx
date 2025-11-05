'use client'

import { cloudStorage } from '@tma.js/sdk-react'
import { type PropsWithChildren, memo } from 'react'
import { List } from 'tmaui'
import { Header } from './header/Header'

export const HomeLayout = memo(function HomeLayout({
    children
}: PropsWithChildren) {
    return (
        <>
            {cloudStorage.isSupported() && <Header />}

            <List>{children}</List>
        </>
    )
})
