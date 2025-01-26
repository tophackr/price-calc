import { mainButton } from '@telegram-apps/sdk-react'
import debounce from 'lodash.debounce'
import { useTranslations } from 'next-intl'
import { useEffect } from 'react'
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

    const handleSave = () => {
        const data = [...structuredClone(products), item]

        if (data.length > 10) {
            data.shift()
        }

        setProducts(data)
        mainButton.setParams({ isVisible: false })
    }

    useEffect(() => {
        const toVisible = !!(item.cost && item.quantity)

        if (autoSaveItems) {
            if (toVisible) {
                debounce(() => {
                    handleSave()
                }, 2000)()
            }
        } else {
            if (!mainButton.isVisible() && toVisible) {
                mainButton.setParams({ isVisible: true })
            } else if (mainButton.isVisible() && !toVisible) {
                mainButton.setParams({ isVisible: false })
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [autoSaveItems, item.cost, item.quantity])

    useMainButton({
        text: t('button'),
        onClick: handleSave
    })
}
