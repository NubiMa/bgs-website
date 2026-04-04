import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const SITE_URL = 'https://bgssidoarjo.vercel.app'
const FONT_URL = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'BGS Sidoarjo — Barisan Generasi Sepur',
  description: 'BGS Sidoarjo adalah komunitas railfans dan relawan kereta api di Kabupaten Sidoarjo, diakui oleh PT KAI. Aktif dalam edukasi perkeretaapian, keselamatan perlintasan, dan kegiatan sosial.',
  keywords: 'BGS Sidoarjo, Barisan Generasi Sepur, railfans Sidoarjo, komunitas kereta api Sidoarjo, DAOP 8, relawan kereta api, keselamatan perlintasan',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BGS Sidoarjo — Barisan Generasi Sepur',
    description: 'Komunitas railfans dan relawan kereta api Sidoarjo yang diakui PT KAI. Aktif dalam edukasi, keselamatan perlintasan, dan kegiatan sosial.',
    type: 'website',
    url: SITE_URL,
    siteName: 'BGS Sidoarjo',
    images: [
      {
        url: '/images/bgs-profile.webp',
        width: 1200,
        height: 630,
        alt: 'BGS Sidoarjo — Barisan Generasi Sepur Komunitas Kereta Api',
      },
    ],
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BGS Sidoarjo — Barisan Generasi Sepur',
    description: 'Komunitas railfans dan relawan kereta api di Sidoarjo. Diakui PT KAI.',
    images: ['/images/bgs-profile.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Barisan Generasi Sepur Sidoarjo',
  alternateName: 'BGS Sidoarjo',
  url: SITE_URL,
  logo: `${SITE_URL}/images/bgs-logo.png`,
  description: 'Komunitas sosial penggemar kereta api dari Kabupaten Sidoarjo, wilayah DAOP 8 Surabaya, yang aktif dalam edukasi perkeretaapian dan keselamatan perlintasan.',
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
    contactType: 'customer support',
  },
  sameAs: [
    'https://www.instagram.com/bgs.sidoarjo/',
    'https://www.tiktok.com/@bgs.sidoarjo',
    'https://www.facebook.com/bgs.sidoarjo',
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
