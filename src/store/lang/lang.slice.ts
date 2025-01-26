import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { WritableDraft } from 'immer'
import type { RootState } from '../store'
import { defaultLocale } from '@/i18n/config'
import type { Locale } from '@/i18n/types'

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
