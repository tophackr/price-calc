import {
    type LaunchParams,
    retrieveLaunchParams
} from '@telegram-apps/sdk-react'

export function useIsAppleClient(lp?: LaunchParams): boolean {
    if (!lp) {
        lp = retrieveLaunchParams()
    }

    return ['macos', 'ios'].includes(lp.tgWebAppPlatform)
}
