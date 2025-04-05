import { Cell, Section, Switch } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { useCallback } from 'react'
import { useAutoSaveItems } from '@/store/auto-save-items/use-auto-save-items'

export function AutoSaveItemsInput() {
    const t = useTranslations('Settings.AutoSaveItems')

    const { autoSaveItems, setAutoSaveItemsWithCloud } = useAutoSaveItems()

    const onChange = useCallback(() => {
        setAutoSaveItemsWithCloud(!autoSaveItems)
    }, [autoSaveItems, setAutoSaveItemsWithCloud])

    return (
        <Section footer={t('footer')}>
            <Cell
                after={
                    <Switch
                        defaultChecked={autoSaveItems}
                        onChange={onChange}
                    />
                }
            >
                {t('title')}
            </Cell>
        </Section>
    )
}
