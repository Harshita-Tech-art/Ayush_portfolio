import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ayush Tripathi - Startup Founder & AI Developer',
  description: 'Ayush Tripathi is a startup founder, AI developer, and technology builder. Founder of sitekraft.dev and devQBX.in, building innovative digital products and AI systems.',
  keywords: 'Ayush Tripathi, startup founder, AI developer, machine learning, web development, sitekraft, devQBX',
  authors: [{ name: 'Ayush Tripathi' }],
  openGraph: {
    title: 'Ayush Tripathi - Startup Founder & AI Developer',
    description: 'Building startups, AI products, and digital systems for the future.',
    url: 'https://tripathiayush.in',
    siteName: 'Ayush Tripathi',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayush Tripathi - Startup Founder & AI Developer',
    description: 'Building startups, AI products, and digital systems for the future.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Ayush Tripathi',
              url: 'https://tripathiayush.in',
              jobTitle: 'Startup Founder & AI Developer',
              description: 'Startup founder, AI developer, and technology builder',
              sameAs: [
                'https://www.linkedin.com/in/ayushtripathi00/',
                'https://github.com/AYUSHTRIPATHI0',
                'https://youtube.com/@realayush00',
                'https://instagram.com/ayush_tripthi'
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}