import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://pranav-portfolio-theta.vercel.app'),
  title: 'Pranav Chandrasekhar — AI Product Engineer',
  description: 'I build scalable backend systems, AI products, and polished front ends that deliver measurable impact. AutoSlate, DocuSynth, and Worksheet Generator are live proofs.',
  keywords: ['Pranav Chandrasekhar', 'AI Engineer', 'Full Stack Developer', 'Indiana University', 'AutoSlate', 'DocuSynth', 'Worksheet Generator'],
  authors: [{ name: 'Pranav Chandrasekhar' }],
  creator: 'Pranav Chandrasekhar',
  openGraph: {
    title: 'Pranav Chandrasekhar — AI Product Engineer',
    description: 'I build scalable backend systems, AI products, and polished front ends that deliver measurable impact.',
    url: 'https://pranav-portfolio-theta.vercel.app',
    siteName: 'Pranav Chandrasekhar Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pranav Chandrasekhar — AI Product Engineer',
    description: 'I build scalable backend systems, AI products, and polished front ends that deliver measurable impact.',
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <Header />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
