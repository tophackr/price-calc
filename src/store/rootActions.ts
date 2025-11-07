import { langSliceActions } from './lang/lang.slice'
import { productsSliceActions } from './products/products.slice'

export const rootActions = {
  ...langSliceActions,
  ...productsSliceActions
}
