import { type LaunchParams, useLaunchParams } from '@telegram-apps/sdk-react'

export function useIsAppleClient(lp?: LaunchParams): boolean {
    if (!lp) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        lp = useLaunchParams()
    }

    return ['macos', 'ios'].includes(lp.platform)
}
