import Link from 'next/link'
import Image from 'next/image'
import navigation from 'utils/navigation'

export function Footer() {
  return (
    <footer className="relative bg-sky-800">
      <div className="absolute inset-0 bg-sky-900 dark:bg-sky-950">
        <div className="inset-0 hidden bg-black/30 mix-blend-multiply lg:absolute lg:block" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex items-center justify-center space-x-6 md:order-2">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-200 ease-in-out hover:text-amber-400"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon
                className={`${index === 0 ? 'h-5 w-5' : 'h-6 w-6'}`}
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-white">
            &copy; {new Date().getFullYear()} Nordic Tenors
          </p>
        </div>
      </div>
    </footer>
  )
}
