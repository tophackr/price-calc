import '@telegram-apps/telegram-ui/dist/styles.css'
import type { Metadata, Viewport } from 'next'
import 'normalize.css/normalize.css'
import type { PropsWithChildren } from 'react'
import { AppLayout } from '@/components/layout/app/App.layout'
import { SITE_NAME } from '@/constants/seo.constants'
import '@/styles/globals.css'

export const metadata: Metadata = {
    title: {
        default: SITE_NAME,
        template: `%s | ${SITE_NAME}`
    },
    description: 'Pro planner for you'
}

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' }
    ],
    viewportFit: 'cover'
}

export default function Layout({ children }: PropsWithChildren) {
    return <AppLayout>{children}</AppLayout>
}
