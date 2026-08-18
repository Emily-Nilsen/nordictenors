import { Head, Html, Main, NextScript } from 'next/document'

const themeScript = `
  let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)')

  function updateTheme(theme) {
    theme = theme ?? window.localStorage.theme ?? 'system'

    if (theme === 'dark' || (theme === 'system' && isDarkMode.matches)) {
      document.documentElement.classList.add('dark')
    } else if (theme === 'light' || (theme === 'system' && !isDarkMode.matches)) {
      document.documentElement.classList.remove('dark')
    }

    return theme
  }

  function updateThemeWithoutTransitions(theme) {
    updateTheme(theme)
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  document.documentElement.setAttribute('data-theme', updateTheme())

  new MutationObserver(([{ oldValue }]) => {
    let newValue = document.documentElement.getAttribute('data-theme')
    if (newValue !== oldValue) {
      try {
        window.localStorage.setItem('theme', newValue)
      } catch {}
      updateThemeWithoutTransitions(newValue)
    }
  }).observe(document.documentElement, { attributeFilter: ['data-theme'], attributeOldValue: true })

  isDarkMode.addEventListener('change', () => updateThemeWithoutTransitions())
`

// GTM-container fra mediebyrået. Container-ID-en er offentlig (den ligger i
// sidekilden hos alle besøkende), så den kan stå i koden. Kan overstyres med
// miljøvariabelen NEXT_PUBLIC_GTM_ID.
const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-5TZ97V5D'

// Google Consent Mode v2. Må kjøre før Google Tag Manager lastes, slik at
// ingen tagger kan lagre noe før besøkende har sagt ja. Cookie-navnet og
// versjonen må holdes i synk med utils/consent.js.
const consentModeScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  var stored = { analytics: false, marketing: false };
  try {
    var match = document.cookie.match(/(?:^|; )nt-consent=([^;]*)/);
    if (match) {
      var parsed = JSON.parse(decodeURIComponent(match[1]));
      if (parsed && parsed.v === 1) {
        stored.analytics = parsed.analytics === true;
        stored.marketing = parsed.marketing === true;
      }
    }
  } catch (e) {}

  gtag('consent', 'default', {
    ad_storage: stored.marketing ? 'granted' : 'denied',
    ad_user_data: stored.marketing ? 'granted' : 'denied',
    ad_personalization: stored.marketing ? 'granted' : 'denied',
    analytics_storage: stored.analytics ? 'granted' : 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500
  });

  gtag('set', 'ads_data_redaction', !stored.marketing);
  gtag('set', 'url_passthrough', true);
`

const gtmScript = `
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${gtmId}');
`

export default function Document() {
  return (
    <Html className="antialiased [font-feature-settings:'ss01']" lang="no">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: consentModeScript }} />
        {gtmId && <script dangerouslySetInnerHTML={{ __html: gtmScript }} />}
        <link
          rel="stylesheet"
          href="https://use.typekit.net/nii4mra.css"
        ></link>
      </Head>
      <body className="relative bg-white dark:bg-sky-950">
        {gtmId && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        )}
        <div className="absolute inset-0 dark:bg-zinc-950/70" />

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
