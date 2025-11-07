import { memo } from 'react'
import { ItemFormProvider } from '@/components/layout/item/ItemFormProvider'
import { ItemId } from '@/components/pages/item/ItemId'
import type { ItemIdParamsProps } from '@/types/item'

const Page = memo(async ({ params }: ItemIdParamsProps) => {
  const { id } = await params

  return (
    <ItemFormProvider id={id}>
      <ItemId id={id} />
    </ItemFormProvider>
  )
})

export default Page
