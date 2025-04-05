'use client'

import dynamic from 'next/dynamic'
import { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import type { Currency } from '@/shared/enums/currency.enum'
import type { Unit } from '@/shared/enums/unit.enum'
import type { ICalculateCosts } from '@/shared/interfaces/calculate-cost.interface'
import type { ItemForm } from '@/shared/interfaces/item.interface'
import { useCurrency } from '@/store/currency/use-currency'
import { useUnit } from '@/store/unit/use-unit'
import { useSettingsButton } from '@/hooks/use-settings-button'
import { useWatchForm } from '@/hooks/use-watch-form'
import { isWeight } from '@/utils/boolean/is-weight'
import {
    calculatePieces,
    calculateWeight
} from '@/utils/integer/calculate-costs'
import { InputForm } from '../input-form/Input.form'

const LazyProducts = dynamic(
    () => import('./products/Products').then(mod => mod.Products),
    { ssr: false }
)

const initialState: ICalculateCosts = {
    rounded: 0,
    costRounded: 0,
    remainder: 0
}

export function Home() {
    useSettingsButton()

    const [total, setTotal] = useState(initialState)

    const { unit: unitData } = useUnit()
    const { currency: currencyData } = useCurrency()

    const [unit, setUnit] = useState(unitData)
    const [currency, setCurrency] = useState(currencyData)

    const { watch, reset, getValues, ...rest } = useForm<ItemForm>({
        mode: 'onChange'
    })

    const onWatchCallback = useCallback(
        ({ quantity, cost }: ItemForm) => {
            if (!quantity || !cost) {
                return
            }

            setTotal(
                isWeight(unit)
                    ? calculateWeight(quantity, cost)
                    : calculatePieces(quantity, cost)
            )
        },
        [unit]
    )

    useWatchForm({ watch, callback: onWatchCallback })

    const onChangeUnit = useCallback(
        (value: string) => {
            if (isWeight(value as Unit) !== isWeight(unit)) {
                setTotal(initialState)
                reset()
            }

            setUnit(value as Unit)
        },
        [reset, unit]
    )

    const onChangeCurrency = useCallback((value: string) => {
        setCurrency(value as Currency)
    }, [])

    return (
        <FormProvider
            watch={watch}
            reset={reset}
            getValues={getValues}
            {...rest}
        >
            <InputForm
                total={total}
                unit={unit}
                onChangeUnit={onChangeUnit}
                currency={currency}
                onChangeCurrency={onChangeCurrency}
            />

            <LazyProducts
                item={{
                    rounded: total.rounded,
                    costRounded: total.costRounded,
                    remainder: total.remainder,
                    unit,
                    currency,
                    quantity: 0,
                    cost: 0,
                    ...getValues()
                }}
            />
        </FormProvider>
    )
}
