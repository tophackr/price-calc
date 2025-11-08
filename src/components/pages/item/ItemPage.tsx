import { useParams } from 'react-router'
import { ItemFormProvider } from '@/components/layout/item/ItemFormProvider'
import type { ItemIdProps } from '@/types/item'
import { ItemId } from './ItemId'

export function ItemPage() {
  const { id } = useParams<ItemIdProps>()

  if (!id) return null

  return (
    <ItemFormProvider id={id}>
      <ItemId id={id} />
    </ItemFormProvider>
  )
}
