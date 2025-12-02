import Image from 'next/image'
import Link from 'next/link'
import { PlusCircleIcon } from '@heroicons/react/24/outline'

function TicketIcon(props) {
  return (
    <svg {...props} viewBox="0 0 576 512">
      <path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z" />
    </svg>
  )
}

const concerts = [
  {
    id: 202611,
    name: 'Kilden, Kristiansand',
    imageUrl: '/thumbnails/Kilden_kulturhus_thumb.webp',
    date: '1. desember',
    isoDate: '2026-12-01T18:00:00.000Z',
    ticketLink: 'https://tix.no/nb/kilden/specialoffer/tickets/43693/',
    pageUrl: '/konserter/kristiansand-julekonsert-2026',
  },
  {
    id: 202612,
    name: 'Arendal Kulturhus',
    imageUrl: '/thumbnails/Arendal_kulturhus_thumb.webp',
    date: '2. desember',
    isoDate: '2026-12-02T18:00:00.000Z',
    ticketLink:
      'https://tix.no/nb/arendal/buyingflow/tickets/43982/?_gl=1*1gp7prv*_gcl_au*MTE2NzE1MjcwNi4xNzY0MDc1NTU2*_ga*MTc2MDU4ODA5LjE3NjQwNzU1NTA.*_ga_Y3JHC4J8GN*czE3NjQ1ODQ1ODgkbzIkZzEkdDE3NjQ1ODQ1OTckajUxJGwwJGgw',
    pageUrl: '/konserter/arendal-julekonsert-2026',
  },
  {
    id: 202613,
    name: 'Bølgen Kulturhus, Larvik',
    imageUrl: '/thumbnails/Bølgen_kulturhus_thumb.webp',
    date: '3. desember',
    isoDate: '2026-12-03T18:00:00.000Z',
    ticketLink: 'https://tix.no/nb/bolgen/buyingflow/tickets/44127/',
    pageUrl: '/konserter/larvik-julekonsert-2026',
  },
  {
    id: 202614,
    name: 'Moss Kulturhus',
    imageUrl: '/thumbnails/Moss_Kulturhus_thumbnail.webp',
    date: '4. desember',
    isoDate: '2026-12-04T18:00:00.000Z',
    ticketLink:
      'https://billetter.mosskulturhus.no/nb/buyingflow/tickets/44109/90072/',
    pageUrl: '/konserter/moss-julekonsert-2026',
  },
  // {
  //   id: 202615,
  //   name: 'Lørenskog Hus',
  //   imageUrl: '/thumbnails/Lørenskog_Hus.webp',
  //   date: '5. desember',
  //   isoDate: '2026-12-05T18:00:00.000Z',
  //   ticketLink: null,
  //   pageUrl: null,
  // },
  {
    id: 202616,
    name: 'Lillestrøm Kulturhus',
    imageUrl: '/thumbnails/Lillestrøm_Kultursenter.webp',
    date: '6. desember',
    isoDate: '2026-12-06T18:00:00.000Z',
    ticketLink:
      'https://checkout.ebillett.no/120/events/125310/purchase/setup?_gl=1*1ns66xz*_gcl_au*MTY3MTk4NzI5OS4xNzY0NTg1MDIy*_ga*MTMxOTAzMTgwOC4xNzY0NTg1MDEx*_ga_6CD7G851T2*czE3NjQ1ODUwMTAkbzEkZzEkdDE3NjQ1ODUwMjEkajUyJGwwJGgw&kanal=dxf',
    pageUrl: '/konserter/lillestrom-julekonsert-2026',
  },
  // {
  //   id: 202617,
  //   name: 'Kongsberg Musikkteater',
  //   imageUrl: '/thumbnails/Kongsberg_Musikkteater.webp',
  //   date: '7. desember',
  //   isoDate: '2026-12-07T18:00:00.000Z',
  //   ticketLink: null,
  //   pageUrl: null,
  // },
  {
    id: 202618,
    name: 'Asker kulturhus',
    imageUrl: '/thumbnails/Asker_kulturhus_thumb.webp',
    date: '8. desember',
    isoDate: '2026-12-08T18:00:00.000Z',
    ticketLink:
      'https://www.askerkulturhus.no/program/christmas-with-nordic-tenors-2026/',
    pageUrl: '/konserter/asker-julekonsert-2026',
  },
  {
    id: 202619,
    name: 'Blå Grotte, Fredrikstad',
    imageUrl: '/thumbnails/Blå_Grotte_thumb.webp',
    date: '9. desember',
    isoDate: '2026-12-09T18:00:00.000Z',
    ticketLink: 'https://checkout.ebillett.no/260/events/147610/purchase/setup',
    pageUrl: '/konserter/fredrikstad-julekonsert-2026',
  },
  {
    id: 202620,
    name: 'Teigen Scene, Tønsberg',
    imageUrl: '/thumbnails/Oseberg_Konserthus_thumb.webp',
    date: '10. desember',
    isoDate: '2026-12-10T18:00:00.000Z',
    ticketLink: 'https://www.ticketmaster.no/event/1197792848',
    pageUrl: '/konserter/tonsberg-julekonsert-2026',
  },
  {
    id: 202621,
    name: 'Flekkefjord Kultursenter Spira',
    imageUrl: '/thumbnails/Flekkefjord_thumb.webp',
    date: '11. desember',
    isoDate: '2026-12-11T18:00:00.000Z',
    ticketLink: 'https://checkout.ebillett.no/181/events/26371/purchase',
    pageUrl: '/konserter/flekkefjord-julekonsert-2026',
  },
  {
    id: 202622,
    name: 'Sandnes Kulturhus',
    imageUrl: '/thumbnails/Sandnes_kulturhus_thumb.webp',
    date: '12. desember',
    isoDate: '2026-12-12T18:00:00.000Z',
    ticketLink: 'https://tix.no/nb/sandnes/buyingflow/tickets/44125/',
    pageUrl: '/konserter/sandnes-julekonsert-2026',
  },
  {
    id: 202623,
    name: 'Stavanger Konserthus',
    imageUrl: '/thumbnails/Stavanger_Konserthus_thumb.webp',
    date: '13. desember',
    isoDate: '2026-12-13T18:00:00.000Z',
    ticketLink:
      'https://billetter.stavanger-konserthus.no/nb/buyingflow/tickets/43591/',
    pageUrl: '/konserter/stavanger-julekonsert-2026',
  },
  {
    id: 202624,
    name: 'Festiviteten, Haugesund',
    imageUrl: '/thumbnails/Festiviteten_Haugesund_thumb.webp',
    date: '14. desember',
    isoDate: '2026-12-14T18:00:00.000Z',
    ticketLink:
      'https://tix.no/nb/festiviteten/buyingflow/tickets/43719/89562/',
    pageUrl: '/konserter/haugesund-julekonsert-2026',
  },
  {
    id: 202625,
    name: 'Grieghallen, Bergen',
    imageUrl: '/thumbnails/Grieghallen_Bergen_thumb.webp',
    date: '15. desember',
    isoDate: '2026-12-15T18:00:00.000Z',
    ticketLink: 'https://www.ticketmaster.no/event/2094932538',
    pageUrl: '/konserter/bergen-julekonsert-2026',
  },
  {
    id: 202626,
    name: 'Oseana Kunst & Kultursenter, Os',
    imageUrl: '/thumbnails/Oseana.webp',
    date: '16. desember',
    isoDate: '2026-12-16T18:00:00.000Z',
    ticketLink: 'https://tix.no/nn/oseana/buyingflow/tickets/43735/89598#tixsp',
    pageUrl: '/konserter/os-julekonsert-2026',
  },
  {
    id: 202627,
    name: 'Parken Kulturhus, Ålesund',
    imageUrl: '/thumbnails/Parken_kulturhus.webp',
    date: '17. desember',
    isoDate: '2026-12-17T18:00:00.000Z',
    ticketLink: 'https://tix.no/nb/parken/buyingflow/tickets/43586/89330/',
    pageUrl: '/konserter/alesund-julekonsert-2026',
  },
  // {
  //   id: 202628,
  //   name: 'Operashuet',
  //   imageUrl: '/thumbnails/Operashuet.webp',
  //   date: '18. desember',
  //   isoDate: '2026-12-18T18:00:00.000Z',
  //   ticketLink: null,
  //   pageUrl: null,
  // },
  // {
  //   id: 202629,
  //   name: 'Førdehuset, Førde',
  //   imageUrl: '/thumbnails/Førdehuset_thumb.webp',
  //   date: '19. desember',
  //   isoDate: '2026-12-19T18:00:00.000Z',
  //   ticketLink: null,
  //   pageUrl: null,
  // },
  {
    id: 202630,
    name: 'Bærum Kulturhus, Sandvika',
    imageUrl: '/thumbnails/Bærum_kulturhus_thumb.webp',
    date: '20. desember',
    isoDate: '2026-12-20T18:00:00.000Z',
    ticketLink: null,
    pageUrl: null,
  },
  {
    id: 202631,
    name: 'Olavshallen, Trondheim',
    imageUrl: '/thumbnails/Olavshallen_thumb.webp',
    date: '21. desember',
    isoDate: '2026-12-21T18:00:00.000Z',
    ticketLink: null,
    pageUrl: null,
  },
  {
    id: 202632,
    name: 'Drammens Teater',
    imageUrl: '/thumbnails/Drammens_Teater_thumb.webp',
    date: '22. desember',
    isoDate: '2026-12-22T18:00:00.000Z',
    ticketLink:
      'https://www.drammensteater.no/program/44111-christmas-with-nordic-tenors/',
    pageUrl: '/konserter/drammen-julekonsert-2026',
  },
]

export function Jul_Desember_2026() {
  const handleTicketClick = (event) => {
    event.stopPropagation()
  }

  const today = new Date()
  const upcomingConcerts = concerts.filter(
    (concert) => new Date(concert.isoDate) > today
  )

  return (
    <div
      id="jul-desember-2026"
      className="w-full overflow-x-hidden rounded-xl "
    >
      <section className="-mt-3 sm:mt-6">
        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
          {upcomingConcerts.map((concert) => (
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
                {concert.pageUrl ? (
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
                ) : (
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white sm:text-base">
                      {concert.name}
                    </p>
                    <p className="-mt-5 flex gap-x-3 text-sm">
                      <span className="font-bold text-gray-900 dark:text-white">
                        {concert.date}
                      </span>
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
                        <span>Billetter</span>
                      </span>
                    </button>
                  </Link>
                ) : (
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    Billetter kommer
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
                        <span className="text-left text-sm">Kjøp</span>
                      </span>
                    </button>
                  </Link>
                ) : (
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    Billetter kommer
                  </span>
                )}
              </div>

              <div>
                {concert.pageUrl ? (
                  <Link href={concert.pageUrl}>
                    <div className="-m-2 flex items-center rounded-full p-1.5 text-sm text-gray-500 hover:text-gray-600 dark:text-amber-400">
                      <p className="hidden px-3 sm:block">Vis mer</p>
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
