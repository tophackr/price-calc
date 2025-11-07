import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export { Settings as default } from '@/components/pages/settings/Settings'

export const metadata: Metadata = {
  title: 'Settings',
  ...NO_INDEX_PAGE
}
