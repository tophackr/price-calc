'use client'

import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { InputForm } from '@/components/pages/input-form/Input.form'
import type { Currency } from '@/shared/enums/currency.enum'
import type { Unit } from '@/shared/enums/unit.enum'
import type { ICalculateCosts } from '@/shared/interfaces/calculate-cost.interface'
import type { ItemIdProps, ItemOrder } from '@/shared/interfaces/item.interface'
import { useProducts } from '@/store/products/use-products'
import { useBackButton } from '@/hooks/use-back-button'
import { useSettingsButton } from '@/hooks/use-settings-button'
import { useWatchForm } from '@/hooks/use-watch-form'
import { isWeight } from '@/utils/boolean/is-weight'
import {
    calculatePieces,
    calculateWeight
} from '@/utils/integer/calculate-costs'
import { NameSkeleton } from '../skeletons/Name.skeleton'
import { DeleteButton } from './DeleteButton'
import { useSaveProduct } from './use-save-product'

const DynamicName = dynamic(
    () => import('../input-form/Name.input').then(mod => mod.NameInput),
    {
        loading: () => <NameSkeleton />,
        ssr: false
    }
)

export function ItemId({ id }: ItemIdProps) {
    useSettingsButton()
    useBackButton()

    const { products, setProductsWithCloud } = useProducts()
    const item = products[Number(id)]

    if (!item) {
        notFound()
    }

    const [total, setTotal] = useState<ICalculateCosts>({
        rounded: item.rounded,
        costRounded: item.costRounded,
        remainder: item.remainder
    })
    const [unit, setUnit] = useState(item.unit)
    const [currency, setCurrency] = useState(item.currency)

    const { watch, reset, getValues, ...rest } = useForm<ItemOrder>({
        defaultValues: {
            quantity: item.quantity,
            cost: item.cost,
            name: item.name
        },
        mode: 'onChange'
    })

    const handleCallback = ({ quantity, cost }: ItemOrder) => {
        if (!quantity || !cost) {
            return
        }

        setTotal(
            isWeight(unit)
                ? calculateWeight(quantity, cost)
                : calculatePieces(quantity, cost)
        )
    }

    useWatchForm({ watch, callback: handleCallback })

    const onChangeUnit = (value: string) => {
        if (isWeight(value as Unit) !== isWeight(unit)) {
            setTotal({
                rounded: item.rounded,
                costRounded: item.costRounded,
                remainder: item.remainder
            })
            reset()
        }

        setUnit(value as Unit)
    }

    const onChangeCurrency = (value: string) => {
        setCurrency(value as Currency)
    }

    useSaveProduct({
        itemId: Number(id),
        item,
        products,
        setProducts: setProductsWithCloud,
        initData: {
            rounded: total.rounded,
            costRounded: total.costRounded,
            remainder: total.remainder,
            unit,
            currency,
            ...getValues()
        }
    })

    return (
        <FormProvider
            watch={watch}
            reset={reset}
            getValues={getValues}
            {...rest}
        >
            <DynamicName />

            <InputForm
                total={total}
                unit={unit}
                onChangeUnit={onChangeUnit}
                currency={currency}
                onChangeCurrency={onChangeCurrency}
            />

            <DeleteButton
                id={id}
                products={products}
                setProducts={setProductsWithCloud}
            />
        </FormProvider>
    )
}
