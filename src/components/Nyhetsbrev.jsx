import Link from 'next/link'

export function Nyhetsbrev() {
  return (
    <div className="rounded-xl bg-slate-50 dark:bg-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Ønsker du å motta Nordic Tenors’ nyhetsbrev?
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          {/* <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a> */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nordictenors.us17.list-manage.com/subscribe?u=067fa210513aeafa6dfc27206&id=136c1bfdb3"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Nyhetsbrev <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}
