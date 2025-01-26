import { Section, Select } from '@telegram-apps/telegram-ui'
import { Banknote, Group } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { IconCell } from '../../shared/cells/icon-cell/IconCell'

export function SelectSkeleton() {
    const t = useTranslations('Home')

    return (
        <Section>
            <Select
                before={
                    <IconCell
                        Icon={<Group className={'ml-4'} />}
                        bgColor={'MediumPurple'}
                    />
                }
                header={t('unit.title')}
            >
                <option />
            </Select>

            <Select
                before={
                    <IconCell
                        Icon={<Banknote className={'ml-4'} />}
                        bgColor={'LimeGreen'}
                    />
                }
                header={t('currency.title')}
            >
                <option />
            </Select>
        </Section>
    )
}
