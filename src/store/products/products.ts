import {
    getCloudStorageItem,
    isCloudStorageSupported,
    setCloudStorageItem
} from '@telegram-apps/sdk-react'
import type { IProduct } from './products.types'

const PRODUCT_NAME = 'TG_SAVED_ITEMS'

export const defaultProducts = []

export async function getProducts(): Promise<IProduct[]> {
    if (!isCloudStorageSupported()) return defaultProducts

    const products = await getCloudStorageItem(PRODUCT_NAME)

    return products ? JSON.parse(products) : defaultProducts
}

export async function setProducts(products?: IProduct[]) {
    if (isCloudStorageSupported()) {
        await setCloudStorageItem(
            PRODUCT_NAME,
            JSON.stringify(products || defaultProducts)
        )
    }
}
