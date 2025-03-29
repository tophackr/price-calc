import { cloudStorage } from '@telegram-apps/sdk-react'
import { Unit } from '@/shared/enums/unit.enum'

const UNIT_NAME = 'TG_UNIT'

export const defaultUnit = Unit.kilogram

export async function getUnit(): Promise<Unit> {
    if (!cloudStorage.isSupported()) return defaultUnit

    const unit = await cloudStorage.getItem([UNIT_NAME])

    return (unit[UNIT_NAME] || defaultUnit) as Unit
}

export async function setUnit(unit?: Unit) {
    if (cloudStorage.isSupported()) {
        await cloudStorage.setItem(UNIT_NAME, unit || defaultUnit)
    }
}
