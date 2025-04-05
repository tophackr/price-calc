import { Section, Select } from '@telegram-apps/telegram-ui'
import { Banknote, Group } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { memo } from 'react'
import { IconCell } from '@/components/shared/icon-cell/IconCell'
import { Currency } from '@/shared/enums/currency.enum'
import { Unit } from '@/shared/enums/unit.enum'
import type { SelectProps } from './Select.interface'

export const SelectInput = memo(function SelectInput({
    unit,
    onChangeUnit,
    currency,
    onChangeCurrency
}: SelectProps) {
    const t = useTranslations('Home')

    return (
        <Section>
            <Select
                before={
                    <IconCell
                        Icon={<Group />}
                        bgColor={'MediumPurple'}
                    />
                }
                header={t('unit.title')}
                value={unit}
                onChange={({ target }) => onChangeUnit(target.value)}
            >
                {Object.values(Unit).map(i => (
                    <option
                        key={i}
                        value={i}
                    >
                        {t(`unit.values.${i}`)}
                    </option>
                ))}
            </Select>

            <Select
                before={
                    <IconCell
                        Icon={<Banknote />}
                        bgColor={'LimeGreen'}
                    />
                }
                header={t('currency.title')}
                value={currency}
                onChange={({ target }) => onChangeCurrency(target.value)}
            >
                {Object.values(Currency).map(i => (
                    <option
                        key={i}
                        value={i}
                    >
                        {i}
                    </option>
                ))}
            </Select>
        </Section>
    )
})
