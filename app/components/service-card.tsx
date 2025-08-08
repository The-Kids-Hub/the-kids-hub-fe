'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useAccount } from 'wagmi'
import { ConnectKitButton } from 'connectkit'
import { toast } from 'react-toastify'
import { getImagePath } from '@/app/utils/imageLoader'

interface ServiceCardProps {
  title: string
  description: string
  price: number
  imageSrc: string
  serviceId: number
  category: 'bakery' | 'catering' | 'community'
}

export function ServiceCard({ title, description, price, imageSrc, serviceId, category }: ServiceCardProps) {
  const { isConnected } = useAccount()
  const [isProcessing, setIsProcessing] = useState(false)
  
  const handleOrderNow = async () => {
    if (category === 'community') {
      // For community services, redirect to contact/application
      window.location.href = `/community/apply?serviceId=${serviceId}`
      return
    }

    if (!isConnected && (category === 'bakery' || category === 'catering')) {
      toast.info('Please connect your wallet to place an order')
      return
    }
    
    setIsProcessing(true)
    try {
      toast.success(`Order initiated: ${title}`)
      
      // Navigate to booking page with service ID and category
      window.location.href = `/booking?serviceId=${serviceId}&category=${category}`
    } catch (error) {
      console.error('Order error:', error)
      toast.error('There was an error processing your order. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }
  
  const getCategoryLabel = () => {
    switch (category) {
      case 'bakery': return 'Cakes & Pastries'
      case 'catering': return 'Catering Service'
      case 'community': return 'Community Program'
      default: return 'Service'
    }
  }

  const getActionButton = () => {
    if (category === 'community') {
      return (
        <button
          onClick={handleOrderNow}
          disabled={isProcessing}
          className="bg-pasifika-orange hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors flex items-center"
        >
          {isProcessing ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            'Apply Now'
          )}
        </button>
      )
    }

    if (isConnected) {
      return (
        <button
          onClick={handleOrderNow}
          disabled={isProcessing}
          className="bg-tonga-red hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors flex items-center"
        >
          {isProcessing ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            'Order Now'
          )}
        </button>
      )
    }

    return (
      <ConnectKitButton.Custom>
        {({ show }) => (
          <button
            onClick={show}
            className="bg-tonga-red hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Connect Wallet
          </button>
        )}
      </ConnectKitButton.Custom>
    )
  }
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image 
          src={getImagePath(imageSrc)}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform hover:scale-110"
        />
        <div className="absolute top-0 right-0 bg-tonga-red text-white px-3 py-1 rounded-bl-lg font-medium">
          {price === 0 ? (category === 'community' ? 'FREE' : 'Coming Soon') : `$${price.toFixed(2)}`}
        </div>
        <div className="absolute bottom-0 left-0 bg-black/70 text-white px-3 py-1 rounded-tr-lg text-sm">
          {getCategoryLabel()}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {/* Actions */}
        <div className="flex justify-between items-center">
          <Link 
            href={`/services/${serviceId}`}
            className="text-pasifika-blue hover:text-blue-700 font-medium transition-colors"
          >
            Learn More
          </Link>
          
          {getActionButton()}
        </div>
      </div>
    </div>
  )
}
