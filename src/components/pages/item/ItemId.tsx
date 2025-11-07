'use client'

import { useTranslations } from 'next-intl'
import { memo } from 'react'
import { Section } from 'tmaui'
import { InputForm } from '@/components/pages/input-form/InputForm'
import { DeleteButton } from '@/components/ui/action/DeleteButton'
import { SaveButton } from '@/components/ui/action/SaveButton'
import { BackButton } from '@/components/ui/tma/BackButton'
import type { ItemIdProps } from '@/types/item'
import { pagesUrl } from '@/config/pages-url.config'
import { useSaveProducts } from '../home/products/useSaveProducts'
import { useWatchProduct } from '../home/useWatchProduct'
import { NameInput } from '../input-form/NameInput'
import { useDeleteProduct } from './useDeleteProduct'

export const ItemId = memo(({ id }: ItemIdProps) => {
  const t = useTranslations('Home')

  const item = useWatchProduct()
  const saveCallback = useSaveProducts({ item })
  const deleteCallback = useDeleteProduct(id)

  return (
    <BackButton route={pagesUrl.home}>
      <NameInput />

      <InputForm item={item} />

      <Section>
        <DeleteButton
          onClick={deleteCallback}
          message={t('delete_message')}
        />
      </Section>
      <SaveButton
        callback={saveCallback}
        withInvisible
      />
    </BackButton>
  )
})
