import { combineReducers } from 'redux'
import { autoSaveItemsSliceReducer } from './auto-save-items/auto-save-items.slice'
import { currencySliceReducer } from './currency/currency.slice'
import { langSliceReducer } from './lang/lang.slice'
import { productsSliceReducer } from './products/products.slice'
import { unitSliceReducer } from './unit/unit.slice'

export const rootReducer = combineReducers({
    unitSlice: unitSliceReducer,
    currencySlice: currencySliceReducer,
    langSlice: langSliceReducer,
    autoSaveItemsSlice: autoSaveItemsSliceReducer,
    productsSlice: productsSliceReducer
})
