'use client'

import Lottie from 'lottie-react'
import { List, Placeholder } from 'tmaui'
import { useTranslations } from 'use-intl'
import { BackButton } from '../tma/BackButton'
import { NotFoundButton } from './NotFoundButton'
import DuckNotFound from '@/lottie/Duck-NotFound.json'

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
          <Lottie
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
