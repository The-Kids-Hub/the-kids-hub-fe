import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'
import { TourCard } from '@/app/components/tour-card'
import { getImagePath } from '@/app/utils/imageLoader'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      
      {/* Hero Section */}
      <div className="relative w-full h-[600px]">
        <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Experience Authentic Tongan Culture</h1>
          <p className="text-xl text-white mb-8 max-w-3xl">
            Join our eco-tourism island tours featuring historical sites, 
            traditional communal island life, and authentic Tongan cuisine
          </p>
          <Link href="/tours" className="bg-pasifika-green hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
            View Our Tours
          </Link>
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* About Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">The Kids Hub</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connecting visitors with authentic Tongan experiences while preserving 
              our cultural heritage and natural environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-pasifika-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598-.542 1.865-1.345l.215-.688c.082-.264.378-.39.63-.25l.006.003c.252.14.532.021.683-.236.145-.255.096-.563-.137-.75l-.341-.55a2.25 2.25 0 01-.429-2.965l.35-.647a1.5 1.5 0 00-.259-1.78l-.223-.223a.75.75 0 01-.219-.53v-.414" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cultural Immersion</h3>
              <p className="text-gray-600">Experience traditional Tongan village life, crafts, and customs firsthand.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-pasifika-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly Tours</h3>
              <p className="text-gray-600">Sustainable practices that support conservation of Tonga's natural beauty.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-pasifika-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Traditional Cuisine</h3>
              <p className="text-gray-600">Taste authentic Tongan dishes made with locally-sourced ingredients.</p>
            </div>
          </div>
        </section>

        {/* Featured Tours Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Featured Tours</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular eco-tourism experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TourCard 
              title="Historical Sites Tour"
              description="Explore ancient Tongan landmarks and learn about their historical significance."
              price={99.99}
              imageSrc="/images/historical-tour.jpg"
              tourId={1}
            />
            
            <TourCard 
              title="Village Experience"
              description="Immerse yourself in traditional Tongan village life and participate in daily activities."
              price={89.99}
              imageSrc="/images/village-tour.jpg"
              tourId={2}
            />
            
            <TourCard 
              title="Culinary Adventure"
              description="Learn to prepare traditional Tongan dishes using local ingredients and techniques."
              price={119.99}
              imageSrc="/images/culinary-tour.jpg"
              tourId={3}
            />
          </div>
          
          <div className="text-center mt-10">
            <Link href="/tours" className="btn-primary">
              View All Tours
            </Link>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  )
}
