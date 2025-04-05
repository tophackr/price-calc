import { Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { memo, useCallback, useMemo } from 'react'
import { defaultMaxProducts } from '@/constants/default.constants'
import { useProducts } from '@/store/products/use-products'
import { ClearButton } from './ClearButton'
import type { ItemProps } from './Products.interface'
import { ProductsItem } from './ProductsItem'
import { useSaveProducts } from './use-save-products'

export const Products = memo(function Products({ item }: ItemProps) {
    const t = useTranslations('Products')

    const { products, setProductsWithCloud } = useProducts()

    const onClick = useCallback(() => {
        setProductsWithCloud([])
    }, [setProductsWithCloud])

    useSaveProducts({
        item,
        products,
        setProducts: setProductsWithCloud
    })

    const productsValues = useMemo(
        () => Object.values(products).reverse(),
        [products]
    )

    return (
        !!productsValues.length && (
            <Section
                header={
                    <div className={'flex justify-between'}>
                        <Section.Header>{t('header')}</Section.Header>
                        <Section.Header>
                            {productsValues.length} / {defaultMaxProducts}
                        </Section.Header>
                    </div>
                }
            >
                {productsValues.map((item, index) => (
                    <ProductsItem
                        key={index}
                        id={productsValues.length - index - 1}
                        item={item}
                    />
                ))}

                <ClearButton onClick={onClick} />
            </Section>
        )
    )
})
