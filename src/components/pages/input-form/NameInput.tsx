import { useTranslations } from 'next-intl'
import { useFormContext } from 'react-hook-form'
import { Input, Section } from 'tmaui'
import type { Product } from '@/store/products/products.types'
import { useIsApplePlatform } from '@/hooks/useIsApplePlatform'

export function NameInput() {
  const t = useTranslations('Home.name')
  const isApplePlatform = useIsApplePlatform()

  const { register } = useFormContext<Product>()

  return (
    <Section>
      <Input
        before={isApplePlatform && <span className='w-20'>{t('title')}</span>}
        header={!isApplePlatform && t('title')}
        placeholder={t('placeholder')}
        {...register('name', {
          setValueAs: (value: string) => value || undefined
        })}
      />
    </Section>
  )
}
