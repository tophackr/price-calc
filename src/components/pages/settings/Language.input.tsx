'use client'

import { Section, Select } from '@telegram-apps/telegram-ui'
import { Earth } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useCallback } from 'react'
import { localesMap } from '@/i18n/config'
import type { Locale } from '@/i18n/types'
import { useLocale } from '@/store/lang/use-locale'
import { IconCell } from '../../shared/icon-cell/IconCell'
import { Link } from '../../shared/link/Link'

export function LanguageInput() {
    const t = useTranslations('Settings.Language')

    const { locale, setLocaleWithCloud } = useLocale()

    const onChange = useCallback(
        (value: string) => {
            setLocaleWithCloud(value as Locale)
        },
        [setLocaleWithCloud]
    )

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
                        Icon={<Earth />}
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
