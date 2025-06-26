'use client'

import React from 'react'
import { createConfig, WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { http } from 'viem'
import { arbitrum, arbitrumGoerli, mainnet, localhost } from 'wagmi/chains'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ConnectKitProvider } from 'connectkit'

// Create a wagmi config
const config = createConfig({
  chains: [arbitrum, arbitrumGoerli, mainnet, localhost],
  transports: {
    [arbitrum.id]: http(),
    [arbitrumGoerli.id]: http(),
    [mainnet.id]: http(),
    [localhost.id]: http(),
  },
})

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>
          {children}
          <ToastContainer 
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
