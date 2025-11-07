'use client'

import { useTranslations } from 'next-intl'
import { useCallback } from 'react'
import { Section, Select } from 'tmaui'
import { SectionLeadingFooter } from '@/components/shared/SectionLeadingFooter'
import { Link } from '@/components/shared/link/Link'
import { localesMap } from '@/i18n/config'
import type { Locale } from '@/i18n/types'
import { useLocale } from '@/store/lang/useLocale'

export function LanguageSelect() {
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
        <SectionLeadingFooter>
          {t.rich('footer', {
            CrowdinLink: chunk => (
              <Link href={process.env['NEXT_PUBLIC_CROWDIN_LINK'] || ''}>
                {chunk}
              </Link>
            )
          })}
        </SectionLeadingFooter>
      }
    >
      <Select
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
