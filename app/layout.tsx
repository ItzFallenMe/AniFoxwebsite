import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AniFox | Minimalist Anime Client',
  description: 'A modern, open-source anime client for Android, Windows, Linux, and macOS. No ads, no trackers, pure data sovereignty. Syncs with AniList, MyAnimeList, and Simkl.',
  keywords: ['anime', 'anifox', 'open source', 'anime client', 'anilist', 'myanimelist', 'simkl', 'flutter'],
  authors: [{ name: 'ItzFallenMe' }],
  creator: 'ItzFallenMe',
  publisher: 'ItzFallenMe',
  robots: 'index, follow',
  openGraph: {
    title: 'AniFox | Minimalist Anime Client',
    description: 'A modern, open-source anime client for Android, Windows, Linux, and macOS.',
    type: 'website',
    locale: 'en_US',
    url: 'https://anifox.app',
    siteName: 'AniFox',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AniFox - Minimalist Anime Client',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AniFox | Minimalist Anime Client',
    description: 'A modern, open-source anime client for Android, Windows, Linux, and macOS.',
    images: ['/og-image.png'],
    creator: '@itzfallenme',
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-dark-bg text-white antialiased">
        <div className="relative overflow-hidden">
          <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" />
          <div className="fixed inset-0 bg-gradient-radial from-anifox-900/10 via-transparent to-transparent pointer-events-none z-0" />
          {children}
        </div>
      </body>
    </html>
  )
}