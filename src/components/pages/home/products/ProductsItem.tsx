import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { memo, useCallback } from 'react'
import { Cell } from 'tmaui'
import { pagesUrl } from '@/config/pages-url.config'
import { formatCost } from '@/utils/string/format-cost'
import type { ItemProps } from './Products.interface'

interface ProductsItemProps extends ItemProps {
    id: number
}

export const ProductsItem = memo(function ProductsItem({
    id,
    item: {
        name,
        currency,
        unit,
        rounded,
        costRounded,
        remainder,
        cost,
        quantity
    }
}: ProductsItemProps) {
    const t = useTranslations('Home.unit.values')

    const router = useRouter()

    const onItemClick = useCallback(() => {
        router.push(pagesUrl.itemId(id))
    }, [id, router])

    return (
        <Cell
            subhead={name}
            subtitle={formatCost(
                costRounded ? costRounded.toFixed(2) : 0,
                currency,
                rounded,
                t(unit)
            )}
            description={
                !!remainder &&
                formatCost(remainder.toFixed(2), currency, 1, t(unit))
            }
            onClick={onItemClick}
        >
            {formatCost(cost.toFixed(2), currency, quantity, t(unit))}
        </Cell>
    )
})
