import type { ShowOptions } from '@tma.js/sdk-react'
import { popup } from '@tma.js/sdk-react'

export type PopupCallbacks = Record<string, () => void>

export async function getPopup(
  options: ShowOptions,
  callbacks: PopupCallbacks
): Promise<void | '' | null> {
  const buttonId = await popup.show(options)
  return buttonId && callbacks[buttonId]?.()
}
