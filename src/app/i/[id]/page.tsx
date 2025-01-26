import { ItemId } from '@/components/pages/item/ItemId'
import type { ItemIdPageProps } from '@/shared/interfaces/item.interface'

export default async function Page({ params }: ItemIdPageProps) {
    const { id } = await params

    return <ItemId id={id} />
}
