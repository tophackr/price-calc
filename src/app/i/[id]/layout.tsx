import type { PropsWithChildren } from 'react'
import PageLayout from '@/components/layout/page/Page.layout'

export default function Layout({ children }: PropsWithChildren) {
    return <PageLayout>{children}</PageLayout>
}
