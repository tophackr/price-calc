import { useTranslations } from 'next-intl'
import { memo } from 'react'
import { useFormContext } from 'react-hook-form'
import { Input, Section } from 'tmaui'
import type { Product } from '@/store/products/products.types'
import { inputErrorStatus } from '@/utils/when'
import { valueAsFloat } from './valueAsFloat'

interface WeightInputProps {
  isWeight: boolean
}

export const WeightInput = memo(function QuantityInput({
  isWeight
}: WeightInputProps) {
  const t = useTranslations(`Home.${isWeight ? 'weight' : 'pieces'}`)

  const {
    register,
    formState: { errors }
  } = useFormContext<Product>()

  return (
    <Section header={t('title')}>
      <Input
        pattern='\d*'
        inputMode='decimal'
        header={t('title')}
        placeholder={t('placeholder')}
        {...inputErrorStatus(errors.weight)}
        {...register('weight', {
          required: t('required_error'),
          setValueAs: valueAsFloat
        })}
      />
    </Section>
  )
})
