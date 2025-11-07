'use client'

import { List } from 'tmaui'
import { BackButton } from '@/components/ui/tma/BackButton'
import { LanguageSelect } from './LanguageSelect'

export function Settings() {
  return (
    <BackButton>
      <List>
        <LanguageSelect />
      </List>
    </BackButton>
  )
}
