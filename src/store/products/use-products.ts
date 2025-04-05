import { useCallback } from 'react'
import { useActions } from '../hooks/use-actions'
import { useAppSelector } from '../hooks/use-app-selector'
import { setProducts as setProductsCloud } from './products'
import { selectProducts } from './products.slice'
import type { IProduct } from './products.types'

export function useProducts() {
    const products = useAppSelector(selectProducts)
    const { setProducts } = useActions()

    const setProductsWithCloud = useCallback(
        (products: IProduct[]) => {
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
