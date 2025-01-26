'use client'

import clsx from 'clsx'
import { type CSSProperties, type ReactElement, cloneElement } from 'react'
import { useIsAppleClient } from '@/hooks/use-is-apple-client'
import styles from './IconCell.module.css'

export interface IconCellProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Icon: ReactElement<any, any>
    bgColor: CSSProperties['backgroundColor']
}

export function IconCell({ Icon, bgColor }: IconCellProps) {
    const isApple = useIsAppleClient()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return cloneElement(Icon as ReactElement<any>, {
        className: clsx(
            Icon.props.className,
            isApple ? styles['apple-icon'] : styles['base-icon']
        ),
        style: isApple
            ? {
                  backgroundColor: bgColor
              }
            : {}
    })
}
