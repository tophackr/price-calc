import {
    isMainButtonVisible,
    setMainButtonParams
} from '@telegram-apps/sdk-react'
import debounce from 'lodash.debounce'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect } from 'react'
import { defaultMaxProducts } from '@/constants/default.constants'
import { useAutoSaveItems } from '@/store/auto-save-items/use-auto-save-items'
import type { IProduct } from '@/store/products/products.types'
import { useMainButton } from '@/hooks/use-main-button'

interface UseSaveProductsProps {
    item: IProduct
    products: IProduct[]
    setProducts: (products: IProduct[]) => void
}

export function useSaveProducts({
    item,
    products,
    setProducts
}: UseSaveProductsProps) {
    const t = useTranslations('Products')

    const { autoSaveItems } = useAutoSaveItems()

    const onClick = useCallback(() => {
        const data = [...structuredClone(products), item]

        if (data.length > defaultMaxProducts) {
            data.shift()
        }

        setProducts(data)
        setMainButtonParams({ isVisible: false })
    }, [item, products, setProducts])

    useEffect(() => {
        const toVisible = !!(item.cost && item.quantity)

        if (autoSaveItems) {
            if (toVisible) {
                debounce(() => {
                    onClick()
                }, 2000)()
            }
        } else {
            if (!isMainButtonVisible() && toVisible) {
                setMainButtonParams({ isVisible: true })
            } else if (isMainButtonVisible() && !toVisible) {
                setMainButtonParams({ isVisible: false })
            }
        }
    }, [autoSaveItems, item.cost, item.quantity, onClick])

    useMainButton({
        text: t('button'),
        onClick
    })
}
