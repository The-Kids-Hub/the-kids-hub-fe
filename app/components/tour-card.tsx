'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useAccount } from 'wagmi'
import { ConnectKitButton } from 'connectkit'
import { toast } from 'react-toastify'

interface TourCardProps {
  title: string
  description: string
  price: number
  imageSrc: string
  tourId: number
}

export function TourCard({ title, description, price, imageSrc, tourId }: TourCardProps) {
  const { isConnected } = useAccount()
  const [isBooking, setIsBooking] = useState(false)
  
  const handleBookNow = async () => {
    if (!isConnected) {
      toast.info('Please connect your wallet to book this tour')
      return
    }
    
    setIsBooking(true)
    try {
      // Here we would integrate with the TourBooking contract
      // This is a placeholder for the Web3 integration
      toast.success(`Tour booking initiated: ${title}`)
      
      // Navigate to booking page with tour ID
      window.location.href = `/booking?tourId=${tourId}`
    } catch (error) {
      console.error('Booking error:', error)
      toast.error('There was an error processing your booking. Please try again.')
    } finally {
      setIsBooking(false)
    }
  }
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image 
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform hover:scale-110"
        />
        <div className="absolute top-0 right-0 bg-tonga-red text-white px-3 py-1 rounded-bl-lg font-medium">
          ${price.toFixed(2)}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {/* Actions */}
        <div className="flex justify-between items-center">
          <Link 
            href={`/tours/${tourId}`}
            className="text-pasifika-blue hover:text-blue-700 font-medium transition-colors"
          >
            View Details
          </Link>
          
          {isConnected ? (
            <button
              onClick={handleBookNow}
              disabled={isBooking}
              className="bg-tonga-red hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors flex items-center"
            >
              {isBooking ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                'Book Now'
              )}
            </button>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  )
}
