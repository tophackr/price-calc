'use client'

import DuckNotFound from '@public/lottie/Duck-NotFound.json'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { List, Placeholder } from 'tmaui'
import { BackButton } from '../tma/BackButton'
import { NotFoundButton } from './NotFoundButton'

const LottieLazy = dynamic(() => import('lottie-react'), { ssr: false })

export function NotFound() {
  const t = useTranslations('NotFound')

  return (
    <BackButton>
      <List className='min-h-screen content-center'>
        <Placeholder
          header={t('title')}
          description={t('description')}
          action={<NotFoundButton>{t('button')}</NotFoundButton>}
        >
          <LottieLazy
            width={144}
            height={144}
            animationData={DuckNotFound}
            loop={true}
          />
        </Placeholder>
      </List>
    </BackButton>
  )
}
