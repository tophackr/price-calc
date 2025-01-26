import { mainButton } from '@telegram-apps/sdk-react'
import { useTranslations } from 'next-intl'
import { useEffect } from 'react'
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

    const handleSave = () => {
        const data = structuredClone(products)

        data[itemId] = initData

        setProducts(data)
    }

    useEffect(() => {
        const toVisible = !isEqualWithoutUndefined(initData, item)

        console.log(initData, item)

        if (!mainButton.isVisible() && toVisible) {
            mainButton.setParams({ isVisible: true })
        } else if (mainButton.isVisible() && !toVisible) {
            mainButton.setParams({ isVisible: false })
        }
    }, [initData, item])

    useMainButton({ text: t('button'), onClick: handleSave })
}
