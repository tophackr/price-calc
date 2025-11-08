import { ItemFormProvider } from '@/components/layout/item/ItemFormProvider'
import { Home } from './Home'

export function HomePage() {
  return (
    <ItemFormProvider>
      <Home />
    </ItemFormProvider>
  )
}
