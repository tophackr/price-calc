'use client'

import { CellProps, Cell as TGUICell } from '@telegram-apps/telegram-ui'
import { MouseEvent as RME, useEffect, useRef } from 'react'

export function CheckCell({ children, onClick, ...rest }: CellProps) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const target = ref.current?.querySelector('.tgui-8735a62be5a8b8a7')

        if (target && onClick) {
            const handleClick = (event: Event) => {
                onClick(event as unknown as RME<HTMLDivElement, MouseEvent>)
            }

            target.addEventListener('click', handleClick)

            return () => {
                target.removeEventListener('click', handleClick)
            }
        }
    }, [onClick])

    return (
        <TGUICell
            ref={ref}
            interactiveAnimation={'opacity'}
            {...rest}
        >
            {children}
        </TGUICell>
    )
}
