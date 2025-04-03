import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import { Hero } from '@/components/Hero'
import { MobileNavigation } from '@/components/MobileNavigation'
import { Navigation } from '@/components/Navigation'
import { Prose } from '@/components/Prose'
import { Search } from '@/components/Search'
import { ThemeSelector } from '@/components/ThemeSelector'
import { Footer } from '@/components/Footer'

// Filter past concerts based on their isoDate
function filterNavigation(navigation) {
  const today = new Date()
  return navigation.map((section) => ({
    ...section,
    links: section.links.filter((link) => {
      // Retain links without isoDate or if isoDate is in the future
      return !link.isoDate || new Date(link.isoDate) >= today
    }),
  }))
}

export const navigation = [
  {
    title: 'Nordic Tenors',
    links: [
      { title: 'Konserter', href: '/' },
      {
        title: `Om Nordic Tenors`,
        href: '/konserter/om-nordic-tenors',
      },
      { title: 'Kontakt oss', href: '/konserter/kontakt' },
    ],
  },

  // À la carte 2025
  {
    title: 'Nordic Tenors - À la carte 2025',
    links: [
      {
        title: 'Bergen',
        href: '/konserter/bergen-a-la-carte',
        isoDate: '2025-04-08T19:00:00.000Z',
      },
      {
        title: 'Drammen',
        href: '/konserter/drammen-a-la-carte',
        isoDate: '2025-03-20T19:00:00.000Z',
      },
      {
        title: 'Fredrikstad',
        href: '/konserter/fredrikstad-a-la-carte',
        isoDate: '2025-03-23T19:00:00.000Z',
      },
      {
        title: 'Grong',
        href: '/konserter/grong-a-la-carte',
        isoDate: '2025-04-04T19:00:00.000Z',
      },
      {
        title: 'Haugesund',
        href: '/konserter/haugesund-a-la-carte',
        isoDate: '2025-04-09T19:00:00.000Z',
      },
      {
        title: 'Kolbotn',
        href: '/konserter/kolbotn-a-la-carte',
        isoDate: '2025-03-19T19:00:00.000Z',
      },
      {
        title: 'Kongsvinger',
        href: '/konserter/kongsvinger-a-la-carte',
        isoDate: '2025-03-21T19:00:00.000Z',
      },
      {
        title: 'Lillestrøm',
        href: '/konserter/lillestrom-a-la-carte',
        isoDate: '2025-03-22T19:00:00.000Z',
      },
      {
        title: 'Mosjøen',
        href: '/konserter/mosjoen-a-la-carte',
        isoDate: '2025-04-05T19:00:00.000Z',
      },
      {
        title: 'Sandnessjøen',
        href: '/konserter/sandnessjoen-a-la-carte',
        isoDate: '2025-04-06T19:00:00.000Z',
      },
      {
        title: 'Steinkjer',
        href: '/konserter/steinkjer-a-la-carte',
        isoDate: '2025-04-03T19:00:00.000Z',
      },
      {
        title: 'Trondheim',
        href: '/konserter/trondheim-a-la-carte',
        isoDate: '2025-04-02T19:00:00.000Z',
      },
      {
        title: 'Ålesund',
        href: '/konserter/alesund-a-la-carte',
        isoDate: '2025-04-07T19:00:00.000Z',
      },
    ],
  },
  // Christmas with Nordic Tenors 2025
  {
    title: 'Christmas with Nordic Tenors 2025',
    links: [
      {
        title: 'Arendal',
        href: '/konserter/arendal-julekonsert-2025',
        isoDate: '2025-12-03T19:00:00.000Z',
      },
      {
        title: 'Askim',
        href: '/konserter/askim-julekonsert-2025',
        isoDate: '2025-11-29T18:00:00.000Z',
      },
      {
        title: 'Bergen',
        href: '/konserter/bergen-julekonsert-2025',
        isoDate: '2025-12-09T18:30:00.000Z',
      },
      {
        title: 'Brattvåg',
        href: '/konserter/brattvag-julekonsert-2025',
        isoDate: '2025-12-06T18:00:00.000Z',
      },
      {
        title: 'Bodø',
        href: '/konserter/bodo-julekonsert-2025',
        isoDate: '2025-12-17T18:00:00.000Z',
      },
      {
        title: 'Drammen',
        href: '/konserter/drammen-julekonsert-2025',
        isoDate: '2025-12-22T18:00:00.000Z',
      },
      {
        title: 'Elverum',
        href: '/konserter/elverum-julekonsert-2025',
        isoDate: '2025-11-27T18:00:00.000Z',
      },
      {
        title: 'Fredrikstad',
        href: '/konserter/fredrikstad-julekonsert-2025',
        isoDate: '2025-11-28T19:00:00.000Z',
      },
      {
        title: 'Fosnavåg',
        href: '/konserter/fosnavag-julekonsert-2025',
        isoDate: '2025-12-05T20:00:00.000Z',
      },
      {
        title: 'Hadeland',
        href: '/konserter/hadeland-julekonsert-2025',
        isoDate: '2025-11-22T18:00:00.000Z',
      },
      {
        title: 'Hamar',
        href: '/konserter/hamar-julekonsert-2025',
        isoDate: '2025-12-20T18:00:00.000Z',
      },
      {
        title: 'Haugesund',
        href: '/konserter/haugesund-julekonsert-2025',
        isoDate: '2025-12-10T18:00:00.000Z',
      },
      {
        title: 'Holmestrand',
        href: '/konserter/holmestrand-julekonsert-2025',
        isoDate: '2025-11-21T19:00:00.000Z',
      },
      {
        title: 'Horten',
        href: '/konserter/horten-julekonsert-2025',
        isoDate: '2025-11-20T19:00:00.000Z',
      },
      {
        title: 'Hønefoss',
        href: '/konserter/honefoss-julekonsert-2025',
        isoDate: '2025-11-23T18:00:00.000Z',
      },
      {
        title: 'Larvik',
        href: '/konserter/larvik-julekonsert-2025',
        isoDate: '2025-12-04T18:00:00.000Z',
      },
      {
        title: 'Lillehammer',
        href: '/konserter/lillehammer-julekonsert-2025',
        isoDate: '2025-12-19T18:00:00.000Z',
      },
      {
        title: 'Lillestrøm',
        href: '/konserter/lillestrom-julekonsert-2025',
        isoDate: '2025-12-18T18:00:00.000Z',
      },
      {
        title: 'Molde',
        href: '/konserter/molde-julekonsert-2025',
        isoDate: '2025-12-07T18:00:00.000Z',
      },
      {
        title: 'Moss',
        href: '/konserter/moss-julekonsert-2025',
        isoDate: '2025-11-30T18:00:00.000Z',
      },
      {
        title: 'Narvik',
        href: '/konserter/narvik-julekonsert-2025',
        isoDate: '2025-12-15T19:00:00.000Z',
      },
      {
        title: 'Nøtterøy',
        href: '/konserter/notteroy-julekonsert-2025',
        isoDate: '2025-11-26T18:00:00.000Z',
      },
      {
        title: 'Oslo',
        href: '/konserter/oslo-julekonsert-2025',
        isoDate: '2025-11-25T19:00:00.000Z',
      },
      {
        title: 'Sandnes',
        href: '/konserter/sandnes-julekonsert-2025',
        isoDate: '2025-12-13T18:00:00.000Z',
      },
      {
        title: 'Sandvika',
        href: '/konserter/sandvika-julekonsert-2025',
        isoDate: '2025-12-21T18:00:00.000Z',
      },
      {
        title: 'Sauda',
        href: '/konserter/sauda-julekonsert-2025',
        isoDate: '2025-12-11T19:00:00.000Z',
      },
      {
        title: 'Stavanger',
        href: '/konserter/stavanger-julekonsert-2025',
        isoDate: '2025-12-12T18:00:00.000Z',
      },
      {
        title: 'Stjørdal',
        href: '/konserter/stjordal-julekonsert-2025',
        isoDate: '2025-12-01T20:00:00.000Z',
      },
      {
        title: 'Tromsø',
        href: '/konserter/tromso-julekonsert-2025',
        isoDate: '2025-12-16T19:00:00.000Z',
      },
      {
        title: 'Trondheim',
        href: '/konserter/trondheim-julekonsert-2025',
        isoDate: '2025-12-02T18:00:00.000Z',
      },
      {
        title: 'Ullensaker',
        href: '/konserter/ullensaker-julekonsert-2025',
        isoDate: '2025-12-14T18:00:00.000Z',
      },
      {
        title: 'Ålesund',
        href: '/konserter/alesund-julekonsert-2025',
        isoDate: '2025-12-08T18:00:00.000Z',
      },
    ],
  },
]

function Header({ navigation }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-gray-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8',
        isScrolled
          ? 'dark:bg-gray-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-gray-900/75'
          : 'dark:bg-transparent'
      )}
    >
      <div className="mr-6 flex lg:hidden">
        <MobileNavigation navigation={navigation} />
      </div>
      <div className="relative flex flex-grow basis-0 items-center">
        <Link href="/" aria-label="Hjemmeside">
          <Image
            src="/logos/Nordic_Tenors_2_linjer_sølv.webp"
            alt="Nordic Tenors logo"
            width={200}
            height={200}
            className="h-7 w-auto lg:hidden"
          />
          <Image
            src="/logos/Nordic_Tenors_1_linje_sølv.webp"
            alt="Nordic Tenors logo"
            width={200}
            height={200}
            className="hidden lg:block"
          />
        </Link>
      </div>
      <div className="-my-5 mr-6 sm:mr-8 md:mr-0">
        <Search />
      </div>
      <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
        <ThemeSelector className="relative z-10" />
        <div className="group">
          <p className="cursor-pointer font-display font-semibold text-sky-800 hover:text-red-700 dark:text-gold-500 dark:hover:text-white">
            EN
          </p>
        </div>
      </div>
    </header>
  )
}

export function Layout({ children, title, tableOfContents, frontmatter }) {
  const router = useRouter()
  const isHomePage = router.pathname === '/'

  // Filter the navigation to exclude past concerts
  const filteredNavigation = filterNavigation(navigation)

  // Function to check if a section is active (for tableOfContents)
  const isActive = (section) => {
    if (section.id === tableOfContents?.[0]?.id) {
      return true
    }
    if (!section.children) {
      return false
    }
    return section.children.findIndex(isActive) > -1
  }

  return (
    <>
      <Header navigation={filteredNavigation} />

      {isHomePage && <Hero />}

      <div className="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
            <Navigation navigation={filteredNavigation} />
          </div>
        </div>
        <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
          <article>
            {(title || frontmatter) && (
              <header className="mb-9 space-y-1">
                {frontmatter && (
                  <p className="text-base font-semibold text-sky-800 dark:text-gold-500">
                    {frontmatter.title}
                  </p>
                )}
                {title && (
                  <h1 className="font-display text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {title}
                  </h1>
                )}
              </header>
            )}
            <Prose>{children}</Prose>
          </article>
        </div>
        <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
          <nav aria-labelledby="on-this-page-title" className="w-56">
            {tableOfContents?.length > 0 && (
              <>
                <h2
                  id="on-this-page-title"
                  className="font-display text-base font-semibold text-gray-900 dark:text-white sm:text-lg"
                >
                  På denne siden
                </h2>
                <ol role="list" className="mt-4 space-y-3 text-sm">
                  {tableOfContents.map((section) => (
                    <li key={section.id}>
                      <p>
                        <Link
                          href={`#${section.id}`}
                          className={clsx(
                            isActive(section)
                              ? 'text-sky-800 dark:text-gold-500'
                              : 'font-normal text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                          )}
                        >
                          {section.title}
                        </Link>
                      </p>
                      {section.children.length > 0 && (
                        <ol
                          role="list"
                          className="mt-2 space-y-3 pl-5 text-gray-500 dark:text-gray-400"
                        >
                          {section.children.map((subSection) => (
                            <li key={subSection.id}>
                              <Link
                                href={`#${subSection.id}`}
                                className={clsx(
                                  isActive(subSection)
                                    ? 'text-sky-800 dark:text-gold-500'
                                    : 'hover:text-gray-600 dark:hover:text-gray-300'
                                )}
                              >
                                {subSection.title}
                              </Link>
                            </li>
                          ))}
                        </ol>
                      )}
                    </li>
                  ))}
                </ol>
              </>
            )}
          </nav>
        </div>
      </div>

      <Footer />
    </>
  )
}
