import { ButtonCell, Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import type { ItemIdProps } from '@/shared/interfaces/item.interface'
import { PAGES_URL } from '@/config/pages-url.config'
import type { IProduct } from '@/store/products/products.types'

interface DeleteButtonProps extends ItemIdProps {
    products: IProduct[]
    setProducts: (products: IProduct[]) => void
}

export function DeleteButton({ id, products, setProducts }: DeleteButtonProps) {
    const t = useTranslations('Products.Delete')

    const router = useRouter()

    const onButtonClick = () => {
        const data = structuredClone(products)

        data.splice(Number(id), 1)

        setProducts(data)

        return router.push(PAGES_URL.HOME)
    }

    return (
        <Section>
            <ButtonCell
                className={'justify-center'}
                mode={'destructive'}
                onClick={onButtonClick}
            >
                {t('button')}
            </ButtonCell>
        </Section>
    )
}
