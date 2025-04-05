import { showPopup } from '@telegram-apps/sdk-react'
import { ButtonCell } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { memo, useCallback } from 'react'

interface ClearButtonProps {
    onClick: () => void
}

export const ClearButton = memo(function ClearButton({
    onClick
}: ClearButtonProps) {
    const t = useTranslations('Products.Clear')

    const onButtonClick = useCallback(() => {
        showPopup({
            title: t('title'),
            message: t('description'),
            buttons: [
                { id: 'cancel', type: 'cancel' },
                { id: 'ok', type: 'ok' }
            ]
        }).then(buttonId => {
            if (buttonId === 'ok') {
                onClick()
            }
        })
    }, [onClick, t])

    return (
        <ButtonCell
            className={'justify-center'}
            mode={'destructive'}
            onClick={onButtonClick}
        >
            {t('button')}
        </ButtonCell>
    )
})
