import { useCallback } from 'react'
import { useActions } from '../hooks/useActions'
import { useAppSelector } from '../hooks/useAppSelector'
import { setProducts as setProductsCloud } from './products'
import { selectProducts } from './products.slice'
import type { Products } from './products.types'

export function useProducts() {
  const products = useAppSelector(selectProducts)
  const { setProducts } = useActions()

  const setProductsWithCloud = useCallback(
    (products: Products) => {
      setProducts(products)
      setProductsCloud(products)
    },
    [setProducts]
  )

  return {
    products,
    setProducts,
    setProductsWithCloud
  }
}
