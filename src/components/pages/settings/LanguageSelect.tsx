'use client'

import { useCallback } from 'react'
import { Link, Section, Select } from 'tmaui'
import { useTranslations } from 'use-intl'
import { SectionLeadingFooter } from '@/components/shared/SectionLeadingFooter'
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
              <Link href={import.meta.env.VITE_CROWDIN_LINK || ''}>
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
