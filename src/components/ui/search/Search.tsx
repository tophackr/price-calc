import { Input, Tappable } from '@telegram-apps/telegram-ui'
import { Icon24Close } from '@telegram-apps/telegram-ui/dist/icons/24/close'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { useDebounceForm } from '@/hooks/use-debounce-form'
import type { SearchForm, SearchProps } from './Search.interface'

export function Search({ onSearch, debounceTime = 444 }: SearchProps) {
    const t = useTranslations('Search')

    const { register, reset, watch } = useForm<SearchForm>()

    const onClear = () => {
        reset({
            search: ''
        })
    }

    useDebounceForm({ watch, onSubmit: onSearch, debounceTime })

    return (
        <Input
            type={'text'}
            placeholder={t('placeholder')}
            after={
                <Tappable
                    Component='div'
                    style={{
                        display: 'flex'
                    }}
                    onClick={onClear}
                >
                    <Icon24Close />
                </Tappable>
            }
            {...register('search')}
        />
    )
}
