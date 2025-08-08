import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'
import { ServiceCard } from '@/app/components/service-card'
import { getImagePath } from '@/app/utils/imageLoader'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      
      {/* Hero Section */}
      <div className="relative w-full h-[600px]">
        <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Empowering Communities Through Food & Mentorship</h1>
          <p className="text-xl text-white mb-8 max-w-3xl">
            Discover our artisanal cakes & pastries, eco-friendly catering services, 
            and community programs that mentor young entrepreneurs in Tonga
          </p>
          <Link href="/services" className="bg-pasifika-green hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
            Explore Our Services
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
              Nurturing community growth through delicious food, sustainable practices, 
              and empowering the next generation of Tongan entrepreneurs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-pasifika-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Artisanal Cakes & Pastries</h3>
              <p className="text-gray-600">Handcrafted desserts using traditional Tongan flavors and premium local ingredients.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-pasifika-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly Catering</h3>
              <p className="text-gray-600">Sustainable catering services using organic, locally-sourced Tongan produce and cuisine.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-pasifika-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Mentorship</h3>
              <p className="text-gray-600">Empowering school leavers and unemployed youth to become successful entrepreneurs.</p>
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we're building community through food and mentorship
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Artisanal Cakes & Pastries"
              description="Handcrafted desserts featuring traditional Tongan flavors and premium local ingredients."
              price={0}
              imageSrc="/images/cakes-pastries.jpg"
              serviceId={1}
              category="bakery"
            />
            
            <ServiceCard 
              title="Eco-Friendly Catering"
              description="Sustainable catering services using organic, locally-sourced produce and authentic Tongan cuisine."
              price={0}
              imageSrc="/images/eco-catering.jpg"
              serviceId={2}
              category="catering"
            />
            
            <ServiceCard 
              title="Community Mentorship Program"
              description="Empowering school leavers and unemployed youth with entrepreneurship skills and business mentoring."
              price={0}
              imageSrc="/images/mentorship.jpg"
              serviceId={3}
              category="community"
            />
          </div>
          
          <div className="text-center mt-10">
            <Link href="/services" className="bg-pasifika-green hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
              Learn More About Our Services
            </Link>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  )
}
