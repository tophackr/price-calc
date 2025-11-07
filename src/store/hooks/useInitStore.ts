import type { Currency } from '@/types/currency'
import { useClientOnce } from '@/hooks/useClientOnce'
import { generateUniqueId } from '@/utils/generateUniqueId'
import { getLocale } from '../lang/lang'
import { useLocale } from '../lang/useLocale'
import { getProducts } from '../products/products'
import type { Products } from '../products/products.types'
import { useProducts } from '../products/useProducts'

const currencyReplace: Record<string, Currency[number]> = {
  '₽': 'RUB',
  $: 'USD'
}

export function useInitStore() {
  const { setLocale } = useLocale()
  const { setProducts } = useProducts()

  useClientOnce(() => {
    getLocale().then(setLocale)
    getProducts().then(value => {
      if (Array.isArray(value)) {
        setProducts(
          value.reduce((prev, curr) => {
            const id = generateUniqueId()
            prev[id] = {
              id,
              roundedWeight: curr.rounded,
              roundedSum: curr.costRounded,
              remainderSum: curr.remainder,
              name: curr.name,
              weight: curr.quantity,
              price: curr.cost,
              unit: curr.unit,
              currency: currencyReplace[curr.currency]
            }
            return prev
          }, {} as Products)
        )
      } else {
        setProducts(value)
      }
    })
  })
}
