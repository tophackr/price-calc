import {
    Headline,
    LargeTitle,
    Placeholder,
    Subheadline,
    Title
} from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { memo } from 'react'
import type { ICalculateCosts } from '@/shared/interfaces/calculate-cost.interface'
import type { Measurement } from '@/shared/interfaces/measurement.interface'

interface PlaceholderBlockProps extends Measurement {
    total: ICalculateCosts
}

export const PlaceholderBlock = memo(function PlaceholderBlock({
    total: { remainder, costRounded, rounded },
    unit,
    currency
}: PlaceholderBlockProps) {
    const t = useTranslations('Home.unit.values')

    return (
        <Placeholder
            header={
                <div className={'flex items-end justify-center'}>
                    <LargeTitle weight={'1'}>
                        {costRounded ? costRounded.toFixed(2) : 0}
                    </LargeTitle>
                    <Title weight={'1'}>
                        <span className={'tgui-87cd6af55f73428d ps-1'}>
                            {currency}
                        </span>
                        <span className={'tgui-87cd6af55f73428d px-2'}>/</span>
                        {rounded || 1}
                        <span className={'tgui-87cd6af55f73428d ps-1'}>
                            {t(unit)}
                        </span>
                    </Title>
                </div>
            }
            description={
                <>
                    {!!remainder && (
                        <div className={'flex items-end justify-center'}>
                            <Headline weight={'1'}>
                                {remainder.toFixed(2)}
                            </Headline>
                            <Subheadline weight={'1'}>
                                <span className={'ps-1'}>{currency}</span>
                                <span className={'px-2'}>/</span>
                                {1}
                                <span className={'ps-1'}>{t(unit)}</span>
                            </Subheadline>
                        </div>
                    )}
                </>
            }
        />
    )
})
