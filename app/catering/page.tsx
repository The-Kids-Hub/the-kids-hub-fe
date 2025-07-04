'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'
import { getImagePath } from '@/app/utils/imageLoader'

interface CateringItem {
  id: number
  name: string
  description: string
  price: number
  category: 'local-produce' | 'cuisine' | 'baked-goods'
  image: string
}

const CATERING_ITEMS: CateringItem[] = [
  {
    id: 1,
    name: 'Fresh Coconuts',
    description: 'Organic coconuts harvested from local farms, perfect for refreshing drinks.',
    price: 5.99,
    category: 'local-produce',
    image: '/images/coconut.jpg'
  },
  {
    id: 2,
    name: 'Tropical Fruit Platter',
    description: 'Selection of seasonal Tongan fruits including papaya, pineapple, and mango.',
    price: 35.99,
    category: 'local-produce',
    image: '/images/fruit-platter.jpg'
  },
  {
    id: 3,
    name: 'Ota Ika (Raw Fish Salad)',
    description: 'Fresh fish marinated in coconut milk and citrus, a traditional Tongan delicacy.',
    price: 24.99,
    category: 'cuisine',
    image: '/images/ota-ika.jpg'
  },
  {
    id: 4,
    name: 'Lu Pulu (Corned Beef and Taro Leaves)',
    description: 'Corned beef and onions wrapped in taro leaves and cooked in coconut cream.',
    price: 28.99,
    category: 'cuisine',
    image: '/images/lu-pulu.jpg'
  },
  {
    id: 5,
    name: 'Coconut Bread',
    description: 'Freshly baked bread with coconut flavor, a local favorite.',
    price: 12.99,
    category: 'baked-goods',
    image: '/images/coconut-bread.jpg'
  },
  {
    id: 6,
    name: 'Tongan Vanilla Cake',
    description: 'Delicious cake made with local Tongan vanilla, perfect for celebrations.',
    price: 45.99,
    category: 'baked-goods',
    image: '/images/vanilla-cake.jpg'
  },
]

export default function CateringPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [orderItems, setOrderItems] = useState<{[key: number]: number}>({})
  
  const filteredItems = activeCategory === 'all' 
    ? CATERING_ITEMS 
    : CATERING_ITEMS.filter(item => item.category === activeCategory)
    
  const addToOrder = (itemId: number) => {
    setOrderItems(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }))
  }
  
  const removeFromOrder = (itemId: number) => {
    if (!orderItems[itemId]) return
    
    setOrderItems(prev => {
      const newItems = {...prev}
      if (newItems[itemId] > 1) {
        newItems[itemId] -= 1
      } else {
        delete newItems[itemId]
      }
      return newItems
    })
  }
  
  const orderTotal = Object.entries(orderItems).reduce((total, [itemId, quantity]) => {
    const item = CATERING_ITEMS.find(i => i.id === parseInt(itemId))
    return total + (item?.price || 0) * quantity
  }, 0)
  
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      <div className="bg-tonga-red text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Catering Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Experience authentic Tongan cuisine with our catering options.
            From local produce to traditional dishes and freshly baked goods,
            we offer complete catering solutions for your eco-tourism adventure.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          <button 
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full ${
              activeCategory === 'all' 
                ? 'bg-tonga-red text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            } transition-colors`}
          >
            All Items
          </button>
          <button 
            onClick={() => setActiveCategory('local-produce')}
            className={`px-4 py-2 rounded-full ${
              activeCategory === 'local-produce' 
                ? 'bg-tonga-red text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            } transition-colors`}
          >
            Local Produce
          </button>
          <button 
            onClick={() => setActiveCategory('cuisine')}
            className={`px-4 py-2 rounded-full ${
              activeCategory === 'cuisine' 
                ? 'bg-tonga-red text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            } transition-colors`}
          >
            Traditional Cuisine
          </button>
          <button 
            onClick={() => setActiveCategory('baked-goods')}
            className={`px-4 py-2 rounded-full ${
              activeCategory === 'baked-goods' 
                ? 'bg-tonga-red text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            } transition-colors`}
          >
            Baked Goods
          </button>
        </div>
        
        {/* Catering Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image 
                  src={getImagePath(item.image)}
                  alt={item.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <span className="text-tonga-red font-medium">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <button 
                      onClick={() => removeFromOrder(item.id)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center"
                      disabled={!orderItems[item.id]}
                    >
                      -
                    </button>
                    <span className="mx-3 w-4 text-center">
                      {orderItems[item.id] || 0}
                    </span>
                    <button 
                      onClick={() => addToOrder(item.id)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                  
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">
                      {item.category === 'local-produce' ? 'Local Produce' : 
                       item.category === 'cuisine' ? 'Traditional Cuisine' : 'Baked Goods'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Order Summary */}
        {Object.keys(orderItems).length > 0 && (
          <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Catering Order</h2>
            
            <div className="divide-y divide-gray-200">
              {Object.entries(orderItems).map(([itemId, quantity]) => {
                const item = CATERING_ITEMS.find(i => i.id === parseInt(itemId))
                if (!item) return null
                
                return (
                  <div key={itemId} className="py-3 flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500">${item.price.toFixed(2)} x {quantity}</p>
                    </div>
                    <p className="font-medium text-gray-800">${(item.price * quantity).toFixed(2)}</p>
                  </div>
                )
              })}
              
              <div className="py-3 flex justify-between items-center font-bold text-lg">
                <p>Total</p>
                <p>${orderTotal.toFixed(2)}</p>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button className="bg-tonga-red hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition-colors">
                Request Catering
              </button>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </main>
  )
}
