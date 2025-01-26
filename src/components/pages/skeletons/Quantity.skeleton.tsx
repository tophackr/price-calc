import { Input, Section } from '@telegram-apps/telegram-ui'
import { Weight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { IconCell } from '../../shared/cells/icon-cell/IconCell'

export function QuantitySkeleton() {
    const t = useTranslations('Home.weight')

    return (
        <Section footer={t('footer')}>
            <Input
                before={
                    <IconCell
                        Icon={<Weight />}
                        bgColor={'DodgerBlue'}
                    />
                }
                header={t('title')}
                placeholder={t('title')}
            />
        </Section>
    )
}
