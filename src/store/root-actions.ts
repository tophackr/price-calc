import { autoSaveItemsSliceActions } from './auto-save-items/auto-save-items.slice'
import { currencySliceActions } from './currency/currency.slice'
import { langSliceActions } from './lang/lang.slice'
import { productsSliceActions } from './products/products.slice'
import { unitSliceActions } from './unit/unit.slice'

export const rootActions = {
    ...unitSliceActions,
    ...currencySliceActions,
    ...langSliceActions,
    ...autoSaveItemsSliceActions,
    ...productsSliceActions
}
