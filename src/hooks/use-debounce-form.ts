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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedSubmit = useCallback(
        debounce((formData: T) => {
            onSubmit(formData)
        }, debounceTime),
        [onSubmit, debounceTime]
    )

    return useWatchForm({
        watch,
        callback: debouncedSubmit,
        deps: [debouncedSubmit]
    })
}
