import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { WritableDraft } from 'immer'
import { Currency } from '@/shared/enums/currency.enum'
import type { RootState } from '../store'
import { defaultCurrency } from './currency'

interface CurrencyState {
    value: Currency
}

const initialState: CurrencyState = {
    value: defaultCurrency
}

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setCurrency(
            state: WritableDraft<CurrencyState>,
            action: PayloadAction<Currency>
        ) {
            state.value = action.payload
        }
    }
})

export const selectCurrency = (state: RootState) => state.currencySlice.value

export const { actions: currencySliceActions, reducer: currencySliceReducer } =
    currencySlice
