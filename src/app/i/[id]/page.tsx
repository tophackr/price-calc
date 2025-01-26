import { ItemId } from '@/components/pages/item/ItemId'
import type { ItemIdPageProps } from '@/shared/interfaces/item.interface'
import { getProducts } from '@/store/products/products'

export default async function Page({ params }: ItemIdPageProps) {
    const { id } = await params

    return <ItemId id={id} />
}

export async function generateStaticParams() {
    const products = await getProducts()

    return products.map((_, id) => ({ id }))
}
