import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { GoBackButton } from './GoBackButton'

function TicketIcon(props) {
  return (
    <svg {...props} viewBox="0 0 576 512">
      <path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z" />
    </svg>
  )
}

const concerts = [
  {
    id: 1,
    name: 'Bakkenteigen Kulturhus, Horten',
    imageUrl: '/thumbnails/Bakkenteigen_Kulturhus_Horten.webp',
    date: '22. november',
    ticketLink:
      'https://bakkenteigen.ticketco.events/no/nb/e/christmas_with_nordic_tenors_2024',
    pageUrl: '/konserter/horten-julekonsert',
  },
  {
    id: 2,
    name: 'Alles Kulturhus, Hønefoss',
    imageUrl: '/thumbnails/Alles-Kulturhus.webp',
    date: '23. november',
    ticketLink: 'https://alleskulturhus.no/arrangement/christmas-with',
    pageUrl: '/konserter/honefoss-julekonsert',
  },
  {
    id: 3,
    name: 'Lillestrøm Kultursenter',
    imageUrl: '/thumbnails/Lillestrøm_Kultursenter.webp',
    date: '24. november',
    ticketLink:
      'https://www.lillestrom-kultursenter.no/event/christmas-with-nordic-tenors/',
    pageUrl: '/konserter/lillestrom-julekonsert',
  },
  {
    id: 6,
    name: 'Voss Kulturhus',
    imageUrl: '/thumbnails/Voss_Kulturhus.webp',
    date: '26. november',
    ticketLink:
      'https://checkout.ebillett.no/149/events/82831/purchase/setup?kanal=dxf',
    pageUrl: '/konserter/voss-julekonsert',
  },
  {
    id: 7,
    name: 'Oseana Kulturhus, Os',
    imageUrl: '/thumbnails/Oseana.webp',
    date: '27. november',
    ticketLink: 'https://www.oseana.no/event/christmas-with-nordic-tenors/',
    pageUrl: '/konserter/os-julekonsert',
  },
  {
    id: 8,
    name: 'Berge Gard & Gartneri',
    imageUrl: '/thumbnails/Berge_Gard_og_Gartneri.webp',
    date: '28. november',
    ticketLink: 'https://berge.ticketco.events/no/nb/e/nordic_tenors',
    pageUrl: '/konserter/torvikbygd-julekonsert',
  },
  {
    id: 4,
    name: 'Ullensaker Kulturhus',
    imageUrl: '/thumbnails/Ullensaker_Kulturhus.webp',
    date: '29. november',
    ticketLink:
      'https://www.ticketmaster.no/event/731653?language=no-no&track=DiscoveryAPI&subchannel_id=1&brand=ullensakerkulturhus&_ga=2.228013205.905843521.1700720460-336858269.1579679332&_gl=1*wqena*_ga*MzM2ODU4MjY5LjE1Nzk2NzkzMzI.*_ga_Q5XX5068LZ*MTcwMDcyMDQ1OS4xMDAuMS4xNzAwNzIwNTQ4LjAuMC4w',
    pageUrl: '/konserter/ullensaker-julekonsert',
  },
  {
    id: 5,
    name: 'Askim Kulturhus',
    imageUrl: '/thumbnails/Askim_Kulturhus.webp',
    date: '30. november',
    ticketLink: 'https://tix.no/nb/askim/buyingflow/tickets/25588/',
    pageUrl: '/konserter/askim-julekonsert',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function November() {
  const handleTicketClick = (event) => {
    event.stopPropagation()
  }

  return (
    <div id="november" className="w-full overflow-x-hidden rounded-xl ">
      <section className="-mt-3 sm:mt-6">
        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
          {concerts.map((concert) => (
            <li
              key={concert.id}
              className="group relative z-0 -ml-6 flex items-center space-x-2 rounded-xl border border-transparent bg-amber-50 px-4 py-0 transition duration-300 ease-in-out focus-within:bg-gray-50 hover:border hover:border-amber-400/5 hover:bg-amber-50/50 dark:bg-red-900/20 dark:focus-within:bg-gray-800/60 dark:hover:bg-red-950/40 sm:pl-7"
            >
              <Image
                src={concert.imageUrl}
                alt={concert.name}
                width={50}
                height={50}
                className="-ml-0 mr-1.5 hidden h-14 w-14 flex-none rounded-full border border-red-600/60 dark:border-amber-400/50 sm:-ml-0 sm:mr-3 sm:flex"
              />

              <div className="flex-auto font-normal">
                <Link href={concert.pageUrl}>
                  <p className="text-sm font-medium text-gray-900 dark:text-white sm:text-base">
                    {concert.name}
                  </p>
                  <p className="-mt-5 flex gap-x-3 text-sm">
                    <span className="font-bold text-gray-900 dark:text-white">
                      {concert.date}
                    </span>
                  </p>
                </Link>
              </div>
              {/* Large screens */}
              <div className="z-10 hidden sm:block">
                {concert.ticketLink ? (
                  <Link
                    href={concert.ticketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleTicketClick}
                  >
                    <button className="dark:bg-t flex items-center justify-center px-0 py-0 text-sm text-gray-500 shadow-black/5 ring-black/5 transition duration-150 ease-in-out hover:bg-white focus:bg-transparent dark:text-gray-300 dark:ring-inset sm:rounded-lg sm:bg-white/80 sm:px-5 sm:py-2.5 sm:shadow-md sm:ring-1 sm:dark:bg-red-700/20 sm:dark:ring-white/5 sm:dark:hover:bg-white/5">
                      <span className="flex items-center gap-3 text-sm text-red-800 dark:text-white">
                        <TicketIcon className="mr-2 h-10 w-10 fill-red-700 focus:bg-transparent dark:fill-red-500 sm:mr-0 sm:h-6 sm:w-6" />
                        <span>Billetter</span>
                      </span>
                    </button>
                  </Link>
                ) : null}
              </div>
              {/* Mobile devices */}
              <div className="z-10 sm:hidden">
                {concert.ticketLink ? (
                  <Link
                    href={concert.ticketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleTicketClick}
                  >
                    <button className="dark:bg-t flex items-center justify-center rounded-lg bg-white/80 px-2.5 py-1.5 text-2xl text-gray-500 shadow-md shadow-black/5 ring-1 ring-black/5 transition duration-150 ease-in-out hover:bg-white focus:bg-transparent dark:bg-red-700/20 dark:text-gray-300 dark:ring-inset dark:ring-white/5 dark:hover:bg-white/10">
                      <span className="flex items-center gap-3 text-sm text-red-800 dark:text-white">
                        <TicketIcon className="mr-0 h-6 w-6 fill-red-700 focus:bg-transparent dark:fill-red-500 sm:mr-0 sm:h-6 sm:w-6" />
                        <span className="text-left text-sm">Kjøp</span>
                      </span>
                    </button>
                  </Link>
                ) : null}
              </div>

              <div>
                <Link href={concert.pageUrl}>
                  <div className="-m-2 flex items-center rounded-full p-1.5 text-sm text-gray-500 hover:text-gray-600 dark:text-amber-400">
                    <p className="hidden px-3 sm:block">Vis mer</p>
                    <PlusCircleIcon
                      className="ml-3 h-7 w-7 sm:hidden"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <div className="h-10 w-full border-none border-gray-300/30 dark:border-gray-300/10" />
    </div>
  )
}
