'use client'

import { type CellProps, Cell as TGUICell } from '@telegram-apps/telegram-ui'
import { callMultiple } from '@telegram-apps/telegram-ui/dist/helpers/function'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { ChevronCell, type ChevronCellProps } from '../chevron-cell/ChevronCell'
import { IconCell, type IconCellProps } from '../icon-cell/IconCell'

interface LinkCellProps extends IconCellProps, ChevronCellProps, CellProps {
    href: string
}

export function LinkCell({
    children,
    Icon,
    bgColor,
    href,
    text,
    onClick,
    ...rest
}: LinkCellProps) {
    const router = useRouter()

    const onClickHref = useCallback(() => {
        router.push(href)
    }, [router, href])

    return (
        <TGUICell
            Component={'label'}
            before={
                <IconCell
                    Icon={Icon}
                    bgColor={bgColor}
                />
            }
            after={<ChevronCell text={text} />}
            onClick={callMultiple(onClickHref, onClick)}
            interactiveAnimation={'opacity'}
            {...rest}
        >
            {children}
        </TGUICell>
    )
}
