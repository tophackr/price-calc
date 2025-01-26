import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { WritableDraft } from 'immer'
import { Unit } from '@/shared/enums/unit.enum'
import type { RootState } from '../store'
import { defaultUnit } from './unit'

interface UnitState {
    value: Unit
}

const initialState: UnitState = {
    value: defaultUnit
}

const unitSlice = createSlice({
    name: 'unit',
    initialState,
    reducers: {
        setUnit(state: WritableDraft<UnitState>, action: PayloadAction<Unit>) {
            state.value = action.payload
        }
    }
})

export const selectUnit = (state: RootState) => state.unitSlice.value

export const { actions: unitSliceActions, reducer: unitSliceReducer } =
    unitSlice
