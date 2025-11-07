import { Section, type SectionFooterProps } from 'tmaui'
import { cx } from '@/utils/cx'

export function SectionLeadingFooter({
  className,
  ...props
}: SectionFooterProps) {
  return (
    <Section.Footer
      className={cx('leading-none', className)}
      {...props}
    />
  )
}
