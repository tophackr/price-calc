import { Text } from '@telegram-apps/telegram-ui'
import { Icon16Chevron } from '@telegram-apps/telegram-ui/dist/icons/16/chevron'
import { useIsAppleClient } from '@/hooks/use-is-apple-client'
import styles from './ChevronCell.module.css'

export interface ChevronCellProps {
    text?: string
}

export function ChevronCell({ text }: ChevronCellProps) {
    const isApple = useIsAppleClient()

    return (
        <>
            {text && <Text className={styles['subtitle']}>{text}</Text>}

            {isApple && <Icon16Chevron className={styles['chevron']} />}
        </>
    )
}
