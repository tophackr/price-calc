import { Currency } from '@/shared/enums/currency.enum'
import { useActions } from '../hooks/use-actions'
import { useAppSelector } from '../hooks/use-app-selector'
import { setCurrency as setCurrencyCloud } from './currency'
import { selectCurrency } from './currency.slice'

export function useCurrency() {
    const currency = useAppSelector(selectCurrency)
    const { setCurrency } = useActions()

    const setCurrencyWithCloud = (currency: Currency) => {
        setCurrency(currency)
        setCurrencyCloud(currency)
    }

    return { currency, setCurrency, setCurrencyWithCloud }
}
