import { Input, Section } from '@telegram-apps/telegram-ui'
import { Sigma } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { IconCell } from '../../shared/cells/icon-cell/IconCell'

export function CostSkeleton() {
    const t = useTranslations('Home.cost')

    return (
        <Section footer={t('footer')}>
            <Input
                before={
                    <IconCell
                        Icon={<Sigma />}
                        bgColor={'OrangeRed'}
                    />
                }
                header={t('title')}
                placeholder={t('title')}
            />
        </Section>
    )
}
