class Pages {
    home = '/'
    settings = '/settings'

    itemId = (id: number) => `/i/${id}`
}

export const pagesUrl = new Pages()
