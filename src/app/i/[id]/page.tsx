import { memo } from 'react'
import { ItemId } from '@/components/pages/item/ItemId'
import type { ItemIdPageProps } from '@/shared/interfaces/item.interface'

const Page = memo(async function Page({ params }: ItemIdPageProps) {
    const { id } = await params

    return <ItemId id={id} />
})

export default Page
