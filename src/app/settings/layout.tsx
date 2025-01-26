import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import PageLayout from '@/components/layout/page/Page.layout'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
    title: 'Settings',
    ...NO_INDEX_PAGE
}

export default function Layout({ children }: PropsWithChildren) {
    return <PageLayout>{children}</PageLayout>
}
