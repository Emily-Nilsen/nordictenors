import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import navigation from 'utils/navigation'
import { openConsentSettings } from 'utils/consent'

const FOOTER_COPY = {
  no: {
    privacy: 'Personvern og informasjonskapsler',
    privacyHref: '/konserter/personvern',
    cookieSettings: 'Innstillinger for informasjonskapsler',
  },
  en: {
    privacy: 'Privacy and cookies',
    privacyHref: '/en/privacy',
    cookieSettings: 'Cookie settings',
  },
}

export function Footer() {
  const router = useRouter()
  const t = router.pathname.startsWith('/en') ? FOOTER_COPY.en : FOOTER_COPY.no

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
          <div className="mt-3 flex flex-col items-center gap-2 text-sm leading-5 sm:flex-row sm:gap-4 md:mt-2">
            <Link
              href={t.privacyHref}
              className="text-white underline transition-colors duration-200 ease-in-out hover:text-amber-400"
            >
              {t.privacy}
            </Link>
            <button
              type="button"
              onClick={openConsentSettings}
              className="text-white underline transition-colors duration-200 ease-in-out hover:text-amber-400"
            >
              {t.cookieSettings}
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
