import { useTranslations } from 'next-intl'
import { LargeTitle, Placeholder, Title } from 'tmaui'
import { Currency } from '@/shared/enums/currency.enum'
import { Unit } from '@/shared/enums/unit.enum'

export function PlaceholderSkeleton() {
    const t = useTranslations('Home.unit.values')

    return (
        <Placeholder
            header={
                <div className={'flex items-end justify-center'}>
                    <LargeTitle weight={'1'}>{0}</LargeTitle>
                    <Title weight={'1'}>
                        <span className={'tgui-87cd6af55f73428d ps-1'}>
                            {Currency.ruble}
                        </span>
                        <span className={'tgui-87cd6af55f73428d px-2'}>/</span>
                        {1}
                        <span className={'tgui-87cd6af55f73428d ps-1'}>
                            {t(Unit.kilogram)}
                        </span>
                    </Title>
                </div>
            }
        />
    )
}
