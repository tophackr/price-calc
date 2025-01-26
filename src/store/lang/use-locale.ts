import type { Locale } from '@/core/i18n/types'
import { useActions } from '../hooks/use-actions'
import { useAppSelector } from '../hooks/use-app-selector'
import { setLocale as setLocaleCloud } from './lang'
import { selectLocale } from './lang.slice'

export function useLocale() {
    const locale = useAppSelector(selectLocale)
    const { setLocale } = useActions()

    const setLocaleWithCloud = (locale: Locale) => {
        setLocale(locale)
        setLocaleCloud(locale)
    }

    return { locale, setLocale, setLocaleWithCloud }
}
