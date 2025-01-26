import { use } from 'react'
import { ItemId } from '@/components/pages/item/ItemId'
import type { ItemIdPageProps } from '@/shared/interfaces/item.interface'

export async function generateStaticParams() {
    const products = Array.from({ length: 10 }, (_, i) => ({ id: i }))

    return products.map(product => ({ id: product.id.toString() }))
}

export default function Page({ params }: ItemIdPageProps) {
    const { id } = use(params)

    return <ItemId id={id} />
}
