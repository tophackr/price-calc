import debounce from 'lodash.debounce'
import { useCallback } from 'react'
import type { FieldValues, UseFormWatch } from 'react-hook-form'
import { useWatchForm } from '@/hooks/use-watch-form'

interface UseDebounceFormProps<T extends FieldValues> {
    watch: UseFormWatch<T>
    onSubmit: (data: T) => void
    debounceTime?: number
}

export function useDebounceForm<T extends FieldValues>({
    watch,
    onSubmit,
    debounceTime = 1000
}: UseDebounceFormProps<T>) {
    const debouncedSubmit = useCallback(
        debounce((formData: T) => {
            onSubmit(formData)
        }, debounceTime),
        [debounceTime]
    )

    return useWatchForm({
        watch,
        callback: debouncedSubmit,
        deps: [debouncedSubmit]
    })
}
