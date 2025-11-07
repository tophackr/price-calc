import type { PropsWithChildren } from 'react'
import { ItemFormProvider } from '@/components/layout/item/ItemFormProvider'

export default function HomeLayout(props: PropsWithChildren) {
  return <ItemFormProvider {...props} />
}
