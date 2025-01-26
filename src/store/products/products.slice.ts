import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { WritableDraft } from 'immer'
import type { RootState } from '../store'
import { defaultProducts } from './products'
import type { IProduct } from './products.types'

interface ProductsState {
    value: IProduct[]
}

const initialState: ProductsState = {
    value: defaultProducts
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(
            state: WritableDraft<ProductsState>,
            action: PayloadAction<IProduct[]>
        ) {
            state.value = action.payload
        }
    }
})

export const selectProducts = (state: RootState) => state.productsSlice.value

export const { actions: productsSliceActions, reducer: productsSliceReducer } =
    productsSlice
