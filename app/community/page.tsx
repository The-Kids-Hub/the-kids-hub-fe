'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'
import { getImagePath } from '@/app/utils/imageLoader'
import { toast } from 'react-toastify'

export default function CommunityPage() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    goals: '',
    availability: '',
    motivation: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate application submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast.success('Application submitted successfully! We will contact you within 48 hours.')
      
      // Reset form
      setFormData({
        name: '',
        age: '',
        email: '',
        phone: '',
        education: '',
        experience: '',
        goals: '',
        availability: '',
        motivation: ''
      })
    } catch (error) {
      console.error('Application error:', error)
      toast.error('There was an error submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      
      {/* Hero Section */}
      <div className="relative w-full h-[600px]">
        <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Community Mentorship Program</h1>
          <p className="text-xl text-white mb-8 max-w-3xl">
            Empowering school leavers and unemployed youth in Tonga with entrepreneurship skills, 
            business mentoring, and practical training to build successful enterprises.
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

      <div className="container mx-auto px-4 py-16">
        {/* Program Overview */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Breaking the Cycle, Building Futures</h2>
              <p className="text-gray-700 mb-4">
                Our Community Mentorship Program specifically targets the "Mis-Fits" - young Tongans who 
                left school without opportunities for further formal education and are currently unemployed. 
                We believe every young person deserves a chance to succeed.
              </p>
              <p className="text-gray-700 mb-6">
                Through comprehensive training, one-on-one mentoring, and ongoing support, we help 
                participants develop the skills and confidence needed to start their own businesses 
                and contribute meaningfully to their communities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pasifika-blue mb-2">100% Free Program</h4>
                  <p className="text-sm text-gray-600">No cost to participants - funded by our food services</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pasifika-blue mb-2">6-Month Duration</h4>
                  <p className="text-sm text-gray-600">Comprehensive training with ongoing support</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pasifika-blue mb-2">Personal Mentoring</h4>
                  <p className="text-sm text-gray-600">One-on-one guidance from successful entrepreneurs</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pasifika-blue mb-2">Practical Training</h4>
                  <p className="text-sm text-gray-600">Hands-on experience in real business scenarios</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-96">
              <Image 
                src={getImagePath("/images/community-mentorship.jpg")}
                alt="Community Mentorship Program"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-pasifika-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Business Skills Training</h3>
              <p className="text-gray-600">Learn essential business fundamentals including planning, finance, marketing, and operations management.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-pasifika-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personal Mentoring</h3>
              <p className="text-gray-600">Work directly with experienced entrepreneurs who provide guidance, support, and real-world insights.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-pasifika-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Practical Workshops</h3>
              <p className="text-gray-600">Hands-on training in our food service operations, learning real business skills through actual work experience.</p>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Apply for the Program</h2>
          
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pasifika-orange"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="age">
                  Age *
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pasifika-orange"
                  value={formData.age}
                  onChange={handleInputChange}
                  min="16"
                  max="35"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pasifika-orange"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pasifika-orange"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="education">
                Educational Background *
              </label>
              <select
                id="education"
                name="education"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pasifika-orange"
                value={formData.education}
                onChange={handleInputChange}
                required
              >
                <option value="">Select your highest education level</option>
                <option value="primary">Primary School</option>
                <option value="secondary-incomplete">Secondary School (Incomplete)</option>
                <option value="secondary-complete">Secondary School (Complete)</option>
                <option value="vocational">Vocational Training</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="experience">
                Work Experience (if any)
              </label>
              <textarea
                id="experience"
                name="experience"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pasifika-orange"
                rows={3}
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="Describe any work experience, including informal jobs, volunteering, or helping family businesses..."
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="goals">
                Entrepreneurial Goals *
              </label>
              <textarea
                id="goals"
                name="goals"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pasifika-orange"
                rows={4}
                value={formData.goals}
                onChange={handleInputChange}
                placeholder="What kind of business would you like to start? What are your dreams and goals?"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="availability">
                Availability *
              </label>
              <select
                id="availability"
                name="availability"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pasifika-orange"
                value={formData.availability}
                onChange={handleInputChange}
                required
              >
                <option value="">Select your availability</option>
                <option value="full-time">Full-time (Monday-Friday)</option>
                <option value="part-time">Part-time (Flexible schedule)</option>
                <option value="weekends">Weekends only</option>
                <option value="evenings">Evenings only</option>
              </select>
            </div>
            
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="motivation">
                Why do you want to join this program? *
              </label>
              <textarea
                id="motivation"
                name="motivation"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pasifika-orange"
                rows={4}
                value={formData.motivation}
                onChange={handleInputChange}
                placeholder="Tell us about your motivation, challenges you've faced, and how this program can help you..."
                required
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-pasifika-green hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md transition-colors flex items-center mx-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting Application...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </div>
          </form>
        </section>
      </div>
      
      <Footer />
    </main>
  )
}
