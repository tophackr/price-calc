import {
    getCloudStorageItem,
    isCloudStorageSupported,
    setCloudStorageItem
} from '@telegram-apps/sdk-react'
import { Unit } from '@/shared/enums/unit.enum'

const UNIT_NAME = 'TG_UNIT'

export const defaultUnit = Unit.kilogram

export async function getUnit(): Promise<Unit> {
    if (!isCloudStorageSupported()) return defaultUnit

    const unit = await getCloudStorageItem(UNIT_NAME)

    return (unit || defaultUnit) as Unit
}

export async function setUnit(unit?: Unit) {
    if (isCloudStorageSupported()) {
        await setCloudStorageItem(UNIT_NAME, unit || defaultUnit)
    }
}
