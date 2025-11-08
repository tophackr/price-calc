import { memo, useMemo } from 'react'
import { useTranslations } from 'use-intl'
import { Currency } from '@/types/currency'
import type { ItemProps } from '@/types/item'
import { isWeight } from '@/utils/boolean/is-weight'
import { PlaceholderBlock } from './PlaceholderBlock'
import { PriceInput } from './PriceInput'
import { SelectInput } from './SelectInput'
import { WeightInput } from './WeightInput'

export const InputForm = memo(function InputForm({ item }: ItemProps) {
  const t = useTranslations('Currency')

  const availableCurrency = useMemo(
    () =>
      Currency.filter(curr => t.has(curr as never))
        .map(curr => ({ [curr]: t(curr as never) }))
        .reduce((prev, curr) => {
          return { ...prev, ...curr }
        }, {}),
    [t]
  )

  return (
    <>
      <PlaceholderBlock item={item} />

      <div className='grid grid-cols-2 gap-4'>
        <PriceInput />

        <WeightInput isWeight={isWeight(item.unit)} />
      </div>

      <SelectInput currencies={availableCurrency} />
    </>
  )
})
