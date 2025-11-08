import messages from './messages/ru.json'

export enum Locale {
  ru = 'ru',
  en = 'en'
}

export type Translation = typeof messages

export interface TranslationConfig {
  locale: Locale
  messages: Translation
}
