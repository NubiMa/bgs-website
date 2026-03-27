import './globals.css'

export const metadata = {
  title: 'BGS Sidoarjo — Barisan Generasi Sepur',
  description: 'Komunitas Railfans Sidoarjo yang diakui PT KAI. Bergabunglah bersama kami dalam edukasi, keselamatan kereta api, dan kegiatan sosial.',
  keywords: 'BGS Sidoarjo, Barisan Generasi Sepur, railfans, komunitas kereta api, DAOP 8, Sidoarjo',
  openGraph: {
    title: 'BGS Sidoarjo — Barisan Generasi Sepur',
    description: 'Komunitas Railfans Sidoarjo yang diakui PT KAI.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
