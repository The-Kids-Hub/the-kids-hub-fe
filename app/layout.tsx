import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import React from 'react'
import { getImagePath } from './utils/imageLoader'

// Using system fonts instead of Google Fonts to avoid download errors

export const metadata: Metadata = {
  title: 'The Kids Hub - Eco-Tourism Tours',
  description: 'Experience authentic Tongan culture through eco-tourism with The Kids Hub. Island tours, traditional experiences, and local cuisine.',
  keywords: 'Tonga, eco-tourism, island tours, traditional culture, local cuisine, Web3, crypto payments',
  icons: {
    icon: getImagePath('/favicon.ico'),
    apple: getImagePath('/logo.png'),
  },
  manifest: getImagePath('/manifest.json'),
  applicationName: 'The Kids Hub Eco-Tourism',
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
