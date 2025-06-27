import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import React from 'react'
import { getImagePath } from './utils/imageLoader'

// Check if using the custom domain (for SSG we need to handle differently than CSR)
const isCustomDomain = process.env.NEXT_PUBLIC_CUSTOM_DOMAIN === 'true'

// Using system fonts instead of Google Fonts to avoid download errors

// Get base path based on domain type
const basePath = isCustomDomain ? '' : '/the-kids-hub-fe';

export const metadata: Metadata = {
  title: 'The Kids Hub - Eco-Tourism Tours',
  description: 'Experience authentic Tongan culture through eco-tourism with The Kids Hub. Island tours, traditional experiences, and local cuisine.',
  keywords: 'Tonga, eco-tourism, island tours, traditional culture, local cuisine, Web3, crypto payments',
  icons: {
    icon: `${basePath}/favicon.ico`,
    apple: `${basePath}/logo.png`,
  },
  manifest: `${basePath}/manifest.json`,
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
