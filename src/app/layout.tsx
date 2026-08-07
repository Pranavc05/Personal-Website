import type { Metadata } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Mono, Source_Serif_4 } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { RecruitingBanner } from '@/components/RecruitingBanner'

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-source-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://personal-website-seven-theta-80.vercel.app'),
  title: 'Pranav Chandrasekhar — Software/AI Engineer',
  description: 'Applied AI engineer at Indiana University building education and product systems — KAI, PAWS, AutoSlate, and more. Open to Fall 2026 internships and new grad 2027.',
  keywords: ['Pranav Chandrasekhar', 'AI Engineer', 'Full Stack Developer', 'Indiana University', 'KAI', 'PAWS', 'AutoSlate', 'DocuSynth'],
  authors: [{ name: 'Pranav Chandrasekhar' }],
  creator: 'Pranav Chandrasekhar',
  openGraph: {
    title: 'Pranav Chandrasekhar — Software/AI Engineer',
    description: 'Applied AI engineer building education and product systems. Open to Fall 2026 internships and new grad 2027.',
    url: 'https://pranav-portfolio-theta.vercel.app',
    siteName: 'Pranav Chandrasekhar Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pranav Chandrasekhar — Software/AI Engineer',
    description: 'Applied AI engineer building education and product systems. Open to Fall 2026 internships and new grad 2027.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${plex.variable} ${plexMono.variable} ${sourceSerif.variable}`}
      suppressHydrationWarning
    >
      <body className={`${plex.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <div className="min-h-screen bg-cream-100 dark:bg-ink-800 text-ink-700 dark:text-cream-100">
            <Header />
            <RecruitingBanner />
            <main className="pt-28 sm:pt-[6.75rem]">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
