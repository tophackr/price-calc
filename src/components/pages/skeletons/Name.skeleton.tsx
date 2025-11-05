import { TextCursorInput } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Input, Section } from 'tmaui'
import { IconCell } from '../../shared/icon-cell/IconCell'

export function NameSkeleton() {
    const t = useTranslations('Home.name')

    return (
        <Section>
            <Input
                before={
                    <IconCell
                        Icon={<TextCursorInput />}
                        bgColor={'SlateGray'}
                    />
                }
                header={t('title')}
                placeholder={t('title')}
            />
        </Section>
    )
}
