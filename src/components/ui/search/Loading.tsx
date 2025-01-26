import DuckLoading from '@public/lottie/Duck-Loading.json'
import { Placeholder } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'

const LottieLazy = dynamic(() => import('lottie-react'), { ssr: false })

export function Loading() {
    const t = useTranslations('Search.Loading')

    return (
        <Placeholder
            header={t('title')}
            description={t('description')}
        >
            <LottieLazy
                animationData={DuckLoading}
                loop={true}
            />
        </Placeholder>
    )
}
