import {
    $postEvent,
    $targetOrigin,
    ERR_UNKNOWN_ENV,
    TypedError,
    isIframe
} from '@telegram-apps/sdk-react'
import { fn, object } from '@telegram-apps/transformers'

interface WithWebviewProxy {
    TelegramWebviewProxy: {
        postEvent: (...args: unknown[]) => unknown
    }
}

const webViewProxy = object<WithWebviewProxy>({
    TelegramWebviewProxy: object({ postEvent: fn() })()
})

/**
 * Returns true in case, passed value contains path TelegramWebviewProxy.postEvent property and
 * postEvent is a function.
 * @param value - value to check.
 */
export function hasWebviewProxy<T>(value: T): value is T & WithWebviewProxy {
    return webViewProxy().isValid(value)
}

export function initIframe() {
    $postEvent.set((eventType: string, eventData?: unknown) => {
        console.info(
            'Posting event:',
            eventData ? { eventType, eventData } : { eventType }
        )

        const w = window
        const message = JSON.stringify({ eventType, eventData })

        // Telegram Web.
        if (isIframe()) {
            return w.parent.postMessage(message, $targetOrigin())
        }

        // Telegram for iOS and macOS.
        if (hasWebviewProxy(w)) {
            w.TelegramWebviewProxy.postEvent(
                eventType,
                JSON.stringify(eventData)
            )
            return
        }

        // Telegram for Windows Phone or Android.
        const { external } = w
        if (object({ notify: fn() })().isValid(external)) {
            external.notify(message)
            return
        }

        // Otherwise current environment is unknown, and we are not able to send event.
        throw new TypedError(ERR_UNKNOWN_ENV)
    })
}
