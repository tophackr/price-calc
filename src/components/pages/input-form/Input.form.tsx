import dynamic from 'next/dynamic'
import { memo } from 'react'
import type { ICalculateCosts } from '@/shared/interfaces/calculate-cost.interface'
import { isWeight } from '@/utils/boolean/is-weight'
import type { SelectProps } from '../select-form/Select.interface'
import { CostSkeleton } from '../skeletons/Cost.skeleton'
import { PlaceholderSkeleton } from '../skeletons/Placeholder.skeleton'
import { QuantitySkeleton } from '../skeletons/Quantity.skeleton'
import { SelectSkeleton } from '../skeletons/Select.skeleton'

interface InputFormProps extends SelectProps {
    total: ICalculateCosts
}

const DynamicLarge = dynamic(
    () => import('./Placeholder.block').then(mod => mod.PlaceholderBlock),
    {
        loading: () => <PlaceholderSkeleton />,
        ssr: false
    }
)
const DynamicCost = dynamic(
    () => import('./Cost.input').then(mod => mod.CostInput),
    {
        loading: () => <CostSkeleton />,
        ssr: false
    }
)
const DynamicQuantity = dynamic(
    () => import('./Quantity.input').then(mod => mod.QuantityInput),
    {
        loading: () => <QuantitySkeleton />,
        ssr: false
    }
)
const DynamicSelect = dynamic(
    () => import('../select-form/Select.input').then(mod => mod.SelectInput),
    {
        loading: () => <SelectSkeleton />,
        ssr: false
    }
)

export const InputForm = memo(function InputForm({
    total,
    unit,
    onChangeUnit,
    currency,
    onChangeCurrency
}: InputFormProps) {
    return (
        <>
            <DynamicLarge
                total={total}
                unit={unit}
                currency={currency}
            />

            <DynamicCost />

            <DynamicQuantity isWeight={isWeight(unit)} />

            <DynamicSelect
                unit={unit}
                onChangeUnit={onChangeUnit}
                currency={currency}
                onChangeCurrency={onChangeCurrency}
            />
        </>
    )
})
