export interface ItemOrder {
    name?: string
    quantity: number
    cost: number
}

export type ItemForm = Partial<ItemOrder>

export interface ItemIdProps {
    id: string
}

export interface ItemIdPageProps {
    params: Promise<{ id: string }>
}
