import { Unit } from '@/shared/enums/unit.enum'

export const isWeight = (unit: Unit): boolean => ![Unit.pieces].includes(unit)
