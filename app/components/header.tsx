'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        {/* Site Title - Centered */}
        <div className="flex justify-center mb-3">
          <Link href="/" className="flex items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black font-kristen tracking-wide">
              The Kids Hub
            </h1>
          </Link>
        </div>

        {/* Desktop Menu - Below title */}
        <nav className="hidden md:flex items-center justify-center space-x-8">
          <Link href="/" className="text-gray-800 font-medium hover:text-tonga-red transition-colors">
            Home
          </Link>
          <Link href="/tours" className="text-gray-800 font-medium hover:text-tonga-red transition-colors">
            Tours
          </Link>
          <Link href="/about" className="text-gray-800 font-medium hover:text-tonga-red transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-800 font-medium hover:text-tonga-red transition-colors">
            Contact
          </Link>
          <Link href="/bookings" className="text-gray-800 font-medium hover:text-tonga-red transition-colors">
            My Bookings
          </Link>
        </nav>

        {/* Mobile Menu Button - Positioned absolutely */}
        <button 
          className="md:hidden text-gray-600 absolute top-4 right-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-3 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-800 font-medium hover:text-tonga-red transition-colors">
              Home
            </Link>
            <Link href="/tours" className="text-gray-800 font-medium hover:text-tonga-red transition-colors">
              Tours
            </Link>
            <Link href="/about" className="text-gray-800 font-medium hover:text-tonga-red transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-800 font-medium hover:text-tonga-red transition-colors">
              Contact
            </Link>
            <Link href="/bookings" className="text-gray-800 font-medium hover:text-tonga-red transition-colors">
              My Bookings
            </Link>
            
            {/* Removed wallet connect button from mobile menu */}
          </nav>
        </div>
      )}
    </header>
  )
}
