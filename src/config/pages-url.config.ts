class Pages {
  home = '/'
  settings = '/settings'

  itemId = (id: string) => `/i/${id}`
}

export const pagesUrl = new Pages()
