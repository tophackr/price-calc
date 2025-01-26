'use client'

import clsx from 'clsx'
import { type CSSProperties, type ReactElement, cloneElement } from 'react'
import { useIsAppleClient } from '@/hooks/use-is-apple-client'
import styles from './IconCell.module.css'

export interface IconCellProps {
    Icon: ReactElement
    bgColor: CSSProperties['backgroundColor']
}

export function IconCell({ Icon, bgColor }: IconCellProps) {
    const isApple = useIsAppleClient()

    return cloneElement(Icon, {
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
