import { Earth } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link, Section, Select } from 'tmaui'
import { IconCell } from '../../shared/icon-cell/IconCell'

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
