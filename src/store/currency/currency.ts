import { cloudStorage } from '@telegram-apps/sdk-react'
import { Currency } from '@/shared/enums/currency.enum'

const CURRENCY_NAME = 'TG_CURRENCY'

export const defaultCurrency = Currency.ruble

export async function getCurrency(): Promise<Currency> {
    if (!cloudStorage.isSupported()) return defaultCurrency

    const currency = await cloudStorage.getItem([CURRENCY_NAME])

    console.log('currency', currency)

    return (currency[CURRENCY_NAME] || defaultCurrency) as Currency
}

export async function setCurrency(currency?: Currency) {
    if (cloudStorage.isSupported()) {
        await cloudStorage.setItem(CURRENCY_NAME, currency || defaultCurrency)
    }
}
