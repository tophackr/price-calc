import { type DependencyList, useCallback, useEffect } from 'react'
import type { FieldValues, UseFormWatch } from 'react-hook-form'

interface UseWatchFormProps<T extends FieldValues> {
    watch: UseFormWatch<T>
    callback: (formData: T) => void
    deps?: DependencyList
}

export function useWatchForm<T extends FieldValues>({
    watch,
    callback,
    deps = []
}: UseWatchFormProps<T>) {
    const effectDeps: DependencyList = [watch()]

    if (deps.length) {
        effectDeps.concat(...deps)
    }

    const watchCallback = useCallback(
        (formData: T) => {
            callback(formData)
        },
        [callback]
    )

    return useEffect(() => {
        const { unsubscribe } = watch(formData => {
            watchCallback(formData as T)
        })

        return () => {
            unsubscribe()
        }
    }, [watch, watchCallback])
}
