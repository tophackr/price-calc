import { combineReducers } from 'redux'
import { langSliceReducer } from './lang/lang.slice'
import { productsSliceReducer } from './products/products.slice'

export const rootReducer = combineReducers({
  langSlice: langSliceReducer,
  productsSlice: productsSliceReducer
})
