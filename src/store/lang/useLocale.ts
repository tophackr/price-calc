import { useCallback } from 'react'
import type { Locale } from '@/i18n/types'
import { useActions } from '../hooks/useActions'
import { useAppSelector } from '../hooks/useAppSelector'
import { setLocale as setLocaleCloud } from './lang'
import { selectLocale } from './lang.slice'

export function useLocale() {
  const locale = useAppSelector(selectLocale)
  const { setLocale } = useActions()

  const setLocaleWithCloud = useCallback(
    (locale: Locale) => {
      setLocale(locale)
      setLocaleCloud(locale)
    },
    [setLocale]
  )

  return { locale, setLocale, setLocaleWithCloud }
}
