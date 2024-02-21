import Link from 'next/link'
import navigation from 'utils/navigation'

export function Socials() {
  return (
    <div className="absolute inset-0 pt-3 lg:hidden">
      {/* Social media icons */}

      <div className="flex items-center justify-center space-x-7 sm:space-x-8 md:order-2">
        {navigation.map((item, index) => (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="not-prose text-white transition-colors duration-200 ease-in-out hover:text-amber-300"
          >
            <span className="sr-only">{item.name}</span>

            <item.icon
              className={`${
                index === 0 ? 'h-5 w-5 sm:h-6 sm:w-6' : 'h-6 w-6 sm:h-7 sm:w-7'
              }`}
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
