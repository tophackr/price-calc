import { useCallback } from 'react'
import type { Unit } from '@/shared/enums/unit.enum'
import { useActions } from '../hooks/use-actions'
import { useAppSelector } from '../hooks/use-app-selector'
import { setUnit as setUnitCloud } from './unit'
import { selectUnit } from './unit.slice'

export function useUnit() {
    const unit = useAppSelector(selectUnit)
    const { setUnit } = useActions()

    const setUnitWithCloud = useCallback(
        (unit: Unit) => {
            setUnit(unit)
            setUnitCloud(unit)
        },
        [setUnit]
    )

    return { unit, setUnit, setUnitWithCloud }
}
