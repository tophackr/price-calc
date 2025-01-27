export interface ItemForm {
    name?: string
    quantity?: number
    cost?: number
}

export interface ItemIdProps {
    id: string
}

export interface ItemIdPageProps {
    params: Promise<{ id: string }>
}
