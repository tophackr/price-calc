import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export { PageLayout as default } from '@/components/layout/page/Page.layout'

export const metadata: Metadata = {
    title: 'Settings',
    ...NO_INDEX_PAGE
}
