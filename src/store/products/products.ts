import { cloudStorage } from '@tma.js/sdk-react'
import type { Products } from './products.types'

const PRODUCT_NAME = 'TG_SAVED_ITEMS'

export const defaultProducts = {}

export async function getProducts(): Promise<Products> {
  if (!cloudStorage.isSupported()) return defaultProducts

  const products = await cloudStorage.getItem(PRODUCT_NAME)

  return products ? JSON.parse(products) : defaultProducts
}

export async function setProducts(products?: Products) {
  if (cloudStorage.isSupported()) {
    await cloudStorage.setItem(
      PRODUCT_NAME,
      JSON.stringify(products || defaultProducts)
    )
  }
}
