import { useTranslations } from 'next-intl'
import { memo, useCallback, useMemo } from 'react'
import { Section } from 'tmaui'
import { DeleteButton } from '@/components/ui/action/DeleteButton'
import { defaultMaxProducts } from '@/constants/default.constants'
import { useProducts } from '@/store/products/useProducts'
import { ProductsCell } from './ProductsCell'

export const Products = memo(() => {
  const t = useTranslations('Products')

  const { products, setProductsWithCloud } = useProducts()

  const onClick = useCallback(
    () => setProductsWithCloud({}),
    [setProductsWithCloud]
  )

  const productsValues = useMemo(
    () => Object.values(products).reverse(),
    [products]
  )

  return (
    !!productsValues.length && (
      <Section
        header={
          <div className='flex justify-between'>
            <Section.Header>{t('header')}</Section.Header>
            <Section.Header>
              {productsValues.length} / {defaultMaxProducts}
            </Section.Header>
          </div>
        }
      >
        {productsValues.map(item => (
          <ProductsCell
            key={item.id}
            item={item}
          />
        ))}

        <DeleteButton
          onClick={onClick}
          title={t('Clear.title')}
          message={t('Clear.description')}
        >
          {t('Clear.button')}
        </DeleteButton>
      </Section>
    )
  )
})
