import { Callout } from '@/components/Callout'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'
import { Video, Videos } from '@/components/Videos'
import { Category, Categories } from '@/components/Categories'
import { FeatureImage, Images } from '@/components/Images'
import { Jubileum } from '@/components/Jubileum'
import { Christmas } from '@/components/Christmas'
import { Februar } from '@/components/Februar'
import { Mars } from '@/components/Mars'
import { November } from '@/components/November'
import { Desember } from '@/components/Desember'
import CurrentYear from '@/components/CurrentYear'
import { Contact } from '@/components/Contact'
import { Nyhetsbrev } from '@/components/Nyhetsbrev'
import { AudioSample } from '@/components/AudioSample'
import { GoBackButton } from '@/components/GoBackButton'
import { Socials } from '@/components/Socials'
import { Map } from '@/components/Map'
import { Billetter } from '@/components/Billetter'
import { JubiluemBilletter } from '@/components/JubileumBilletter'
import { ConcertDetails } from '@/components/ConcertDetails'
import { ConcertHeader } from '@/components/ConcertHeader'
import { ConcertIntroduction } from '@/components/ConcertIntroduction'
import { JubileumIntroduction } from '@/components/JubileumIntroduction'
import { ExternalLink } from '@/components/ExternalLink'
import { Reviews } from '@/components/Reviews'
import { CalendarText } from '@/components/CalendarText'
import { HomepageText } from '@/components/HomepageText'
import { getConcertYearWord } from '../../utils/getConcertYearWord'
import { ContactInfo } from '@/components/ContactInfo'

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  'concert-year': {
    selfClosing: true,
    render: () => {
      const word = getConcertYearWord()
      return <>{word}</>
    },
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  'quick-links': {
    render: QuickLinks,
  },
  'quick-link': {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },

  billetter: {
    selfClosing: true,
    render: Billetter,
    attributes: {
      concert: { type: String },
      outlet: { type: String },
      ticketUrl: { type: String },
    },
  },
  'jubileum-billetter': {
    selfClosing: true,
    render: JubiluemBilletter,
    attributes: {
      concert: { type: String },
      outlet: { type: String },
      ticketUrl: { type: String },
    },
  },
  'concert-details': {
    selfClosing: true,
    render: ConcertDetails,
    attributes: {
      concert: { type: String },
      day: { type: String },
      date: { type: String },
      month: { type: String },
      location: { type: String },
      time: { type: String },
    },
  },
  'concert-header': {
    selfClosing: true,
    render: ConcertHeader,
    attributes: {
      day: { type: String },
      date: { type: String },
      month: { type: String },
      time: { type: String },
      ticketUrl: { type: String },
    },
  },
  'jubileum-introduction': {
    selfClosing: true,
    render: JubileumIntroduction,
    attributes: {
      day: { type: String },
      location: { type: String },
      date: { type: String },
      month: { type: String },
    },
  },
  'concert-introduction': {
    selfClosing: true,
    render: ConcertIntroduction,
    attributes: {
      day: { type: String },
      location: { type: String },
      date: { type: String },
      month: { type: String },
    },
  },
  categories: {
    render: Categories,
  },
  category: {
    selfClosing: true,
    render: Category,
    attributes: {
      title: { type: String },
      imageUrl: { type: String },
    },
  },
  images: {
    render: Images,
  },
  'feature-image': {
    selfClosing: true,
    render: FeatureImage,
    attributes: {
      title: { type: String },
      imageUrl: { type: String },
    },
  },
  'contact-info': {
    selfClosing: true,
    render: ContactInfo,
  },
  contact: {
    selfClosing: true,
    render: Contact,
  },
  nyhetsbrev: {
    selfClosing: true,
    render: Nyhetsbrev,
  },
  reviews: {
    selfClosing: true,
    render: Reviews,
  },
  videos: {
    render: Videos,
  },
  video: {
    selfClosing: true,
    render: Video,
    attributes: {
      title: { type: String },
      description: { type: String },
      href: { type: String },
      posterImg: { type: String },
    },
  },
  christmas: {
    selfClosing: true,
    render: Christmas,
  },
  jubileum: {
    selfClosing: true,
    render: Jubileum,
  },
  februar: {
    selfClosing: true,
    render: Februar,
  },
  mars: {
    selfClosing: true,
    render: Mars,
  },
  november: {
    selfClosing: true,
    render: November,
  },
  desember: {
    selfClosing: true,
    render: Desember,
  },
  'calendar-text': {
    selfClosing: true,
    render: CalendarText,
  },
  'homepage-text': {
    selfClosing: true,
    render: HomepageText,
  },
  'current-year': {
    selfClosing: true,
    render: CurrentYear,
  },
  socials: {
    selfClosing: true,
    render: Socials,
  },
  'go-back-button': {
    selfClosing: true,
    render: GoBackButton,
  },
  'audio-sample': {
    selfClosing: true,
    render: AudioSample,
    attributes: {
      title: { type: String },
      description: { type: String },
      audioUrl: { type: String },
    },
  },
  map: {
    selfClosing: true,
    render: Map,
    attributes: {
      src: { type: String },
    },
  },
  'external-link': {
    selfClosing: true,
    render: ExternalLink,
    attributes: {
      href: { type: String },
      children: { type: String },
    },
  },
}

export default tags
