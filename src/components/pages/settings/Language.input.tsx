'use client'

import { Section, Select } from '@telegram-apps/telegram-ui'
import { Earth } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useLocale } from '@/store/lang/use-locale'
import { IconCell } from '../../shared/cells/icon-cell/IconCell'
import { Link } from '../../shared/link/Link'
import { localesMap } from '@/i18n/config'
import type { Locale } from '@/i18n/types'

export function LanguageInput() {
    const t = useTranslations('Settings.Language')

    const { locale, setLocaleWithCloud } = useLocale()

    const onChange = (value: string) => {
        setLocaleWithCloud(value as Locale)
    }

    return (
        <Section
            header={t('header')}
            footer={
                <Section.Footer>
                    {t.rich('footer', {
                        CrowdinLink: chunk => (
                            <Link
                                href={
                                    process.env['NEXT_PUBLIC_CROWDIN_LINK'] ||
                                    ''
                                }
                            >
                                {chunk}
                            </Link>
                        )
                    })}
                </Section.Footer>
            }
        >
            <Select
                before={
                    <IconCell
                        Icon={<Earth className={'ml-4'} />}
                        bgColor={'DodgerBlue'}
                    />
                }
                value={locale}
                onChange={({ target }) => onChange(target.value)}
            >
                {localesMap.map(i => (
                    <option
                        key={i.key}
                        value={i.key}
                    >
                        {i.subtitle}
                    </option>
                ))}
            </Select>
        </Section>
    )
}
