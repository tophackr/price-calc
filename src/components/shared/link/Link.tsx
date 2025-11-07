import { openLink } from '@tma.js/sdk-react'
import clsx from 'clsx'
import { default as NextLink, type LinkProps as NextLinkProps } from 'next/link'
import { type JSX, type MouseEventHandler, memo, useCallback } from 'react'
import styles from './Link.module.css'

export interface LinkProps
  extends NextLinkProps,
    Omit<JSX.IntrinsicElements['a'], 'href'> {}

export const Link = memo(function Link({
  className,
  onClick: propsOnClick,
  href,
  ...rest
}: LinkProps) {
  const onClick = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    e => {
      propsOnClick?.(e)

      // Compute if target path is external. In this case we would like to open link using
      // TMA method.
      let path: string
      if (typeof href === 'string') {
        path = href
      } else {
        const { search = '', pathname = '', hash = '' } = href
        path = `${pathname}?${search}#${hash}`
      }

      const targetUrl = new URL(path, window.location.toString())
      const currentUrl = new URL(window.location.toString())
      const isExternal =
        targetUrl.protocol !== currentUrl.protocol ||
        targetUrl.host !== currentUrl.host

      if (isExternal) {
        e.preventDefault()
        openLink(targetUrl.toString())
      }
    },
    [href, propsOnClick]
  )

  return (
    <NextLink
      {...rest}
      href={href}
      onClick={onClick}
      className={clsx(className, styles['link'])}
    />
  )
})
