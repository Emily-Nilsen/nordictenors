import Link from 'next/link'

export function ConcertHeader({ day, date, month, time, ticketUrl }) {
  // Trim the month to the first three letters
  const trimmedMonth = month.slice(0, 3)

  return (
    <div className="-my-6 w-full">
      <div className="flex w-full items-center justify-between text-lg">
        <p>
          {' '}
          <span className="capitalize">{day}</span>{' '}
          <span className="font-bold">
            {date}. {trimmedMonth}
          </span>{' '}
          kl. {time}
        </p>
        <div className="inline-block">
          {ticketUrl ? (
            <>
              <Link href={ticketUrl} target="_blank" rel="noopener noreferrer">
                <button className="dark:bg-t flex items-center justify-center rounded-full bg-amber-50/70 px-5 py-2 text-base text-amber-900 shadow-md shadow-black/5 ring-1 ring-amber-800/10 transition duration-150 ease-in-out hover:bg-amber-50/95 hover:text-amber-950 dark:bg-gray-800/60 dark:text-gray-300 dark:ring-1 dark:ring-inset dark:ring-white/5 dark:hover:bg-gray-800/70 hover:dark:ring-amber-400/5">
                  Billetter
                </button>
              </Link>
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}
