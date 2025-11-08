'use client'

import { type PropsWithChildren, memo, useMemo } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '@/store/store'

export const StoreProvider = memo(function StoreProvider({
  children
}: PropsWithChildren) {
  const store = useMemo(() => makeStore(), [])

  return <Provider store={store}>{children}</Provider>
})
