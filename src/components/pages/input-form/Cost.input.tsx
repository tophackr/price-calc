import { Input, Section } from '@telegram-apps/telegram-ui'
import { Sigma } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useFormContext } from 'react-hook-form'
import type { ItemForm } from '@/shared/interfaces/item.interface'
import { IconCell } from '../../shared/icon-cell/IconCell'

export function CostInput() {
    const t = useTranslations('Home.cost')

    const { register } = useFormContext<ItemForm>()

    return (
        <Section footer={t('footer')}>
            <Input
                type={'number'}
                before={
                    <IconCell
                        Icon={<Sigma />}
                        bgColor={'OrangeRed'}
                    />
                }
                header={t('title')}
                placeholder={t('title')}
                {...register('cost', { required: true, valueAsNumber: true })}
            />
        </Section>
    )
}
