import {
    type RetrieveLPResult,
    retrieveLaunchParams
} from '@telegram-apps/sdk-react'
import { useMemo } from 'react'

export function useLaunchParams(): RetrieveLPResult {
    return useMemo(() => retrieveLaunchParams(), [])
}
