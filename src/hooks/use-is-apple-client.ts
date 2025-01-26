import { type LaunchParams, useLaunchParams } from '@telegram-apps/sdk-react'

export function useIsAppleClient(lp?: LaunchParams): boolean {
    if (!lp) {
        lp = useLaunchParams()
    }

    return ['macos', 'ios'].includes(lp.platform)
}
