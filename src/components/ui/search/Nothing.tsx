import DuckFlashback from '@public/lottie/Duck-Flashback.json'
import { Placeholder } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import type { ReactNode } from 'react'

interface NothingProps {
    title?: ReactNode
    description?: ReactNode
    animationData?: () => void
}

const LottieLazy = dynamic(() => import('lottie-react'), { ssr: false })

export function Nothing({ title, description, animationData }: NothingProps) {
    const t = useTranslations('Search.Nothing')

    return (
        <Placeholder
            header={title ?? t('title')}
            description={description ?? t('description')}
        >
            <LottieLazy
                animationData={animationData ? animationData() : DuckFlashback}
                loop={true}
            />
        </Placeholder>
    )
}
