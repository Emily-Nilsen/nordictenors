import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    id: 1,
    title: 'Bakkenteigen Kulturhus, Horten',
    imageUrl: '/halls/Oseana.webp',
    date: 'fredag 22. nov kl. 19:00',
    datetime: '2024-11-22',
    category: {
      title: 'Billetter',
      href: 'https://bakkenteigen.ticketco.events/no/nb/e/christmas_with_nordic_tenors_2024',
    },
    pageUrl: '/konserter/horten-julekonsert',
  },
  {
    id: 2,
    title: 'Biorama, Holmestrand',
    imageUrl: '/images/Bergen.jpeg',
    date: 'lørdag 7. des kl. 18:00',
    datetime: '2024-12-07',
    category: {
      title: 'Billetter',
      href: 'https://holmestrandkommune.ticketco.events/no/nb/e/christmas_with_nordic_tenors_2024',
    },
    pageUrl: '/konserter/holmestrand-julekonsert',
  },
]

export default function HortenHolmestrand() {
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
          <h2 className="not-prose font-logo text-2xl tracking-tight text-white sm:text-3xl">
            nordic tenors
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
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
