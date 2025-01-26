module.exports = {
    locales: ['en', 'ru'], // Add your supported locales here
    defaultLocale: 'en',
    pages: {
        '*': [
            'Home',
            'PopupUnauthorizedError',
            'Products',
            'Search',
            'Settings'
        ],
        '/_not-found': ['NotFound']
    }
}
