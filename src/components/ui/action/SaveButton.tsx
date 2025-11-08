'use client'

import { hapticFeedback } from '@tma.js/sdk-react'
import { type JSX, useCallback } from 'react'
import type { FieldValues } from 'react-hook-form'
import { useFormContext } from 'react-hook-form'
import { useTranslations } from 'use-intl'
import type { RouteProps } from '@/types/route-props'
import { useFormError } from '@/hooks/useFormError'
import {
  type UseButtonClickProps,
  useButtonClick
} from '@/utils/button-click/useButtonClick'
import { callMultiple } from '@/utils/callMultiple'
import { MainButton, type MainButtonProps } from '../tma/MainButton'

type SaveMainButtonProps = Omit<
  MainButtonProps,
  'isLoaderVisible' | 'isEnabled' | 'onClick' | 'isVisible'
>

type SaveButtonProps<T extends FieldValues> = UseButtonClickProps<T> & {
  withInvisible?: boolean
}

export function SaveButton<T extends FieldValues>({
  text,
  route,
  callback,
  withInvisible,
  ...props
}: SaveButtonProps<T> &
  SaveMainButtonProps &
  Partial<RouteProps>): JSX.Element {
  const t = useTranslations('Common')

  const { disabled, onClick } = useButtonClick<T>({ route, callback })
  const successCallback = useCallback(
    () => hapticFeedback.notificationOccurred('success'),
    []
  )

  const {
    handleSubmit,
    formState: { dirtyFields }
  } = useFormContext<T>()
  const { onErrorCallback } = useFormError()

  return (
    <MainButton
      text={text ?? t('save')}
      isLoaderVisible={disabled}
      isEnabled={!disabled}
      isVisible={
        withInvisible ? Object.keys(dirtyFields).length > 0 : undefined
      }
      onClick={handleSubmit(
        callMultiple(onClick, successCallback),
        onErrorCallback
      )}
      {...props}
    />
  )
}
