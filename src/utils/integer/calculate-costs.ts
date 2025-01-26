import type { ICalculateCosts } from '@/shared/interfaces/calculate-cost.interface'

function calculateCostPerUnit(quantity: number, totalCost: number): number {
    return totalCost / quantity
}

function calculateTotalCost(weight: number, costPerKg: number): number {
    return weight * costPerKg
}

export function calculateWeight(weight: number, cost: number): ICalculateCosts {
    const costPerKg = calculateCostPerUnit(weight, cost)

    const rounded = Math.ceil(weight)
    const costRounded = calculateTotalCost(rounded, costPerKg)
    const remainder = calculateTotalCost(1, costPerKg)

    const data: ICalculateCosts = { rounded, costRounded }

    if (rounded && rounded !== 1) {
        Object.assign(data, { remainder })
    }

    return data
}

export function calculatePieces(pieces: number, cost: number): ICalculateCosts {
    const costPerPiece = calculateCostPerUnit(pieces, cost)

    return {
        rounded: 1,
        costRounded: costPerPiece
    }
}
