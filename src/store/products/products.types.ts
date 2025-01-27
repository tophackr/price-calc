import type { ICalculateCosts } from '@/shared/interfaces/calculate-cost.interface'
import type { ItemOrder } from '@/shared/interfaces/item.interface'
import type { Measurement } from '@/shared/interfaces/measurement.interface'

export type IProduct = ICalculateCosts & ItemOrder & Measurement
