import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { PlusCircleIcon } from '@heroicons/react/24/outline'

function TicketIcon(props) {
  return (
    <svg {...props} viewBox="0 0 576 512">
      <path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z" />
    </svg>
  )
}

// 2027 programme on the homepage. Entries without a ticketLink show "Billetter kommer snart".
// A list disappears by itself once every isoDate in it has passed (see Upcoming.jsx).

const christmasNovember2027 = [
  {
    id: 202711221900,
    name: 'Oslo Konserthus',
    imageUrl: '/thumbnails/Oslo_Konserthus_thumb.webp',
    date: '22. november',
    time: '19:00',
    isoDate: '2027-11-22T18:00:00.000Z',
    ticketLink: 'https://billetter.okh.no/nb/buyingflow/tickets/51826/102594/',
    pageUrl: '/konserter/oslo-julekonsert-2027',
  },
]

const springTour2027 = [
  {
    id: 202704070000,
    name: 'An evening with Nordic Tenors',
    imageUrl: '/thumbnails/Varturne_2027_thumb.webp',
    date: 'April 2027',
    dateEn: 'April 2027',
    isoDate: '2027-04-18T22:00:00.000Z',
  },
]

const summerShow2027 = [
  {
    id: 202707080000,
    name: 'Teigen scene, Tønsberg',
    imageUrl: '/thumbnails/Sommershow_Tonsberg_2027_thumb.webp',
    date: '8., 9. og 10. juli',
    dateEn: '8, 9 and 10 July',
    isoDate: '2027-07-10T20:00:00.000Z',
  },
  {
    id: 202707150000,
    name: 'Brygga Kulturhus, Halden',
    imageUrl: '/thumbnails/Sommershow_Halden_2027_thumb.webp',
    date: '15., 16. og 17. juli',
    dateEn: '15, 16 and 17 July',
    isoDate: '2027-07-17T20:00:00.000Z',
  },
]

function ConcertList({ id, concerts }) {
  const isEnglish = useRouter().pathname.startsWith('/en')
  const buyLabel = isEnglish ? 'Buy' : 'Kjøp'
  const ticketsComingLabel = isEnglish ? 'Tickets coming soon' : 'Billetter kommer snart'
  const ticketsLabel = isEnglish ? 'Tickets' : 'Billetter'
  const showMoreLabel = isEnglish ? 'Show more' : 'Vis mer'
  const displayDate = (concert) =>
    isEnglish
      ? concert.dateEn ??
        new Date(concert.isoDate).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          timeZone: 'Europe/Oslo',
        })
      : concert.date
  const displayTime = (concert) =>
    isEnglish ? concert.time.replace(' og ', ' and ') : `kl. ${concert.time}`
  const displayName = (concert) => (isEnglish && concert.nameEn) || concert.name
  const handleTicketClick = (event) => {
    event.stopPropagation()
  }

  const today = new Date()
  const upcomingConcerts = concerts.filter(
    (concert) => new Date(concert.isoDate) > today
  )

  return (
    <div
      id={id}
      className="w-full scroll-mt-32 overflow-x-hidden rounded-xl"
    >
      <section className="-mt-3 sm:mt-6">
        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
          {upcomingConcerts.map((concert) => (
            <li
              key={concert.id}
              className="relative z-0 -ml-6 flex items-center space-x-2 rounded-xl border border-transparent bg-amber-50 px-4 py-0 transition duration-300 ease-in-out focus-within:bg-gray-50 hover:border hover:border-amber-400/5 hover:bg-amber-50/50 dark:bg-red-900/20 dark:focus-within:bg-gray-800/60 dark:hover:bg-red-950/40 sm:pl-7"
            >
              <Image
                src={concert.imageUrl}
                alt={displayName(concert)}
                width={50}
                height={50}
                className="-ml-0 mr-1.5 hidden h-14 w-14 flex-none rounded-full border border-red-600/60 dark:border-amber-400/50 sm:-ml-0 sm:mr-3 sm:flex"
              />

              <div className="flex-auto font-normal">
                {concert.pageUrl ? (
                  <Link href={concert.pageUrl}>
                    <p className="text-sm font-medium text-gray-900 dark:text-white sm:text-base">
                      {displayName(concert)}
                    </p>
                    <p className="-mt-5 flex flex-wrap gap-x-3 text-sm">
                      <span className="whitespace-nowrap font-bold text-gray-900 dark:text-white">
                        {displayDate(concert)}
                      </span>
                      {concert.time && <span className="whitespace-nowrap">{displayTime(concert)}</span>}
                    </p>
                  </Link>
                ) : (
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white sm:text-base">
                      {displayName(concert)}
                    </p>
                    <p className="-mt-5 flex flex-wrap gap-x-3 text-sm">
                      <span className="whitespace-nowrap font-bold text-gray-900 dark:text-white">
                        {displayDate(concert)}
                      </span>
                      {concert.time && <span className="whitespace-nowrap">{displayTime(concert)}</span>}
                    </p>
                  </div>
                )}
              </div>

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
                        <span>{ticketsLabel}</span>
                      </span>
                    </button>
                  </Link>
                ) : (
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    {ticketsComingLabel}
                  </span>
                )}
              </div>

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
                        <span className="text-left text-sm">{buyLabel}</span>
                      </span>
                    </button>
                  </Link>
                ) : (
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    {ticketsComingLabel}
                  </span>
                )}
              </div>

              <div>
                {concert.pageUrl ? (
                  <Link href={concert.pageUrl}>
                    <div className="-m-2 flex items-center rounded-full p-1.5 text-sm text-gray-500 hover:text-gray-600 dark:text-amber-400">
                      <p className="hidden px-3 sm:block">{showMoreLabel}</p>
                      <PlusCircleIcon
                        className="ml-3 h-7 w-7 sm:hidden"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>
      <div className="h-10 w-full border-none border-gray-300/30 dark:border-gray-300/10" />
    </div>
  )
}

export function Jul_November_2027() {
  return <ConcertList id="jul-november-2027" concerts={christmasNovember2027} />
}

export function Varturne_2027() {
  return <ConcertList id="liste-varturne-2027" concerts={springTour2027} />
}

export function Sommershow_2027() {
  return <ConcertList id="liste-sommershow-2027" concerts={summerShow2027} />
}
