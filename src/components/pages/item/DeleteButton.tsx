import { ButtonCell, Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { memo, useCallback } from 'react'
import type { ItemIdProps } from '@/shared/interfaces/item.interface'
import { PAGES_URL } from '@/config/pages-url.config'
import type { IProduct } from '@/store/products/products.types'

interface DeleteButtonProps extends ItemIdProps {
    products: IProduct[]
    setProducts: (products: IProduct[]) => void
}

export const DeleteButton = memo(function DeleteButton({
    id,
    products,
    setProducts
}: DeleteButtonProps) {
    const t = useTranslations('Products.Delete')

    const router = useRouter()

    const onClick = useCallback(() => {
        const data = structuredClone(products)

        data.splice(Number(id), 1)

        setProducts(data)

        router.push(PAGES_URL.HOME)
    }, [id, products, router, setProducts])

    return (
        <Section>
            <ButtonCell
                className={'justify-center'}
                mode={'destructive'}
                onClick={onClick}
            >
                {t('button')}
            </ButtonCell>
        </Section>
    )
})
