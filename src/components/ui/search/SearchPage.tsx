import { hasReactNode } from '@telegram-apps/telegram-ui/dist/helpers/react/node'
import type { ReactNode } from 'react'
import { Loading } from './Loading'
import { NotFound } from './NotFound'
import { Nothing } from './Nothing'
import { Search } from './Search'
import type { SearchProps } from './Search.interface'

interface SearchPageProps<T> extends SearchProps {
    items: T[] | undefined
    render: (filteredItems: T[] | undefined) => ReactNode
    isLoading: boolean
    onFilter: (item: T) => boolean | undefined
    nothing?: ReactNode
    nothingTitle?: ReactNode
    nothingDescription?: ReactNode
    nothingAnimData?: () => void
}

export function SearchPage<T>({
    items,
    render,
    isLoading,
    onSearch,
    onFilter,
    nothing,
    nothingAnimData,
    nothingTitle,
    nothingDescription,
    debounceTime
}: SearchPageProps<T>) {
    const itemsFiltered = items?.filter(onFilter)

    return (
        <>
            <Search
                onSearch={onSearch}
                debounceTime={debounceTime}
            />

            {isLoading ? (
                <Loading />
            ) : (
                <>
                    {items?.length ? (
                        itemsFiltered?.length ? (
                            <>{render(itemsFiltered)}</>
                        ) : (
                            <NotFound />
                        )
                    ) : (
                        <>
                            {hasReactNode(nothing) ? (
                                <>{nothing}</>
                            ) : (
                                <Nothing
                                    title={nothingTitle}
                                    description={nothingDescription}
                                    animationData={nothingAnimData}
                                />
                            )}
                        </>
                    )}
                </>
            )}
        </>
    )
}
