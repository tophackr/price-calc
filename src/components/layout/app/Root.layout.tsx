import { Placeholder } from '@telegram-apps/telegram-ui'
import { hasReactNode } from '@telegram-apps/telegram-ui/dist/helpers/react/node'
import clsx from 'clsx'
import type { PropsWithChildren, ReactNode } from 'react'
import styles from './Root.module.css'

interface RootLayoutProps extends PropsWithChildren {
    header?: ReactNode
    footer?: ReactNode
}

export function RootLayout({ header, children, footer }: RootLayoutProps) {
    return (
        <div className={'flex flex-col h-[100dvh]'}>
            {hasReactNode(header) && header}

            <main className={clsx('flex-1', styles['main'])}>{children}</main>

            <Placeholder />

            {hasReactNode(footer) && footer}
        </div>
    )
}
