import { useLaunchParams } from '@tma.js/sdk-react'

export function useIsApplePlatform(): boolean {
    const launchParams = useLaunchParams()
    return ['macos', 'ios'].includes(launchParams.tgWebAppPlatform)
}
