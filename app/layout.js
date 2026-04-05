import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const SITE_URL = 'https://www.bgssidoarjo.web.id'
const FONT_URL = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'BGS Sidoarjo — Barisan Generasi Sepur Sidoarjo',
  description: 'BGS Sidoarjo (Barisan Generasi Sepur) adalah komunitas railfans dan relawan kereta api di Kabupaten Sidoarjo, diakui oleh PT KAI. Aktif dalam edukasi perkeretaapian, keselamatan perlintasan, dan kegiatan sosial sejak 2020.',
  keywords: 'BGS Sidoarjo, BGS, Barisan Generasi Sepur, Barisan Generasi Sepur Sidoarjo, railfans Sidoarjo, komunitas kereta api Sidoarjo, DAOP 8, relawan kereta api, keselamatan perlintasan, komunitas railfan Indonesia',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BGS Sidoarjo — Barisan Generasi Sepur Sidoarjo',
    description: 'BGS Sidoarjo (Barisan Generasi Sepur) adalah komunitas railfans dan relawan kereta api Sidoarjo yang diakui PT KAI. Aktif dalam edukasi, keselamatan perlintasan, dan kegiatan sosial.',
    type: 'website',
    url: SITE_URL,
    siteName: 'BGS Sidoarjo',
    images: [
      {
        url: '/images/bgs-profile.webp',
        width: 1200,
        height: 630,
        alt: 'BGS Sidoarjo — Barisan Generasi Sepur Komunitas Kereta Api Sidoarjo',
      },
    ],
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BGS Sidoarjo — Barisan Generasi Sepur Sidoarjo',
    description: 'Komunitas railfans dan relawan kereta api di Sidoarjo. Diakui PT KAI.',
    images: ['/images/bgs-profile.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Barisan Generasi Sepur Sidoarjo',
  alternateName: ['BGS Sidoarjo', 'BGS', 'Barisan Generasi Sepur'],
  url: SITE_URL,
  logo: `${SITE_URL}/images/bgs-logo.png`,
  description: 'Komunitas sosial penggemar kereta api (railfans) dari Kabupaten Sidoarjo, wilayah DAOP 8 Surabaya, yang aktif dalam edukasi perkeretaapian, keselamatan perlintasan sebidang, dan kegiatan sosial. Diakui oleh PT KAI sejak 2020.',
  foundingDate: '2020',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Kabupaten Sidoarjo, Jawa Timur, Indonesia',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jalan Balai Desa, RT 12 RW 04, Dusun Buduran, Desa Buduran, Kecamatan Buduran',
    addressLocality: 'Sidoarjo',
    addressRegion: 'Jawa Timur',
    addressCountry: 'ID',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'komunitasbgs.sidoarjo@gmail.com',
    telephone: '+6281559691087',
    contactType: 'customer support',
    areaServed: 'ID',
    availableLanguage: 'Indonesian',
  },
  sameAs: [
    'https://www.instagram.com/bgs.sidoarjo/',
    'https://www.tiktok.com/@bgs.sidoarjo',
    'https://www.facebook.com/bgs.sidoarjo',
    'https://wa.me/6281559691087',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href={FONT_URL} />
        <link rel="stylesheet" href={FONT_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
