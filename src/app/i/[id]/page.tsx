import { use } from 'react'
import { ItemId } from '@/components/pages/item/ItemId'
import type { ItemIdPageProps } from '@/shared/interfaces/item.interface'

export default function Page({ params }: ItemIdPageProps) {
    const { id } = use(params)

    return <ItemId id={id} />
}
