import type { Metadata, Viewport } from 'next'
import 'normalize.css/normalize.css'
import 'tmaui/tmaui.css'
import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'
import '@/styles/globals.css'

export { AppLayout as default } from '@/components/layout/app/App.layout'

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  viewportFit: 'cover'
}
