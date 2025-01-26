import DuckNotFound from '@public/lottie/Duck-NotFound.json'
import { Placeholder } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'

const LottieLazy = dynamic(() => import('lottie-react'), { ssr: false })

export function NotFound() {
    const t = useTranslations('Search.NotFound')

    return (
        <Placeholder
            header={t('title')}
            description={t('description')}
        >
            <LottieLazy
                animationData={DuckNotFound}
                loop={true}
            />
        </Placeholder>
    )
}
