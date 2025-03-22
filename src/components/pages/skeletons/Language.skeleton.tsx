import { Link, Section, Select } from '@telegram-apps/telegram-ui'
import { Earth } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { IconCell } from '../../shared/cells/icon-cell/IconCell'

export function LanguageSkeleton() {
    const t = useTranslations('Settings.Language')

    return (
        <Section
            header={t('header')}
            footer={
                <Section.Footer>
                    {t.rich('footer', {
                        CrowdinLink: chunk => <Link href={''}>{chunk}</Link>
                    })}
                </Section.Footer>
            }
        >
            <Select
                before={
                    <IconCell
                        Icon={<Earth />}
                        bgColor={'DodgerBlue'}
                    />
                }
            >
                <option />
            </Select>
        </Section>
    )
}
