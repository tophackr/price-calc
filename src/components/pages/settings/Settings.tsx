'use client'

import dynamic from 'next/dynamic'
import type { Currency } from '@/shared/enums/currency.enum'
import type { Unit } from '@/shared/enums/unit.enum'
import { useCurrency } from '@/store/currency/use-currency'
import { useUnit } from '@/store/unit/use-unit'
import { useBackButton } from '@/hooks/use-back-button'
import { useSettingsButton } from '@/hooks/use-settings-button'
import { LanguageSkeleton } from '../skeletons/Language.skeleton'
import { SelectSkeleton } from '../skeletons/Select.skeleton'
import { AutoSaveItemsInput } from './AutoSaveItems.input'

const DynamicLanguage = dynamic(
    () => import('./Language.input').then(mod => mod.LanguageInput),
    {
        loading: () => <LanguageSkeleton />,
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

export function Settings() {
    useSettingsButton()
    useBackButton()

    const { unit, setUnitWithCloud } = useUnit()
    const { currency, setCurrencyWithCloud } = useCurrency()

    const onChangeUnit = (value: string) => {
        setUnitWithCloud(value as Unit)
    }

    const onChangeCurrency = (value: string) => {
        setCurrencyWithCloud(value as Currency)
    }

    return (
        <>
            <DynamicLanguage />

            <DynamicSelect
                unit={unit}
                onChangeUnit={onChangeUnit}
                currency={currency}
                onChangeCurrency={onChangeCurrency}
            />

            <AutoSaveItemsInput />
        </>
    )
}
