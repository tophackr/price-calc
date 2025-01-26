'use client'

import DuckLoading from '@public/lottie/Duck-Loading.json'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const DynamicLottie = dynamic(() => import('lottie-react'), { ssr: false })

export function Loader() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) {
        return null
    }

    return (
        <div className={'min-h-screen justify-items-center content-center'}>
            <DynamicLottie
                animationData={DuckLoading}
                loop={true}
                width={144}
                height={144}
                style={{ width: 144, height: 144 }}
            />
        </div>
    )
}
