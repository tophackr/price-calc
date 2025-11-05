import { Banknote, Group } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Section, Select } from 'tmaui'
import { IconCell } from '../../shared/icon-cell/IconCell'

export function SelectSkeleton() {
    const t = useTranslations('Home')

    return (
        <Section>
            <Select
                before={
                    <IconCell
                        Icon={<Group />}
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
                        Icon={<Banknote />}
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
