import {
    isMainButtonVisible,
    setMainButtonParams
} from '@telegram-apps/sdk-react'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect } from 'react'
import type { IProduct } from '@/store/products/products.types'
import { useMainButton } from '@/hooks/use-main-button'
import { isEqualWithoutUndefined } from '@/utils/is-equal'

interface UseSaveProductProps {
    itemId: number
    item: IProduct
    products: IProduct[]
    setProducts: (products: IProduct[]) => void
    initData: IProduct
}

export function useSaveProduct({
    itemId,
    item,
    products,
    setProducts,
    initData
}: UseSaveProductProps) {
    const t = useTranslations('Products')

    const onClick = useCallback(() => {
        const data = structuredClone(products)

        data[itemId] = initData

        setProducts(data)
    }, [initData, itemId, products, setProducts])

    useEffect(() => {
        const toVisible = !isEqualWithoutUndefined(initData, item)

        if (!isMainButtonVisible() && toVisible) {
            setMainButtonParams({ isVisible: true })
        } else if (isMainButtonVisible() && !toVisible) {
            setMainButtonParams({ isVisible: false })
        }
    }, [initData, item])

    useMainButton({ text: t('button'), onClick: onClick })
}
