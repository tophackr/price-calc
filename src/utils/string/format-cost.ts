import type { Currency } from '@/shared/enums/currency.enum'

export function formatCost(
    cost: number | string,
    currency: Currency,
    quantity: number,
    unit: string
) {
    return `${cost} ${currency} / ${quantity} ${unit}`
}
