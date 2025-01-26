import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { WritableDraft } from 'immer'
import type { RootState } from '../store'
import { defaultAutoSaveItems } from './auto-save-items'

interface AutoSaveItemsState {
    value: boolean
}

const initialState: AutoSaveItemsState = {
    value: defaultAutoSaveItems
}

const autoSaveItemsSlice = createSlice({
    name: 'auto_save_items',
    initialState,
    reducers: {
        setAutoSaveItems(
            state: WritableDraft<AutoSaveItemsState>,
            action: PayloadAction<boolean>
        ) {
            state.value = action.payload
        }
    }
})

export const selectAutoSaveItems = (state: RootState) =>
    state.autoSaveItemsSlice.value

export const {
    actions: autoSaveItemsSliceActions,
    reducer: autoSaveItemsSliceReducer
} = autoSaveItemsSlice
