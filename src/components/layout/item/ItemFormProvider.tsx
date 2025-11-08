'use client'

import type { PropsWithChildren } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { List } from 'tmaui'
import { useResetAfterSave } from '@/components/ui/action/hooks/useResetAfterSave'
import type { ItemIdProps } from '@/types/item'
import { Unit } from '@/types/unit'
import type { Product } from '@/store/products/products.types'
import { useProducts } from '@/store/products/useProducts'

export function ItemFormProvider({
  id,
  children
}: PropsWithChildren<Partial<ItemIdProps>>) {
  const methods = useForm<Partial<Product>>()
  const { products } = useProducts()
  const item = id ? products[id] : {}

  useResetAfterSave({
    reset: methods.reset,
    data: {
      currency: 'RUB',
      unit: Unit.kilogram,
      weight: undefined,
      price: undefined,
      ...item
    }
  })

  if (id && !item) {
    // TODO: make nf page
    return null
  }

  return (
    <FormProvider {...methods}>
      <List>{children}</List>
    </FormProvider>
  )
}
