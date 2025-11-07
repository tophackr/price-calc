import type { Product } from '@/store/products/products.types'

export type CalculatedProduct = Pick<
  Product,
  'roundedWeight' | 'roundedSum' | 'remainderSum'
>

function calculateCostPerUnit(quantity: number, totalCost: number): number {
  return totalCost / quantity
}

function calculateTotalCost(weight: number, costPerKg: number): number {
  return weight * costPerKg
}

export function calculateWeight(
  weight: number,
  price: number
): CalculatedProduct {
  const costPerKg = calculateCostPerUnit(weight, price)

  const roundedWeight = Math.ceil(weight)
  const roundedSum = calculateTotalCost(roundedWeight, costPerKg)
  const remainderSum = calculateTotalCost(1, costPerKg)

  const data: CalculatedProduct = { roundedWeight, roundedSum }

  if (roundedWeight && roundedWeight !== 1) {
    Object.assign(data, { remainderSum })
  }

  return data
}

export function calculatePieces(
  pieces: number,
  price: number
): CalculatedProduct {
  const costPerPiece = calculateCostPerUnit(pieces, price)

  return {
    roundedWeight: 1,
    roundedSum: costPerPiece
  }
}
