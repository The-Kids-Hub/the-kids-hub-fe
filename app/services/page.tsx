'use client'

import React from 'react'
import Image from 'next/image'
import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'
import { ServiceCard } from '@/app/components/service-card'
import { getImagePath } from '@/app/utils/imageLoader'

// Define our services data
const SERVICES: Array<{
  id: number
  title: string
  description: string
  price: number
  imageSrc: string
  category: 'bakery' | 'catering' | 'community'
  features: string[]
}> = [
  {
    id: 1,
    title: "Artisanal Cakes & Pastries",
    description: "Handcrafted desserts featuring traditional Tongan flavors like coconut, vanilla, and tropical fruits. Made with premium local ingredients and traditional baking techniques.",
    price: 0,
    imageSrc: "/images/cakes-pastries.jpg",
    category: "bakery",
    features: ["Traditional Tongan flavors", "Premium local ingredients", "Custom designs available", "Fresh daily"]
  },
  {
    id: 2,
    title: "Eco-Friendly Catering Service",
    description: "Sustainable catering services using organic, locally-sourced Tongan produce. Featuring authentic island cuisine prepared with environmentally conscious practices.",
    price: 0,
    imageSrc: "/images/eco-catering.jpg",
    category: "catering",
    features: ["100% organic ingredients", "Local produce sourcing", "Zero waste practices", "Traditional recipes"]
  },
  {
    id: 3,
    title: "Community Mentorship Program",
    description: "Empowering school leavers and unemployed youth with entrepreneurship skills, business mentoring, and practical training to become successful entrepreneurs.",
    price: 0,
    imageSrc: "/images/mentorship.jpg",
    category: "community",
    features: ["Business skills training", "One-on-one mentoring", "Practical workshops", "Ongoing support"]
  }
];

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      
      {/* Hero Section */}
      <div className="relative w-full h-[600px]">
        <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-white mb-8 max-w-3xl">
            Discover our three core services: artisanal cakes & pastries, eco-friendly catering, 
            and community mentorship programs that empower young Tongan entrepreneurs.
          </p>
        </div>
        <div className="absolute inset-0">
          <Image 
            src={getImagePath("/logo.png")} 
            alt="The Kids Hub Logo" 
            fill 
            priority
            style={{objectFit: 'contain'}}
          />
        </div>
      </div>
      
      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(service => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              price={service.price}
              imageSrc={service.imageSrc}
              serviceId={service.id}
              category={service.category}
            />
          ))}
        </div>
        
        {/* Additional Information */}
        <div className="mt-16 bg-gray-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Service Information</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Orders & Applications</h3>
              <p className="text-gray-700">
                Food services can be ordered online with crypto payments. Community mentorship applications are processed within 48 hours. We recommend placing orders 2-3 days in advance.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg">Payment Methods</h3>
              <p className="text-gray-700">
                We accept cryptocurrency payments (Bitcoin (BTC) and Ethereum (ETH)) for food services, and traditional payment methods. Community programs are free of charge.
              </p>
              <div className="mt-2 flex items-center space-x-3">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Ethereum (ETH)</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Bitcoin (BTC)</span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Community Programs FREE</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg">Our Mission</h3>
              <p className="text-gray-700">
                We're committed to sustainable practices, supporting local farmers, and empowering young Tongans to build successful businesses and strengthen our community.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
