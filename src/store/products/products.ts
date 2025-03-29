import { cloudStorage } from '@telegram-apps/sdk-react'
import type { IProduct } from './products.types'

const PRODUCT_NAME = 'TG_SAVED_ITEMS'

export const defaultProducts = []

export async function getProducts(): Promise<IProduct[]> {
    if (!cloudStorage.isSupported()) return defaultProducts

    const products = await cloudStorage.getItem([PRODUCT_NAME])

    return products ? JSON.parse(products[PRODUCT_NAME]) : defaultProducts
}

export async function setProducts(products?: IProduct[]) {
    if (cloudStorage.isSupported()) {
        await cloudStorage.setItem(
            PRODUCT_NAME,
            JSON.stringify(products || defaultProducts)
        )
    }
}
