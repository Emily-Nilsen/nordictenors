import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { GoBackButton } from './GoBackButton'

const concerts = [
  {
    id: 1,
    name: 'Moss Kulturhus',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694981083/Julekonsert/Moss_Kulturhus_lnpkyw.webp',
    date: '28. februar',
    pageUrl: '/konserter/moss',
  },
  {
    id: 2,
    name: 'Smia Flerbrukshus, Drøbak',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1704979651/Julekonsert/alles-kulturhus_muvum4.webp',
    date: '29. februar',
    pageUrl: '/konserter/drobak',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Februar() {
  return (
    <div className="w-full overflow-x-hidden bg-sky-50 dark:bg-sky-950">
      <section className="-mt-3 sm:mt-6">
        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
          {concerts.map((concert) => (
            <Link key={concert.id} href={concert.pageUrl}>
              <li className="group flex items-center space-x-4 rounded-xl border border-transparent px-4 py-0 transition duration-300 ease-in-out focus-within:bg-gray-50 hover:border hover:border-amber-400/5 hover:bg-gray-50 dark:hover:bg-gray-800/60">
                <Image
                  src={concert.imageUrl}
                  alt={concert.name}
                  width={50}
                  height={50}
                  className="h-14 w-14 flex-none rounded-full border border-amber-400/50"
                />
                <div className="flex-auto font-normal">
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    {concert.name}
                  </p>
                  <p className="-mt-5 flex gap-x-3">
                    <span className="font-bold text-gray-900 dark:text-white">
                      {concert.date}
                    </span>
                  </p>
                </div>

                <div>
                  <div className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600 dark:text-amber-400">
                    <EllipsisVerticalIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ol>
      </section>
      <div className="h-10 w-full border-b border-gray-300/30 dark:border-gray-300/10" />
    </div>
  )
}
