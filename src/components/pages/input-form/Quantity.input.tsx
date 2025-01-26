import { Input, Section } from '@telegram-apps/telegram-ui'
import { Blocks, Weight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useFormContext } from 'react-hook-form'
import { IconCell } from '@/components/shared/cells/icon-cell/IconCell'
import type { ItemForm } from '@/shared/interfaces/item.interface'

interface QuantityInputProps {
    isWeight: boolean
}

export function QuantityInput({ isWeight }: QuantityInputProps) {
    const t = useTranslations(`Home.${isWeight ? 'weight' : 'pieces'}`)

    const { register } = useFormContext<ItemForm>()

    return (
        <Section footer={t('footer')}>
            <Input
                type={'number'}
                before={
                    <IconCell
                        Icon={isWeight ? <Weight /> : <Blocks />}
                        bgColor={'DodgerBlue'}
                    />
                }
                header={t('title')}
                placeholder={t('title')}
                {...register('quantity', {
                    required: true,
                    valueAsNumber: true
                })}
            />
        </Section>
    )
}
