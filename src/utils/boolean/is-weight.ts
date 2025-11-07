import { Unit } from '@/types/unit'

export const isWeight = (unit: Unit): boolean => ![Unit.pieces].includes(unit)
