import type { Currency } from '../enums/currency.enum'
import type { Unit } from '../enums/unit.enum'

export interface Measurement {
    unit: Unit
    currency: Currency
}
