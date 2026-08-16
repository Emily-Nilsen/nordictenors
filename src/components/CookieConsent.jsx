import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  ALLOW_ALL,
  CONSENT_OPEN_EVENT,
  DENY_ALL,
  readConsent,
  saveConsent,
} from 'utils/consent'

const COPY = {
  no: {
    heading: 'Vi bruker informasjonskapsler',
    summary: [
      {
        label: 'Nødvendige informasjonskapsler',
        text: 'er alltid på. De får nettsiden til å fungere, og husker valgene dine – som lyst eller mørkt utseende, og hva du svarer her.',
      },
      {
        label: 'Statistikk',
        text: 'brukes bare hvis du sier ja. Statistikk viser oss hvordan nettsiden blir brukt, slik at vi kan forbedre den.',
      },
      {
        label: 'Markedsføring',
        text: 'brukes bare hvis du sier ja. Markedsføring måler effekten av annonseringen vår, og lar oss vise annonser på andre nettsteder.',
      },
    ],
    body: 'Til statistikk og markedsføring bruker vi Google. Du kan endre valget ditt når som helst nederst på siden.',
    policy: 'Les mer i personvernerklæringen',
    policyHref: '/konserter/personvern',
    acceptAll: 'Godta alle',
    rejectAll: 'Kun nødvendige',
    customize: 'Tilpass',
    savePreferences: 'Lagre valg',
    close: 'Lukk',
    categories: [
      {
        key: 'necessary',
        title: 'Nødvendige',
        alwaysOn: 'Alltid på',
        description:
          'Kreves for at nettsiden skal fungere. Husker blant annet valgt tema og samtykket ditt. Disse kan ikke slås av.',
      },
      {
        key: 'analytics',
        title: 'Statistikk',
        description:
          'Hjelper oss å forstå hvordan nettsiden blir brukt, slik at vi kan gjøre den bedre.',
      },
      {
        key: 'marketing',
        title: 'Markedsføring',
        description:
          'Brukes til å måle effekten av annonseringen vår og vise deg relevante annonser på andre nettsteder.',
      },
    ],
  },
  en: {
    heading: 'We use cookies',
    summary: [
      {
        label: 'Necessary cookies',
        text: 'are always on. They make the site work, and remember your choices – such as the light or dark appearance, and what you answer here.',
      },
      {
        label: 'Statistics',
        text: 'are used only if you say yes. Statistics show us how the site is used, so we can improve it.',
      },
      {
        label: 'Marketing',
        text: 'are used only if you say yes. Marketing measures how our advertising performs, and lets us show ads on other websites.',
      },
    ],
    body: 'We use Google for statistics and marketing. You can change your choice at any time at the bottom of the page.',
    policy: 'Read more in our privacy policy',
    policyHref: '/en/privacy',
    acceptAll: 'Accept all',
    rejectAll: 'Necessary only',
    customize: 'Customise',
    savePreferences: 'Save choices',
    close: 'Close',
    categories: [
      {
        key: 'necessary',
        title: 'Necessary',
        alwaysOn: 'Always on',
        description:
          'Required for the site to work. Remembers things like your theme choice and your consent. These cannot be turned off.',
      },
      {
        key: 'analytics',
        title: 'Statistics',
        description:
          'Helps us understand how the site is used so we can make it better.',
      },
      {
        key: 'marketing',
        title: 'Marketing',
        description:
          'Used to measure how our advertising performs and to show you relevant ads on other sites.',
      },
    ],
  },
}

function Toggle({ checked, disabled, onChange, label }) {
  return (
    <label className="relative inline-flex shrink-0 cursor-pointer items-center">
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
        aria-label={label}
      />
      <span className="h-6 w-11 rounded-full bg-gray-300 transition-colors peer-checked:bg-sky-700 peer-disabled:opacity-60 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-sky-700 dark:bg-gray-700 dark:peer-checked:bg-gold-500 dark:peer-focus-visible:outline-gold-500" />
      <span className="pointer-events-none absolute left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
    </label>
  )
}

export function CookieConsent() {
  const router = useRouter()
  const isEnglish = router.pathname.startsWith('/en')
  const t = isEnglish ? COPY.en : COPY.no

  const [isOpen, setIsOpen] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [selection, setSelection] = useState(DENY_ALL)
  const [hasStoredChoice, setHasStoredChoice] = useState(true)
  const dialogRef = useRef(null)

  // Vis banneret først etter mount – samtykket ligger i en cookie som ikke er
  // tilgjengelig under server-rendering.
  useEffect(() => {
    const stored = readConsent()
    if (stored) {
      setSelection(stored)
      setHasStoredChoice(true)
    } else {
      setHasStoredChoice(false)
      setIsOpen(true)
    }
  }, [])

  // Bunnteksten åpner valget på nytt via dette eventet.
  useEffect(() => {
    const onOpen = () => {
      setSelection(readConsent() ?? DENY_ALL)
      setShowDetails(true)
      setIsOpen(true)
      window.requestAnimationFrame(() => dialogRef.current?.focus())
    }
    window.addEventListener(CONSENT_OPEN_EVENT, onOpen)
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, onOpen)
  }, [])

  const commit = useCallback((consent) => {
    saveConsent(consent)
    setSelection(consent)
    setHasStoredChoice(true)
    setIsOpen(false)
    setShowDetails(false)
  }, [])

  if (!isOpen) return null

  const primaryButton =
    'w-full rounded-md bg-sky-800 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800 dark:bg-gold-500 dark:text-gray-900 dark:hover:bg-gold-400 dark:focus-visible:outline-gold-500 sm:w-auto'
  const secondaryButton =
    'w-full rounded-md border border-sky-800 px-4 py-2.5 text-sm font-semibold text-sky-800 transition-colors hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800 dark:border-gold-500 dark:text-gold-500 dark:hover:bg-gray-800 dark:focus-visible:outline-gold-500 sm:w-auto'

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6">
      <div
        ref={dialogRef}
        role="dialog"
        aria-labelledby="cookie-consent-heading"
        aria-describedby="cookie-consent-body"
        tabIndex={-1}
        className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white p-6 shadow-2xl outline-none dark:border-gray-700 dark:bg-gray-900"
      >
        <h2
          id="cookie-consent-heading"
          className="font-display text-xl font-semibold text-gray-900 dark:text-white"
        >
          {t.heading}
        </h2>
        {!showDetails && (
          <ul className="mt-3 space-y-1.5 text-sm leading-6 text-gray-600 dark:text-gray-300">
            {t.summary.map((item) => (
              <li key={item.label}>
                <strong className="font-semibold text-gray-900 dark:text-white">
                  {item.label}
                </strong>{' '}
                {item.text}
              </li>
            ))}
          </ul>
        )}

        <p
          id="cookie-consent-body"
          className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300"
        >
          {t.body}{' '}
          <Link
            href={t.policyHref}
            className="font-semibold text-sky-800 underline hover:text-sky-700 dark:text-gold-500 dark:hover:text-white"
          >
            {t.policy}
          </Link>
          .
        </p>

        {showDetails && (
          <ul className="mt-5 space-y-4 border-t border-gray-200 pt-5 dark:border-gray-700">
            {t.categories.map((category) => {
              const isNecessary = category.key === 'necessary'
              return (
                <li key={category.key} className="flex items-start gap-4">
                  <div className="flex-auto">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {category.title}
                      {isNecessary && (
                        <span className="ml-2 text-xs font-normal text-gray-500 dark:text-gray-400">
                          ({category.alwaysOn})
                        </span>
                      )}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {category.description}
                    </p>
                  </div>
                  <Toggle
                    label={category.title}
                    checked={isNecessary || selection[category.key]}
                    disabled={isNecessary}
                    onChange={(checked) =>
                      setSelection((current) => ({
                        ...current,
                        [category.key]: checked,
                      }))
                    }
                  />
                </li>
              )
            })}
          </ul>
        )}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button type="button" className={primaryButton} onClick={() => commit(ALLOW_ALL)}>
            {t.acceptAll}
          </button>
          <button type="button" className={secondaryButton} onClick={() => commit(DENY_ALL)}>
            {t.rejectAll}
          </button>
          {showDetails ? (
            <button
              type="button"
              className={secondaryButton}
              onClick={() => commit(selection)}
            >
              {t.savePreferences}
            </button>
          ) : (
            <button
              type="button"
              className="w-full px-4 py-2.5 text-sm font-semibold text-gray-600 underline transition-colors hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800 dark:text-gray-300 dark:hover:text-white sm:w-auto"
              onClick={() => setShowDetails(true)}
            >
              {t.customize}
            </button>
          )}
          {hasStoredChoice && (
            <button
              type="button"
              className="w-full px-4 py-2.5 text-sm font-semibold text-gray-600 underline transition-colors hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800 dark:text-gray-300 dark:hover:text-white sm:ml-auto sm:w-auto"
              onClick={() => {
                setIsOpen(false)
                setShowDetails(false)
              }}
            >
              {t.close}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
