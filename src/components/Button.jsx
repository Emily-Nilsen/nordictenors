import Link from 'next/link'
import clsx from 'clsx'

const styles = {
  primary:
    'rounded-full bg-gold-600 py-2 px-4 text-sm sm:text-base font-bold hover:bg-gold-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600/50 active:bg-zinc-800 transition-all duration-300 ease-in-out text-gray-900',
  secondary:
    'rounded-full bg-white/90 py-2 px-4 text-sm sm:text-base font-bold text-gray-950 hover:bg-white/100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-300/50 active:text-gray-900 transition-all duration-300 ease-in-out',
}

export function Button({ variant = 'primary', className, href, ...props }) {
  className = clsx(styles[variant], className)

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}

// flex-1 sm:flex-none
