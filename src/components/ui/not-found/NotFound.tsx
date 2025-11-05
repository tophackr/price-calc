'use client'

import DuckNotFound from '@public/lottie/Duck-NotFound.json'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { List, Placeholder } from 'tmaui'
import { useBackButton } from '@/hooks/use-back-button'
import { NotFoundButton } from './NotFoundButton'

const LottieLazy = dynamic(() => import('lottie-react'), { ssr: false })

export function NotFound() {
    useBackButton()

    const t = useTranslations('NotFound')

    return (
        <List className={'min-h-screen content-center'}>
            <Placeholder
                header={t('title')}
                description={t('description')}
                action={<NotFoundButton>{t('button')}</NotFoundButton>}
            >
                <LottieLazy
                    animationData={DuckNotFound}
                    loop={true}
                />
            </Placeholder>
        </List>
    )
}
