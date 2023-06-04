import Link, { LinkProps } from 'next/link'
import { HTMLAttributes } from 'react'

import { clsx } from '~/utils/stykes'

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  as?: LinkProps['as']
  href?: LinkProps['href']
  prefetch?: LinkProps['prefetch']
  replace?: LinkProps['replace']
  scroll?: LinkProps['scroll']
  shallow?: LinkProps['shallow']
  type?: 'button' | 'submit' | 'reset'
  variant?: 'default' | 'text'
}

export default function Button({
  className,
  type = 'button',
  variant = 'default',
  ...props
}: ButtonProps) {
  const actualClassName = clsx(
    'flex items-center justify-center h-12 rounded-md px-4 transition-colors font-bold active:scale-[98%] active:filter active:brightness-[96%]',
    variant === 'default' && 'bg-brand-800 text-white hover:bg-brand-900',
    variant === 'text' &&
      'text-brand-800 hover:text-brand-900 hover:bg-gray-300',
    className,
  )

  if ('href' in props) {
    return <Link className={actualClassName} {...(props as LinkProps)} />
  }

  return <button className={actualClassName} type={type} {...props} />
}
