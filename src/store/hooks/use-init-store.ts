import { getAutoSaveItems } from '../auto-save-items/auto-save-items'
import { useAutoSaveItems } from '../auto-save-items/use-auto-save-items'
import { getCurrency } from '../currency/currency'
import { useCurrency } from '../currency/use-currency'
import { getLocale } from '../lang/lang'
import { useLocale } from '../lang/use-locale'
import { getProducts } from '../products/products'
import { useProducts } from '../products/use-products'
import { getUnit } from '../unit/unit'
import { useUnit } from '../unit/use-unit'

export function useInitStore() {
    const { setLocale } = useLocale()
    getLocale().then(setLocale)

    const { setUnit } = useUnit()
    getUnit().then(setUnit)

    const { setCurrency } = useCurrency()
    getCurrency().then(setCurrency)

    const { setAutoSaveItems } = useAutoSaveItems()
    getAutoSaveItems().then(setAutoSaveItems)

    const { setProducts } = useProducts()
    getProducts().then(setProducts)
}
