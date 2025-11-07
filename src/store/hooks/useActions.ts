import { useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { useAppDispatch } from '@/store/hooks/useAppDispatch'
import { rootActions } from '../rootActions'

export const useActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
