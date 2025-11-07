import { toFixedNumber } from '@/utils/integer/toFixedNumber'

export function valueAsFloat(value: unknown): number | undefined | unknown {
  if (typeof value === 'string') {
    const normalized = value.replace(',', '.')
    const num = parseFloat(normalized)
    return isNaN(num) ? undefined : toFixedNumber(num)
  }
  return value
}
