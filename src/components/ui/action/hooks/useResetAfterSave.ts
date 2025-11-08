import { useState } from 'react'
import type { FieldValues, UseFormReset } from 'react-hook-form'
import { isCleanedEqual } from '@/utils/lodash/isCleanedEqual'

interface UseResetAfterSaveProps<
  TFieldValues extends FieldValues = FieldValues
> {
  data: TFieldValues | undefined
  reset: UseFormReset<TFieldValues>
}

export function useResetAfterSave<
  TFieldValues extends FieldValues = FieldValues
>({ data, reset }: UseResetAfterSaveProps<TFieldValues>): void {
  const [cashedData, setCashedData] = useState<TFieldValues>()

  if (data && (!cashedData || !isCleanedEqual(data, cashedData))) {
    reset(data)
    setCashedData(data)
  }
}
