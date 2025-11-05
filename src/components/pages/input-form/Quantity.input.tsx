import { Blocks, Weight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { memo } from 'react'
import { useFormContext } from 'react-hook-form'
import { Input, Section } from 'tmaui'
import { IconCell } from '@/components/shared/icon-cell/IconCell'
import type { ItemForm } from '@/shared/interfaces/item.interface'

interface QuantityInputProps {
    isWeight: boolean
}

export const QuantityInput = memo(function QuantityInput({
    isWeight
}: QuantityInputProps) {
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
})
