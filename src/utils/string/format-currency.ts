import type { useFormatter } from 'use-intl'
import type { Currency } from '@/types/currency'

export function formatCurrency(
  formatter: ReturnType<typeof useFormatter>,
  value: number,
  currency: Currency[number] = 'RUB'
): string {
  return formatter.number(value, {
    style: 'currency',
    currency,
    currencyDisplay: 'narrowSymbol',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}
