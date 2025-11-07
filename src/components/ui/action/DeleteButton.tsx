'use client'

import { hapticFeedback } from '@tma.js/sdk-react'
import type { JSX, PropsWithChildren } from 'react'
import { memo } from 'react'
import type { ButtonCellProps } from 'tmaui'
import { ButtonCell } from 'tmaui'
import { useTranslations } from 'use-intl'
import type { RouteProps } from '@/types/route-props'
import { useButtonClick } from '@/utils/button-click/useButtonClick'
import { cx } from '@/utils/cx'
import { generateUniqueId } from '@/utils/generateUniqueId'
import { type PopupCallbacks, getPopup } from '../tma/utils/getPopup'

interface DeleteButtonProps {
  title?: string
  message: string
}

export const DeleteButton = memo(function DeleteButton({
  className,
  onClick,
  title,
  message,
  route,
  children,
  ...props
}: PropsWithChildren &
  ButtonCellProps &
  DeleteButtonProps &
  Partial<RouteProps>): JSX.Element {
  const t = useTranslations('Common')

  const ok = generateUniqueId()
  const cancel = generateUniqueId()

  const { disabled, onClick: deleteCallback } = useButtonClick({
    callback: onClick,
    route
  })

  const popupCallbacks: PopupCallbacks = {
    [ok]: () => {
      deleteCallback({} as never)
      hapticFeedback.notificationOccurred('success')
    }
  }

  const showPopup = () =>
    getPopup(
      {
        title: title ?? t('deletion'),
        message,
        buttons: [
          {
            id: ok,
            type: 'ok'
          },
          {
            id: cancel,
            type: 'cancel'
          }
        ]
      },
      popupCallbacks
    )

  return (
    <ButtonCell
      {...props}
      mode='destructive'
      className={cx('justify-center', className)}
      disabled={disabled}
      onClick={showPopup}
    >
      {children ?? t('delete')}
    </ButtonCell>
  )
})
