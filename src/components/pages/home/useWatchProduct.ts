import { useCallback, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Unit } from '@/types/unit'
import type { Product } from '@/store/products/products.types'
import { useWatchForm } from '@/hooks/useWatchForm'
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
  const [calculated, setCalculated] = useState(initialCalculated)

  const [unit, setUnit] = useState(Unit.kilogram)

  const { watch, reset, getValues } = useFormContext<Product>()
  const watchUnit = watch('unit')

  const onWatchCallback = useCallback(
    ({ weight, price }: Product) => {
      if (!weight || !price) {
        return
      }

      setCalculated(
        isWeight(unit)
          ? calculateWeight(weight, price)
          : calculatePieces(weight, price)
      )
    },
    [unit]
  )

  useWatchForm({ watch, callback: onWatchCallback })

  useEffect(() => {
    if (isWeight(watchUnit) !== isWeight(unit)) {
      setCalculated(initialCalculated)
      reset({
        ...getValues(),
        ...initialCalculated,
        price: undefined,
        weight: undefined
      })
    }

    if (watchUnit !== unit) {
      setUnit(watchUnit)
    }
  }, [getValues, reset, unit, watchUnit])

  const { roundedWeight, roundedSum, remainderSum } = getValues()

  return {
    ...getValues(),
    roundedWeight:
      calculated.roundedWeight > 0 ? calculated.roundedWeight : roundedWeight,
    roundedSum: calculated.roundedSum > 0 ? calculated.roundedSum : roundedSum,
    remainderSum: calculated.remainderSum ?? remainderSum
  }
}
