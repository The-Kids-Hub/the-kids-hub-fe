'use client'

import React from 'react'
import Image from 'next/image'
import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'
import { TourCard } from '@/app/components/tour-card'
import { getImagePath } from '@/app/utils/imageLoader'

// Define our tours data
const TOURS = [
  {
    id: 1,
    title: "Historical Sites Tour",
    description: "Explore ancient Tongan landmarks and learn about their historical significance. Visit archaeological sites and hear stories about Tongan monarchy and traditions.",
    price: 99.99,
    imageSrc: "/images/historical-tour.jpg",
    duration: "Full day (8 hours)",
    maxParticipants: 12,
    included: ["Transportation", "Lunch", "Guide", "Entrance fees"]
  },
  {
    id: 2,
    title: "Village Experience",
    description: "Immerse yourself in traditional Tongan village life and participate in daily activities. Learn basket weaving, tapa making, and experience a traditional kava ceremony.",
    price: 89.99,
    imageSrc: "/images/village-tour.jpg",
    duration: "Half day (5 hours)",
    maxParticipants: 10,
    included: ["Transportation", "Traditional lunch", "Craft materials", "Guide"]
  },
  {
    id: 3,
    title: "Culinary Adventure",
    description: "Learn to prepare traditional Tongan dishes using local ingredients and techniques. Visit local markets, cook with a Tongan chef, and enjoy your culinary creations.",
    price: 119.99,
    imageSrc: "/images/culinary-tour.jpg",
    duration: "Half day (4 hours)",
    maxParticipants: 8,
    included: ["Market visit", "All ingredients", "Cooking class", "Meal", "Recipe book"]
  },
  {
    id: 4,
    title: "Island Snorkeling",
    description: "Discover the vibrant marine life around Tonga's pristine coral reefs. Perfect for beginners and experienced snorkelers alike.",
    price: 79.99,
    imageSrc: "/images/snorkeling-tour.jpg",
    duration: "Half day (4 hours)",
    maxParticipants: 8,
    included: ["Boat transfer", "Snorkeling equipment", "Guide", "Refreshments"]
  },
  {
    id: 5,
    title: "Cultural Performance",
    description: "Experience the power and beauty of traditional Tongan dance and music performances, including the famous Lakalaka dance.",
    price: 49.99,
    imageSrc: "/images/cultural-tour.jpg",
    duration: "Evening (3 hours)",
    maxParticipants: 30,
    included: ["Traditional dinner", "Performance", "Transportation"]
  },
  {
    id: 6,
    title: "Whale Watching",
    description: "Witness the majestic humpback whales during their migration season. Tonga is one of the few places where you can swim with these gentle giants (seasonal).",
    price: 149.99,
    imageSrc: "/images/whale-tour.jpg",
    duration: "Full day (6 hours)",
    maxParticipants: 8,
    included: ["Boat trip", "Guide", "Snacks", "Safety equipment"]
  }
];

export default function ToursPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      {/* Hero Banner */}
      <div className="bg-tonga-red text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Island Tours</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover authentic Tongan experiences with our carefully crafted eco-tourism tours.
            From historical sites to immersive cultural activities, we offer something for everyone.
          </p>
        </div>
      </div>
      
      {/* Tours Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOURS.map(tour => (
            <TourCard
              key={tour.id}
              title={tour.title}
              description={tour.description}
              price={tour.price}
              imageSrc={tour.imageSrc}
              tourId={tour.id}
            />
          ))}
        </div>
        
        {/* Additional Information */}
        <div className="mt-16 bg-gray-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Tour Information</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Bookings</h3>
              <p className="text-gray-700">
                Tours can be booked online or by contacting us directly. We recommend booking at least 3 days in advance.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg">Payment Methods</h3>
              <p className="text-gray-700">
                We accept cryptocurrency payments (ETH) as well as traditional payment methods including credit/debit cards.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg">Cancellation Policy</h3>
              <p className="text-gray-700">
                Free cancellation up to 24 hours before the tour. Cancellations within 24 hours may be subject to a fee.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
