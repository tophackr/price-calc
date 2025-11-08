'use client'

import { memo, useCallback } from 'react'
import { Headline, LargeTitle, Placeholder } from 'tmaui'
import { useFormatter, useTranslations } from 'use-intl'
import type { ItemProps } from '@/types/item'
import { toFixedNumber } from '@/utils/integer/toFixedNumber'
import { formatCurrency } from '@/utils/string/format-currency'
import { formatPreview } from '@/utils/string/format-preview'

export const PlaceholderBlock = memo(function PlaceholderBlock({
  item: { roundedWeight, roundedSum, remainderSum, unit, currency }
}: ItemProps) {
  const t = useTranslations('Home.unit.values')
  const formatter = useFormatter()

  const getCurrencyFormat = useCallback(
    (value: number, weight: number) =>
      formatPreview(
        formatCurrency(formatter, value, currency),
        weight,
        unit ? t(unit) : ''
      ),
    [currency, formatter, t, unit]
  )

  return (
    <Placeholder
      header={
        <LargeTitle
          weight='1'
          className='text-4xl'
        >
          {getCurrencyFormat(
            roundedSum ? toFixedNumber(roundedSum) : 0,
            toFixedNumber(roundedWeight || 1)
          )}
        </LargeTitle>
      }
      description={
        !!remainderSum && (
          <Headline>{getCurrencyFormat(remainderSum, 1)}</Headline>
        )
      }
      className='px-0! pb-0!'
    />
  )
})
