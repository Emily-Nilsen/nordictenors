// Samtykke for informasjonskapsler / cookie consent.
//
// Valget lagres i en førsteparts-cookie slik at det overlever på tvers av
// nettlesersesjoner, og speiles til Google Consent Mode v2 slik at taggene i
// Google Tag Manager kan reagere på det.

export const CONSENT_COOKIE = 'nt-consent'
export const CONSENT_VERSION = 1

// Datatilsynet anbefaler å spørre på nytt minst én gang i året.
export const CONSENT_MAX_AGE_DAYS = 365

// Sendes på window når samtykket endres, og når banneret skal åpnes igjen.
export const CONSENT_CHANGE_EVENT = 'nt-consent-change'
export const CONSENT_OPEN_EVENT = 'nt-consent-open'

export const DENY_ALL = { analytics: false, marketing: false }
export const ALLOW_ALL = { analytics: true, marketing: true }

function normalize(consent) {
  return {
    analytics: consent?.analytics === true,
    marketing: consent?.marketing === true,
  }
}

/**
 * Leser lagret samtykke. Returnerer null når besøkende ikke har valgt ennå,
 * eller når det lagrede valget er utdatert og må innhentes på nytt.
 */
export function readConsent() {
  if (typeof document === 'undefined') return null

  const match = document.cookie.match(
    new RegExp('(?:^|; )' + CONSENT_COOKIE + '=([^;]*)')
  )
  if (!match) return null

  try {
    const stored = JSON.parse(decodeURIComponent(match[1]))
    if (stored?.v !== CONSENT_VERSION) return null
    return normalize(stored)
  } catch {
    return null
  }
}

export function writeConsent(consent) {
  const value = {
    v: CONSENT_VERSION,
    ...normalize(consent),
    ts: new Date().toISOString(),
  }

  const secure = window.location.protocol === 'https:' ? '; Secure' : ''
  document.cookie =
    CONSENT_COOKIE +
    '=' +
    encodeURIComponent(JSON.stringify(value)) +
    '; Path=/; Max-Age=' +
    CONSENT_MAX_AGE_DAYS * 24 * 60 * 60 +
    '; SameSite=Lax' +
    secure

  return normalize(value)
}

/** Oversetter våre kategorier til Google Consent Mode v2-signaler. */
export function toGoogleConsent(consent) {
  const { analytics, marketing } = normalize(consent)
  return {
    ad_storage: marketing ? 'granted' : 'denied',
    ad_user_data: marketing ? 'granted' : 'denied',
    ad_personalization: marketing ? 'granted' : 'denied',
    analytics_storage: analytics ? 'granted' : 'denied',
  }
}

/** Melder valget til Google Tag Manager. */
export function pushConsentUpdate(consent) {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []
  // Samme funksjonssignatur som gtag-snutten i _document.jsx: argumentene må
  // pushes som `arguments`, ikke som en array.
  function gtag() {
    window.dataLayer.push(arguments)
  }

  gtag('consent', 'update', toGoogleConsent(consent))
  window.dataLayer.push({
    event: 'consent_update',
    consent_analytics: consent.analytics ? 'granted' : 'denied',
    consent_marketing: consent.marketing ? 'granted' : 'denied',
  })
}

/** Lagrer valget, varsler GTM og resten av appen. */
export function saveConsent(consent) {
  const saved = writeConsent(consent)
  pushConsentUpdate(saved)
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: saved }))
  return saved
}

/** Åpner samtykkevalget igjen – brukes av lenken i bunnteksten. */
export function openConsentSettings() {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent(CONSENT_OPEN_EVENT))
}
