'use client'

import { type PropsWithChildren, memo } from 'react'
import { Button } from 'tmaui'
import { pagesUrl } from '@/config/pages-url.config'
import { useButtonClick } from '@/utils/button-click/useButtonClick'

export const NotFoundButton = memo(function NotFoundButton({
  children
}: PropsWithChildren) {
  const props = useButtonClick({ route: pagesUrl.home })

  return (
    <Button
      size='l'
      stretched={true}
      {...props}
    >
      {children}
    </Button>
  )
})
