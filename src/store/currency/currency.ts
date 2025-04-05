import {
    getCloudStorageItem,
    isCloudStorageSupported,
    setCloudStorageItem
} from '@telegram-apps/sdk-react'
import { Currency } from '@/shared/enums/currency.enum'

const CURRENCY_NAME = 'TG_CURRENCY'

export const defaultCurrency = Currency.ruble

export async function getCurrency(): Promise<Currency> {
    if (!isCloudStorageSupported()) return defaultCurrency

    const currency = await getCloudStorageItem(CURRENCY_NAME)

    return (currency || defaultCurrency) as Currency
}

export async function setCurrency(currency?: Currency) {
    if (isCloudStorageSupported()) {
        await setCloudStorageItem(CURRENCY_NAME, currency || defaultCurrency)
    }
}
