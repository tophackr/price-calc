import { useFormContext } from 'react-hook-form'
import { Section, Select } from 'tmaui'
import { useTranslations } from 'use-intl'
import { Currency } from '@/types/currency'
import { Unit } from '@/types/unit'
import type { Product } from '@/store/products/products.types'
import { useIsApplePlatform } from '@/hooks/useIsApplePlatform'

interface SelectInputProps {
  currencies: Record<Currency[number], string>
}

export function SelectInput({ currencies }: SelectInputProps) {
  const t = useTranslations('Home')
  const isApplePlatform = useIsApplePlatform()

  const { register } = useFormContext<Product>()

  return (
    <Section>
      <Select
        before={
          isApplePlatform && <span className='w-20'>{t('unit.title')}</span>
        }
        header={!isApplePlatform && t('unit.title')}
        {...register('unit', {
          required: t('unit.required_error')
        })}
      >
        {Object.values(Unit).map(i => (
          <option
            key={i}
            value={i}
          >
            {t(`unit.values.${i}`)}
          </option>
        ))}
      </Select>

      <Select
        before={
          isApplePlatform && <span className='w-20'>{t('currency.title')}</span>
        }
        header={!isApplePlatform && t('currency.title')}
        {...register('currency', { required: t('currency.required_error') })}
      >
        {Object.entries(currencies).map(([key, value]) => (
          <option
            key={key}
            value={key}
          >
            {value}
          </option>
        ))}
      </Select>
    </Section>
  )
}
