import { popup } from '@tma.js/sdk-react'
import { useTranslations } from 'next-intl'
import { memo, useCallback } from 'react'
import { ButtonCell } from 'tmaui'

interface ClearButtonProps {
    onClick: () => void
}

export const ClearButton = memo(function ClearButton({
    onClick
}: ClearButtonProps) {
    const t = useTranslations('Products.Clear')

    const onButtonClick = useCallback(() => {
        popup
            .show({
                title: t('title'),
                message: t('description'),
                buttons: [
                    { id: 'cancel', type: 'cancel' },
                    { id: 'ok', type: 'ok' }
                ]
            })
            .then(buttonId => {
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
