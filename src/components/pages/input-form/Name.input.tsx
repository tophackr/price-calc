import { Input, Section } from '@telegram-apps/telegram-ui'
import { TextCursorInput } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useFormContext } from 'react-hook-form'
import { IconCell } from '@/components/shared/cells/icon-cell/IconCell'
import type { IProduct } from '@/store/products/products.types'

export function NameInput() {
    const t = useTranslations('Home.name')

    const { register } = useFormContext<IProduct>()

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
                {...register('name', {
                    setValueAs: (value: string) => value || undefined
                })}
            />
        </Section>
    )
}
