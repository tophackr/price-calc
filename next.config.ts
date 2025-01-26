import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./next-intl.config.js')

const nextConfig: NextConfig = {
    /* config options here */
    output: 'export'
}

export default withNextIntl(nextConfig)
