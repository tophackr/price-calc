import { useCallback } from 'react'
import { useFormContext } from 'react-hook-form'
import { defaultMaxProducts } from '@/constants/default.constants'
import type { Product } from '@/store/products/products.types'
import { useProducts } from '@/store/products/useProducts'
import { generateUniqueId } from '@/utils/generateUniqueId'

interface UseSaveProductsProps {
  item: Product
}

export function useSaveProducts({ item }: UseSaveProductsProps) {
  const { products, setProductsWithCloud } = useProducts()
  const { reset } = useFormContext()

  return useCallback(() => {
    const data = structuredClone(products)
    if (item?.id) {
      data[item.id] = item
    } else {
      const dataKeys = Object.keys(data)
      if (dataKeys.length > defaultMaxProducts) {
        delete data[dataKeys.at(-1) as string]
      }
      const id = generateUniqueId()
      data[id] = { ...item, id }
      reset()
    }
    setProductsWithCloud(data)
  }, [item, products, reset, setProductsWithCloud])
}
