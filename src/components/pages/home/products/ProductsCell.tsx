import { useFormatter, useTranslations } from 'next-intl'
import { memo, useCallback } from 'react'
import { Cell } from 'tmaui'
import type { ItemProps } from '@/types/item'
import { pagesUrl } from '@/config/pages-url.config'
import { useButtonClick } from '@/utils/button-click/useButtonClick'
import { toFixedNumber } from '@/utils/integer/toFixedNumber'
import { formatCurrency } from '@/utils/string/format-currency'
import { formatPreview } from '@/utils/string/format-preview'

export const ProductsCell = memo(function ProductsItem({
  item: {
    id,
    roundedSum,
    roundedWeight,
    remainderSum,
    name,
    price,
    weight,
    currency,
    unit
  }
}: ItemProps) {
  const t = useTranslations('Home.unit.values')
  const formatter = useFormatter()
  const props = useButtonClick({ route: pagesUrl.itemId(id) })

  const getPreviewFormat = useCallback(
    (value: number, weight: number) =>
      formatPreview(
        formatCurrency(formatter, value, currency),
        weight,
        t(unit)
      ),
    [currency, formatter, t, unit]
  )

  return (
    <Cell
      subhead={name}
      subtitle={getPreviewFormat(
        roundedSum ? toFixedNumber(roundedSum) : 0,
        toFixedNumber(roundedWeight)
      )}
      description={!!remainderSum && getPreviewFormat(remainderSum, 1)}
      {...props}
    >
      {getPreviewFormat(price, toFixedNumber(weight))}
    </Cell>
  )
})
