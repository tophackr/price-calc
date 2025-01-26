import { useLaunchParams } from '@telegram-apps/sdk-react'
import { Text } from '@telegram-apps/telegram-ui'
import { Icon16Chevron } from '@telegram-apps/telegram-ui/dist/icons/16/chevron'
import styles from './ChevronCell.module.css'

export interface ChevronCellProps {
    text?: string
}

export function ChevronCell({ text }: ChevronCellProps) {
    const lp = useLaunchParams()
    const isApple = ['macos', 'ios'].includes(lp.platform)

    return (
        <>
            {text && <Text className={styles.subtitle}>{text}</Text>}

            {isApple && <Icon16Chevron className={styles.chevron} />}
        </>
    )
}
