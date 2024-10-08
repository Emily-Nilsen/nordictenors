import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

export function Navigation({ navigation, className }) {
  let router = useRouter()

  return (
    <nav className={clsx('text-base lg:text-base', className)}>
      <ul role="list" className="space-y-9">
        {navigation.map((section, index) => (
          <li key={section.title}>
            <h2
              className={clsx(
                index === 0
                  ? 'font-logo lowercase'
                  : 'font-display font-semibold',
                'text-gray-900 dark:text-white sm:text-lg'
              )}
            >
              {section.title}
            </h2>
            <ul
              role="list"
              className="mt-2 space-y-2 border-l-2 border-gray-100 dark:border-gray-800 lg:mt-4 lg:space-y-4 lg:border-gray-200"
            >
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={clsx(
                      'block w-full pl-3.5 text-sm before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                      link.href === router.pathname
                        ? 'font-semibold text-sky-800 before:bg-sky-800 dark:text-gold-500 before:dark:bg-gold-500'
                        : 'text-sm text-gray-500 before:hidden before:bg-gray-300 hover:text-gray-600 hover:before:block dark:text-gray-400 dark:before:bg-gray-700 dark:hover:text-gray-300'
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
