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
    id: 1,
    name: 'Bjørnsonhuset, Molde',
    imageUrl: '/thumbnails/Bjørnsonhuset_Molde.webp',
    date: '7. desember',
    ticketLink: 'https://www.eventim.no/eventseries/1825170/?affiliate=SS2',
    pageUrl: '/konserter/molde-julekonsert-2025',
  },
  {
    id: 17,
    name: 'Grieghallen, Bergen',
    imageUrl: '/thumbnails/Grieghallen_Bergen_thumb.webp',
    date: '9. desember',
    ticketLink: 'https://www.ticketmaster.no/event/1587930548',
    pageUrl: '/konserter/bergen-julekonsert-2025',
  },
  {
    id: 16,
    name: 'Festiviteten, Haugesund',
    imageUrl: '/thumbnails/Festiviteten_Haugesund_thumb.webp',
    date: '10. desember',
    ticketLink:
      'https://tix.no/nb/festiviteten/buyingflow/tickets/34846/74030/',
    pageUrl: '/konserter/haugesund-julekonsert-2025',
  },
  {
    id: 15,
    name: 'Stavanger Konserthus',
    imageUrl: '/thumbnails/Stavanger_konserthus_thumb.webp',
    date: '12. desember',
    ticketLink:
      'https://billetter.stavanger-konserthus.no/nb/buyingflow/tickets/34991/',
    pageUrl: '/konserter/stavanger-julekonsert-2025',
  },
  {
    id: 19,
    name: 'Kulturhuset i Tromsø',
    imageUrl: '/thumbnails/Kulturhuset_tromsø_thumb.webp',
    date: '16. desember',
    ticketLink: 'https://tix.no/nb/tr/buyingflow/tickets/34909/74128/',
    pageUrl: '/konserter/tromso-julekonsert-2025',
  },
  {
    id: 10,
    name: 'Maihaugsalen, Lillehammer',
    imageUrl: '/thumbnails/Maihaugsalen_thumb.webp',
    date: '19. desember',
    ticketLink: 'https://www.ticketmaster.no/event/149748545',
    pageUrl: '/konserter/lillehammer-julekonsert-2025',
  },
  // {
  //   id: 2,
  //   name: 'Bærum Kulturhus, Sandvika',
  //   imageUrl: '/thumbnails/Bærum_kulturhus_thumb.webp',
  //   date: '2. desember',
  //   ticketLink: 'https://www.baerumkulturhus.no/arrangement/nordic-tenors2/',
  //   pageUrl: '/konserter/sandvika-julekonsert',
  // },
  // {
  //   id: 3,
  //   name: 'Blå Grotte, Fredrikstad',
  //   imageUrl: '/thumbnails/Blå_Grotte_thumb.webp',
  //   date: '3. desember',
  //   ticketLink: 'https://checkout.ebillett.no/260/events/129790/purchase/setup',
  //   pageUrl: '/konserter/fredrikstad-julekonsert',
  // },
  // {
  //   id: 4,
  //   name: 'Nøtterøy Kulturhus',
  //   imageUrl: '/thumbnails/Nøtterøy_kulturhus_thumb.webp',
  //   date: '4. desember',
  //   ticketLink: 'https://tix.no/nb/notteroy/buyingflow/tickets/25514/72772',
  //   pageUrl: '/konserter/notteroy-julekonsert',
  // },
  // {
  //   id: 5,
  //   name: 'Bølgen Kulturhus, Larvik',
  //   imageUrl: '/thumbnails/Bølgen_kulturhus_thumb.webp',
  //   date: '5. desember',
  //   ticketLink:
  //     'https://tix.no/nb/bolgen/buyingflow/tickets/25744/?_ga=2.161043901.1051657898.1702914858-1165690517.1702914857&_gac=1.253871610.1702914858.CjwKCAiA-P-rBhBEEiwAQEXhH_WmJIGxwI7O6og-vDAp_WW5t7UB2nhQ5O9LhbCKNXotQGFB8cNqHBoCURAQAvD_BwE&_gl=1*1bnmxif*_ga*MTE2NTY5MDUxNy4xNzAyOTE0ODU3*_ga_R2NHV9NW52*MTcwMjkxNDg1Ny4xLjEuMTcwMjkxNDg4Ny4zMC4wLjA.',
  //   pageUrl: '/konserter/larvik-julekonsert',
  // },
  // {
  //   id: 6,
  //   name: 'Asker Kulturhus',
  //   imageUrl: '/thumbnails/Asker_kulturhus_thumb.webp',
  //   date: '6. desember',
  //   ticketLink:
  //     'https://www.askerkulturhus.no/program/christmas-with-nordic-tenors/',
  //   pageUrl: '/konserter/asker-julekonsert',
  // },
  // {
  //   id: 7,
  //   name: 'Biorama, Holmestrand',
  //   imageUrl: '/thumbnails/Biorama_thumb.webp',
  //   date: '7. desember',
  //   ticketLink:
  //     'https://holmestrandkommune.ticketco.events/no/nb/e/christmas_with_nordic_tenors_2024',
  //   pageUrl: '/konserter/holmestrand-julekonsert',
  // },
  // {
  //   id: 8,
  //   name: 'Hadeland Kultursal',
  //   imageUrl: '/thumbnails/Hadeland_Kultursal_thumb.webp',
  //   date: '8. desember',
  //   ticketLink:
  //     'https://www.kulturhadeland.no/christmas-with-nordic-tenors-2024-xd5i6y4/',
  //   pageUrl: '/konserter/hadeland-julekonsert',
  // },
  // {
  //   id: 9,
  //   name: 'Oslo Konserthus',
  //   imageUrl: '/thumbnails/Oslo_Konserthus_thumb.webp',
  //   date: '9. desember',
  //   ticketLink: 'https://tix.no/nb/oslok/buyingflow/tickets/25447/48302/#tixsp',
  //   pageUrl: '/konserter/oslo-julekonsert',
  // },

  // {
  //   id: 11,
  //   name: 'Arendal Kulturhus',
  //   imageUrl: '/thumbnails/Arendal_kulturhus_thumb.webp',
  //   date: '11. desember',
  //   ticketLink: 'https://tix.no/nb/arendal/buyingflow/tickets/25512/',
  //   pageUrl: '/konserter/arendal-julekonsert',
  // },
  // {
  //   id: 12,
  //   name: 'Kilden, Kristiansand',
  //   imageUrl: '/thumbnails/Kilden_kulturhus_thumb.webp',
  //   date: '12. desember',
  //   ticketLink:
  //     'https://kilden.com/forestilling/christmas-with-nordic-tenors-5/',
  //   pageUrl: '/konserter/kristiansand-julekonsert',
  // },
  // {
  //   id: 13,
  //   name: 'Flekkefjord Kulturhus Spira',
  //   imageUrl: '/thumbnails/Flekkefjord_thumb.webp',
  //   date: '13. desember',
  //   ticketLink: 'https://flekkefjordkultursenter.no/nordic-tenors-kd8r9j/',
  //   pageUrl: '/konserter/flekkefjord-julekonsert',
  // },
  // {
  //   id: 14,
  //   name: 'Sandnes Kulturhus',
  //   imageUrl: '/thumbnails/Sandnes_kulturhus_thumb.webp',
  //   date: '14. desember',
  //   ticketLink: 'https://tix.no/nb/sandnes/buyingflow/tickets/25517/48365/',
  //   pageUrl: '/konserter/sandnes-julekonsert',
  // },

  // {
  //   id: 18,
  //   name: 'Olavshallen, Trondheim',
  //   imageUrl: '/thumbnails/Olavshallen_thumb.webp',
  //   date: '18. desember',
  //   ticketLink:
  //     'https://www.olavshallen.no/forestillinger/2023-11-23-christmas-with-nordic-tenors?utm_source=Social&utm_medium=Social&utm_campaign=Nordictenors&utm_id=Nordictenors',
  //   pageUrl: '/konserter/trondheim-julekonsert',
  // },

  // {
  //   id: 20,
  //   name: 'Stormen, Bodø',
  //   imageUrl: '/thumbnails/Stormen_thumb.webp',
  //   date: '20. desember',
  //   ticketLink:
  //     'https://billetter.stormen.no/nb/buyingflow/tickets/26884/50393',
  //   pageUrl: '/konserter/bodo-julekonsert',
  // },
  // {
  //   id: 21,
  //   name: 'Kimen, Stjørdal',
  //   imageUrl: '/thumbnails/Kimen_thumb.webp',
  //   date: '21. desember',
  //   ticketLink:
  //     'https://tix.no/nb/kimenkulturhus/buyingflow/tickets/27102/50673/',
  //   pageUrl: '/konserter/stjordal-julekonsert',
  // },
  // {
  //   id: 22,
  //   name: 'Drammens Teater',
  //   imageUrl: '/thumbnails/Drammens_Teater_thumb.webp',
  //   date: '22. desember',
  //   ticketLink:
  //     'https://www.drammenscener.no/teatret/program/25611-christmas-with-nordic-tenors/',
  //   pageUrl: '/konserter/drammen-julekonsert',
  // },
]

export function Desember_2025() {
  const handleTicketClick = (event) => {
    event.stopPropagation()
  }

  return (
    <div id="desember" className="w-full overflow-x-hidden rounded-xl ">
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
