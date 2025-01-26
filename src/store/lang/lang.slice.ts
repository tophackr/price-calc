import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { WritableDraft } from 'immer'
import { defaultLocale } from '@/core/i18n/config'
import type { Locale } from '@/core/i18n/types'
import type { RootState } from '../store'

interface LangState {
    value: Locale
}

const initialState: LangState = {
    value: defaultLocale
}

const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        setLocale(
            state: WritableDraft<LangState>,
            action: PayloadAction<Locale>
        ) {
            state.value = action.payload
        }
    }
})

export const selectLocale = (state: RootState) => state.langSlice.value

export const { actions: langSliceActions, reducer: langSliceReducer } =
    langSlice
