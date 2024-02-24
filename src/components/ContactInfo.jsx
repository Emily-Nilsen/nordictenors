import Link from 'next/link'
import {
  BuildingOfficeIcon,
  DevicePhoneMobileIcon,
  TicketIcon,
} from '@heroicons/react/24/outline'

export function ContactInfo() {
  return (
    <div className="not-prose isolate bg-transparent sm:pb-12">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Kontaktinformasjon
        </h2>
      </div>
      <div className="mx-auto mt-16 max-w-lg space-y-16">
        <div className="flex gap-x-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-600 dark:bg-amber-400">
            <BuildingOfficeIcon
              className="h-6 w-6 text-white"
              aria-hidden="true"
            />
          </div>
          <div>
            <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
              Adresse
            </h3>
            <p className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
              Nordic Moments AS
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Nordsetergrenda 3D
            </p>
            <p className="text-gray-600 dark:text-gray-400">1161 Oslo</p>
            <p className="mt-4">
              <a
                href="tel:+47 906 61 926"
                className="text-sm font-semibold leading-6 text-sky-600 dark:text-amber-300"
              >
                Ring +47 906 61 926 <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-600 dark:bg-amber-400">
            <DevicePhoneMobileIcon
              className="h-6 w-6 text-white"
              aria-hidden="true"
            />
          </div>
          <div>
            <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
              Booking
            </h3>
            <p className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
              Nordic Moments AS
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Merete Økland Espedal
            </p>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="email:booking@nordictenors.no"
              className="text-gray-600 underline transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              booking@nordictenors.no
            </Link>
            <p className="mt-4">
              <a
                href="tel:+47 906 61 926"
                className="text-sm font-semibold leading-6 text-sky-600 dark:text-amber-300"
              >
                Ring +47 906 61 926 <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-600 dark:bg-amber-400">
            <TicketIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
              Billetter
            </h3>
            <p className="mt-2 max-w-64 leading-7 text-gray-600 dark:text-gray-400 sm:max-w-80">
              For billetter, kontakt det enkelte spillested direkte. Se vår
              konserter for link til spillesteder.
            </p>

            <p className="mt-4">
              <Link
                href="#konsertplan"
                className="text-sm font-semibold leading-6 text-sky-600 dark:text-amber-300"
              >
                Konserter <span aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
