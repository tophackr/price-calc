export interface SearchProps {
    onSearch: (data: SearchForm) => void
    debounceTime?: number
}

export interface SearchForm {
    search: string
}
