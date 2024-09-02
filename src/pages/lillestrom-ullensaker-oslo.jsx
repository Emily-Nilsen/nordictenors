import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    id: 1,
    title: 'Lillestrøm Kultursenter',
    imageUrl: '/halls/Lillestrøm_Kultursenter.webp',
    date: 'Søndag 24. nov kl. 18:00',
    datetime: '2024-11-24',
    category: {
      title: 'Billetter',
      href: 'https://www.lillestrom-kultursenter.no/event/christmas-with-nordic-tenors/',
    },
    pageUrl: '/konserter/lillestrom-julekonsert',
  },
  {
    id: 2,
    title: 'Ullensaker Konserthus',
    imageUrl: '/halls/Ullensaker_Kulturhus.webp',
    date: 'Fredag 29. nov kl. 18:00',
    datetime: '2024-11-29',
    category: {
      title: 'Billetter',
      href: 'https://www.ticketmaster.no/event/731653?language=no-no&track=DiscoveryAPI&subchannel_id=1&brand=ullensakerkulturhus&_ga=2.228013205.905843521.1700720460-336858269.1579679332&_gl=1*wqena*_ga*MzM2ODU4MjY5LjE1Nzk2NzkzMzI.*_ga_Q5XX5068LZ*MTcwMDcyMDQ1OS4xMDAuMS4xNzAwNzIwNTQ4LjAuMC4w',
    },
    pageUrl: '/konserter/ullensaker-julekonsert',
  },
  {
    id: 3,
    title: 'Oslo Konserthus',
    imageUrl: '/stages/Oslo.webp',
    date: 'Mandag 9. des kl. 19:00',
    datetime: '2024-12-09',
    category: {
      title: 'Billetter',
      href: 'https://tix.no/nb/oslok/buyingflow/tickets/25447/48302/#tixsp',
    },
    pageUrl: '/konserter/oslo-julekonsert',
  },
]

export default function LillestromUllensakerOslo() {
  return (
    <div className="bg-t relative py-24 sm:py-32">
      <div className="absolute left-0 top-0 h-96 w-full overflow-hidden">
        <Image
          alt="Christmas with Nordic Tenors"
          src="/images/julekonsert_2024.webp"
          width={1500}
          height={1500}
          className="not-prose h-full w-full overflow-hidden rounded-2xl object-cover object-center"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        <div className="relative z-10 mx-auto max-w-2xl pt-32 text-center">
          <h2 className="not-prose font-logo text-xl tracking-tight text-white sm:text-2xl">
            christmas with
          </h2>
          <h2 className="not-prose font-logo text-2xl tracking-tight text-white sm:text-4xl">
            nordic tenors
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <Image
                  alt="Christmas with Nordic Tenors"
                  src={post.imageUrl}
                  width={500}
                  height={300}
                  className="not-prose aspect-[16/9] w-full rounded-2xl border border-gray-200 bg-gray-100 object-cover dark:border-gray-800 sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-500/10" />
              </div>
              <div className="w-full sm:max-w-xl">
                <div className="mt-8 flex w-full items-center justify-between text-xs">
                  <div>
                    <time
                      dateTime={post.datetime}
                      className="text-gray-500 dark:text-gray-200"
                    >
                      {post.date}
                    </time>
                  </div>
                  <div>
                    <a
                      href={post.category.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800 sm:mr-3"
                    >
                      {post.category.title}
                    </a>
                  </div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={post.pageUrl}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
