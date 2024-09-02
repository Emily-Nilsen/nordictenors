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
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/Julekonsert/Bakkenteigen_Kulturhus_Horten_ist5xq.webp',
    date: '1. mars',
    ticketLink:
      'https://bakkenteigen.ticketco.events/no/nb/e/nordic_tenors__jubileum',
    pageUrl: '/konserter/horten-jubileum',
  },
  {
    id: 2,
    name: 'Flekkefjord Kulturhus Spira',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/Julekonsert/Flekkefjord_kyzmwo.webp',
    date: '2. mars',
    ticketLink: 'https://checkout.ebillett.no/181/events/19516/purchase/setup',
    pageUrl: '/konserter/flekkefjord-jubileum',
  },
  {
    id: 3,
    name: 'Stavangeren, Stavanger',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/Nordic%20Tenors/concert%20halls/Stavangeren_uepfpy.webp',
    date: '3. mars',
    ticketLink: 'https://www.ticketmaster.no/event/722039',
    pageUrl: '/konserter/stavanger-jubileum',
  },
  {
    id: 4,
    name: 'Storstova, Bryne',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/Nordic%20Tenors/concert%20halls/Storstova_hcljzz.webp',
    date: '4. mars',
    ticketLink: 'https://www.storstova.com/program/nordic-tenors/',
    pageUrl: '/konserter/bryne-jubileum',
  },
  {
    id: 5,
    name: 'Folkets Hus, Sauda',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/Nordic%20Tenors/concert%20halls/Folkets_hus_Sauda_ouqj7g.webp',
    date: '5. mars',
    ticketLink:
      'https://checkout.ebillett.no/160/events/7807/purchase/setup?kanal=fw',
    pageUrl: '/konserter/sauda-jubileum',
  },
  {
    id: 6,
    name: 'Festiviteten, Haugesund',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/Julekonsert/Festiviteten_Haugesund_nkllsw.webp',
    date: '6. mars',
    ticketLink: 'https://festiviteten.no/alle/nordic-tenors-jubileum/',
    pageUrl: '/konserter/haugesund-jubileum',
  },
  {
    id: 7,
    name: 'Bremnes Kyrkje',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/Nordic%20Tenors/concert%20halls/Bremnes_kyrkje_w9zdpp.webp',
    date: '7. mars',
    ticketLink: 'https://checkout.ebillett.no/121/events/39857/purchase/setup',
    pageUrl: '/konserter/bremnes-jubileum',
  },
  {
    id: 8,
    name: 'Ole Bull Scene, Bergen',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1704992281/Julekonsert/Hadeland_Kultursal_bdpha3.webp',
    date: '8. mars',
    ticketLink: 'https://www.ticketmaster.no/event/722191',
    pageUrl: '/konserter/bergen-jubileum',
  },
  {
    id: 9,
    name: 'Drammens Teater',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/Julekonsert/Drammens_Teater_i81lcc.webp',
    date: '9. mars',
    ticketLink:
      'https://www.drammenscener.no/teatret/program/23925-nordic-tenors/',
    pageUrl: '/konserter/drammen-jubileum',
  },
  {
    id: 10,
    name: 'Askim Kulturhus',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/Julekonsert/Askim_Kulturhus_night_fjetxj.webp',
    date: '10. mars',
    ticketLink: 'https://www.askimkulturhus.no/event/nordic-tenors-jubileum/',
    pageUrl: '/konserter/askim-jubileum',
  },
  {
    id: 11,
    name: 'Lillestrøm Kultursenter',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/Julekonsert/Lillestr%C3%B8m_kultursenter_yl2vwa.webp',
    date: '16. mars',
    ticketLink:
      'https://www.lillestrom-kultursenter.no/event/nordic-tenors-jubileum/',
    pageUrl: '/konserter/lillestrom-jubileum',
  },
  {
    id: 12,
    name: 'Bærum Kulturhus, Sandvika',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/Julekonsert/B%C3%A6rum_kulturhus_oriunn.webp',
    date: '17. mars',
    ticketLink:
      'https://billetter.baerumkulturhus.no/nb/buyingflow/tickets/23831/45630',
    pageUrl: '/konserter/sandvika-jubileum',
  },
  {
    id: 13,
    name: 'Begnadalen Kirke, Valdres',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/Nordic%20Tenors/concert%20halls/Begnadalen_Kirke_Valdres_jjs5u5.webp',
    date: '27. mars',
    ticketLink: 'https://hedalenkultur.no/paskekonsert-2024/',
    pageUrl: '/konserter/valdres-jubileum',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Mars() {
  const handleTicketClick = (event) => {
    event.stopPropagation()
  }

  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const filteredConcerts = concerts.filter((concert) => {
    const [day, month] = concert.date.split('. ')
    // Assuming all concerts are in March and constructing the date accordingly.
    const concertDate = new Date(
      `${currentYear}-03-${day.padStart(2, '0')}T00:00:00`
    )
    const differenceInHours = (currentDate - concertDate) / (1000 * 60 * 60)
    return differenceInHours <= 24
  })

  return (
    <div className="w-full overflow-x-hidden rounded-xl ">
      <section className="-mt-3 sm:mt-6">
        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
          {filteredConcerts.map((concert) => (
            <li
              key={concert.id}
              className="group relative z-0 -ml-6 flex items-center space-x-2 rounded-xl border border-transparent bg-sky-50 px-4 py-0 transition duration-300 ease-in-out focus-within:bg-gray-50 hover:border hover:border-sky-400/5 hover:bg-gray-50 dark:bg-sky-950/30 dark:focus-within:bg-gray-800/60 dark:hover:bg-gray-800/60 sm:pl-7"
            >
              <Image
                src={concert.imageUrl}
                alt={concert.name}
                width={50}
                height={50}
                className="-ml-0 mr-1.5 hidden h-14 w-14 flex-none rounded-full border border-sky-400/50 dark:border-amber-400/50 sm:-ml-0 sm:mr-3 sm:flex"
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
                    <button className="dark:bg-t flex items-center justify-center px-0 py-0 text-sm text-gray-500 shadow-black/5 ring-black/5 transition duration-150 ease-in-out hover:bg-white focus:bg-transparent dark:text-gray-300 dark:ring-inset sm:rounded-lg sm:bg-white/80 sm:px-5 sm:py-2.5 sm:shadow-md sm:ring-1 sm:dark:bg-gray-700 sm:dark:ring-white/5 sm:dark:hover:bg-white/10">
                      <span className="flex items-center gap-3 text-sm text-sky-800 dark:text-white">
                        <TicketIcon className="mr-2 h-10 w-10 fill-sky-700 focus:bg-transparent dark:fill-sky-500 sm:mr-0 sm:h-6 sm:w-6" />
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
                    <button className="dark:bg-t flex items-center justify-center rounded-lg bg-white/80 px-2.5 py-1.5 text-2xl text-gray-500 shadow-md shadow-black/5 ring-1 ring-black/5 transition duration-150 ease-in-out hover:bg-white focus:bg-transparent dark:bg-gray-700 dark:text-gray-300 dark:ring-inset dark:ring-white/5 dark:hover:bg-white/10">
                      <span className="flex items-center gap-3 text-sm text-sky-800 dark:text-white">
                        <TicketIcon className="mr-0 h-6 w-6 fill-sky-700 focus:bg-transparent dark:fill-sky-500 sm:mr-0 sm:h-6 sm:w-6" />
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
      <div
        id="julekonsertstart"
        className="h-10 w-full border-none border-gray-300/30 dark:border-gray-300/10"
      />
    </div>
  )
}
