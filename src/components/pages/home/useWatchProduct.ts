import { useMemo } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import type { Product } from '@/store/products/products.types'
import { isWeight } from '@/utils/boolean/is-weight'
import {
  type CalculatedProduct,
  calculatePieces,
  calculateWeight
} from '@/utils/integer/calculate-costs'

const initialCalculated: CalculatedProduct = {
  roundedWeight: 0,
  roundedSum: 0,
  remainderSum: 0
}

export function useWatchProduct(): Product {
  const { getValues, control } = useFormContext<Product>()

  const unit = useWatch({ control, name: 'unit' })
  const weight = useWatch({ control, name: 'weight' })
  const price = useWatch({ control, name: 'price' })
  const values = getValues()

  const calculated = useMemo(() => {
    if (!weight || !price) return initialCalculated
    return isWeight(unit)
      ? calculateWeight(weight, price)
      : calculatePieces(weight, price)
  }, [unit, weight, price])

  return {
    ...values,
    ...calculated
  }
}
