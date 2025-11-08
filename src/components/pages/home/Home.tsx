'use client'

import { memo } from 'react'
import { SaveButton } from '@/components/ui/action/SaveButton'
import { BackButton } from '@/components/ui/tma/BackButton'
import { InputForm } from '../input-form/InputForm'
import { Products } from './products/Products'
import { useSaveProducts } from './products/useSaveProducts'
import { useWatchProduct } from './useWatchProduct'

export const Home = memo(function Home() {
  const item = useWatchProduct()
  const saveCallback = useSaveProducts({ item })

  return (
    <BackButton hide={true}>
      <InputForm item={item} />

      <Products />

      <SaveButton
        callback={saveCallback}
        withInvisible
      />
    </BackButton>
  )
})
