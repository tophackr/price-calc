import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export { NotFound as default } from '@/components/ui/not-found/NotFound'

export const metadata: Metadata = {
    title: 'Page not found',
    ...NO_INDEX_PAGE
}
