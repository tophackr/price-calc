import { useFormContext } from 'react-hook-form'
import { Input, Section } from 'tmaui'
import { useTranslations } from 'use-intl'
import type { Product } from '@/store/products/products.types'
import { inputErrorStatus } from '@/utils/when'
import { valueAsFloat } from './valueAsFloat'

export function PriceInput() {
  const t = useTranslations('Home.price')

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
        {...register('price', {
          required: t('required_error'),
          setValueAs: valueAsFloat
        })}
      />
    </Section>
  )
}
