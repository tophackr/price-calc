import type { Currency } from '@/types/currency'
import type { Unit } from '@/types/unit'

export interface Product {
  id: string

  roundedWeight: number // Округленный вес
  roundedSum: number // Округленная сумма
  remainderSum?: number // Округленная сумма если более 1кг

  name?: string // Название
  weight: number // Вес
  price: number // Цена

  unit: Unit // Единица измерения
  currency: Currency[number] // Валюта
}

export type Products = Record<string, Product>
