import { DiceFiveIcon } from './icons/DiceFiveIcon'
import { DiceSixIcon } from './icons/DiceSixIcon'

const reviews = [
  {
    id: 1,
    rating: 6,
    content: `
      <p>&laquo;Brilliant Christmas tenors&raquo;</p>
    `,
    author: 'Haugesunds Avis',
    icon: (
      <DiceSixIcon
        className="h-6 w-6 fill-red-700 dark:fill-amber-400"
        aria-hidden="true"
      />
    ),
  },
  {
    id: 2,
    rating: 6,
    content: `
      <p>&laquo;A musical delight from beginning to end&raquo;</p>
    `,
    author: 'Fædrelandsvennen',
    icon: (
      <DiceSixIcon
        className="h-6 w-6 fill-red-700 dark:fill-amber-400"
        aria-hidden="true"
      />
    ),
  },
  {
    id: 3,
    rating: 5,
    content: `
      <p>&laquo;Humour and holiday spirit&raquo;</p>
    `,
    author: 'VG',
    icon: (
      <DiceFiveIcon
        className="h-6 w-6 fill-red-700 dark:fill-amber-400"
        aria-hidden="true"
      />
    ),
  },
  {
    id: 4,
    rating: null,
    content: `
      <p>&laquo;Three voices of the highest class&raquo;</p>
    `,
    author: 'Olav Solvang, Vårt Land',
    icon: null,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function ReviewsEn() {
  return (
    <div className="bg-transparent">
      <div className="mb-12 mt-6">
        <h2 className="sr-only">Press reviews</h2>

        <div className="-my-10t">
          {reviews.map((review, reviewIdx) => (
            <div
              key={review.id}
              className="flex max-w-sm space-x-4 text-sm text-gray-500"
            >
              <div className="flex-none py-10">
                <div className="h-8 w-8"></div>
                {review.icon}
              </div>
              <div
                className={classNames(
                  reviewIdx === 0
                    ? ''
                    : 'border-t border-gray-200 dark:border-gray-800',
                  'flex-1 py-10'
                )}
              >
                <p className="font-medium text-gray-900 dark:text-white">
                  {review.author}
                </p>

                <p className="sr-only">Rating {review.rating}</p>

                <div
                  className="prose prose-sm -mt-2 max-w-none text-lg italic text-gray-500 dark:text-gray-300"
                  dangerouslySetInnerHTML={{ __html: review.content }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
