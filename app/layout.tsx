import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import React from 'react'

// Using system fonts instead of Google Fonts to avoid download errors

export const metadata: Metadata = {
  title: 'The Kids Hub - Food & Community Services',
  description: 'Empowering communities through artisanal cakes & pastries, eco-friendly catering, and mentorship programs for young entrepreneurs in Tonga.',
  keywords: 'Tonga, cakes, pastries, catering, organic food, community mentorship, entrepreneurship, Web3, crypto payments',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
    shortcut: '/logo.png',
  },
  manifest: '/manifest.json',
  applicationName: 'The Kids Hub',
  authors: [{ name: 'The Kids Hub' }],
  creator: 'The Kids Hub',
  publisher: 'The Kids Hub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
