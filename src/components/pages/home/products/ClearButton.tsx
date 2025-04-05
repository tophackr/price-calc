import { showPopup } from '@telegram-apps/sdk-react'
import { ButtonCell } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'

interface ClearButtonProps {
    onClick: () => void
}

export function ClearButton({ onClick }: ClearButtonProps) {
    const t = useTranslations('Products.Clear')

    const onButtonClick = () => {
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
    }

    return (
        <ButtonCell
            className={'justify-center'}
            mode={'destructive'}
            onClick={onButtonClick}
        >
            {t('button')}
        </ButtonCell>
    )
}
