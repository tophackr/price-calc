import { use } from 'react'
import { ItemId } from '@/components/pages/item/ItemId'
import type { ItemIdPageProps } from '@/shared/interfaces/item.interface'
import { defaultCurrency } from '@/store/currency/currency'
import type { IProduct } from '@/store/products/products.types'
import { defaultUnit } from '@/store/unit/unit'

export async function generateStaticParams() {
    const products = Array.from({ length: 10 }, (_, i) => ({ id: i }))

    return products.map(product => ({ id: product.id.toString() }))
}

export async function getStaticProps() {
    // context: GetStaticPropsContext
    const data: IProduct = {
        name: 'Product name',
        rounded: 0,
        costRounded: 0,
        cost: 0,
        quantity: 0,
        unit: defaultUnit,
        currency: defaultCurrency
    }

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { data }
    }
}

export default function Page({ params }: ItemIdPageProps) {
    const { id } = use(params)

    return <ItemId id={id} />
}
