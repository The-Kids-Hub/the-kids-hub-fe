import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      
      <div className="flex flex-col items-center justify-center flex-1 px-4 py-12 text-center">
        <div className="mb-8">
          <Image 
            src="/logo.png"
            alt="The Kids Hub Logo"
            width={180}
            height={120}
            className="h-32 w-auto"
          />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Page Currently Under Development
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-lg">
          We're working hard to bring you this content. Please check back soon!
        </p>
        
        <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md">
          <p className="text-gray-700 mb-4">
            In the meantime, you can return to our homepage or explore our available sections.
          </p>
          
          <Link href="/" className="btn-primary inline-block">
            Return to Homepage
          </Link>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
