'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Header } from '@/app/components/header';
import { Footer } from '@/app/components/footer';
import { useKidsHubContracts } from '@/app/contracts/ContractHook';
import { useConnect, useAccount } from 'wagmi';
import { toast } from 'react-toastify';
import { getImagePath } from '@/app/utils/imageLoader';

interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  category: 'bakery' | 'catering' | 'community';
}

export default function BookingPage() {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get('serviceId');
  const category = searchParams.get('category') as 'bakery' | 'catering' | 'community' | null;
  const { connect, connectors } = useConnect();
  const { address, isConnected } = useAccount();
  const { bookTour, getTours, processPayment, isLoading } = useKidsHubContracts();
  
  const [service, setService] = useState<Service | null>(null);
  const [date, setDate] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [paymentMethod, setPaymentMethod] = useState<number>(0); // 0: ETH, 1: BTC, 2: Fiat (via credit card)
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [specialRequests, setSpecialRequests] = useState<string>('');
  
  useEffect(() => {
    // Load service information
    async function loadService() {
      if (!serviceId || !category) return;
      
      try {
        // Mock service data - in real app, this would come from API/contract
        const services: Record<string, Service> = {
          '1': { id: 1, name: 'Artisanal Cakes & Pastries', description: 'Handcrafted desserts with traditional Tongan flavors', price: 'Coming Soon', category: 'bakery' },
          '2': { id: 2, name: 'Eco-Friendly Catering Service', description: 'Sustainable catering with organic local produce', price: 'Coming Soon', category: 'catering' },
          '3': { id: 3, name: 'Community Mentorship Program', description: 'Entrepreneurship training for young Tongans', price: '0', category: 'community' }
        };
        
        const selectedService = services[serviceId as keyof typeof services];
        if (selectedService) {
          setService(selectedService);
        } else {
          toast.error('Service not found');
        }
      } catch (error) {
        console.error('Error loading service:', error);
        toast.error('Failed to load service information');
      }
    }
    
    loadService();
  }, [serviceId, category]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };
  
  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(parseInt(e.target.value));
  };
  
  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!service) {
      toast.error('Service information not loaded');
      return;
    }

    // Community programs don't require wallet connection
    if (service.category === 'community') {
      setIsProcessing(true);
      try {
        // Simulate application submission
        toast.success('Application submitted successfully! We will contact you within 48 hours.');
        // In real app, this would submit to a backend API
      } catch (error) {
        console.error('Application error:', error);
        toast.error('There was an error submitting your application');
      } finally {
        setIsProcessing(false);
      }
      return;
    }
    
    if (!isConnected || !address) {
      toast.info('Please connect your wallet to place this order');
      connect({ connector: connectors[0] });
      return;
    }
    
    if (!date && (service.category as string) !== 'community') {
      toast.error('Please select a date for your order');
      return;
    }
    
    setIsProcessing(true);
    try {
      // For demo purposes, let's simulate an order ID
      const orderId = Math.floor(Math.random() * 1000) + 1;
      
      // If using crypto payment method, process payment
      if (paymentMethod === 0 || paymentMethod === 1) {
        // Calculate total price
        const totalPrice = (parseFloat(service.price) * quantity).toString();
        // Pass cryptocurrency type (0 for ETH, 1 for BTC)
        await processPayment(orderId, totalPrice, paymentMethod);
      }
      
      toast.success('Order completed successfully!');
      // Redirect to confirmation page (in a real app)
      // window.location.href = `/booking/confirmation?id=${orderId}`;
    } catch (error) {
      console.error('Order error:', error);
      toast.error('There was an error processing your order');
    } finally {
      setIsProcessing(false);
    }
  };
  
  if (!service) {
    return (
      <main className="flex min-h-screen flex-col items-center">
      <Header />
      
      {/* Hero Section */}
      <div className="relative w-full h-[600px]">
        <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            {service.category === 'community' ? 'Apply for Program' : 'Place Your Order'}
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl">
            {service.category === 'community' 
              ? 'Join our community mentorship program and start your entrepreneurial journey'
              : 'Order our delicious artisanal products and eco-friendly catering services'
            }
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
        <div className="container mx-auto px-4 py-16 flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Loading service information...</h1>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tonga-red mx-auto"></div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
  
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">
            {service.category === 'community' ? 'Apply for Program' : 'Place Your Order'}
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            {/* Service Info */}
            <div className="md:flex">
              <div className="md:w-2/5 relative h-64 md:h-auto">
                <Image 
                  src={getImagePath('/images/service-placeholder.jpg')}
                  alt={service.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6 md:w-3/5">
                <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-500">
                      {service.category === 'community' ? 'Program:' : 'Price per item:'}
                    </span>
                    <span className="font-bold text-lg ml-2">
                      {service.category === 'community' ? 'FREE' : `$${parseFloat(service.price) * 1800} TOP`}
                    </span>
                    {service.category !== 'community' && (
                      <span className="text-sm text-gray-500 ml-2">({parseFloat(service.price)} ETH)</span>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-500">Category:</span>
                    <span className="font-bold ml-2 capitalize">{service.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Order/Application Form */}
          <form onSubmit={handleBooking} className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6">
              {service.category === 'community' ? 'Application Details' : 'Order Details'}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {service.category !== 'community' && (
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="date">
                    {service.category === 'catering' ? 'Event Date' : 'Delivery Date'}
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-tonga-red"
                    value={date}
                    onChange={handleDateChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
              )}
              
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="quantity">
                  {service.category === 'community' ? 'Preferred Start Date' : 'Quantity'}
                </label>
                {service.category === 'community' ? (
                  <input
                    type="date"
                    id="quantity"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-tonga-red"
                    min={new Date().toISOString().split('T')[0]}
                  />
                ) : (
                  <input
                    type="number"
                    id="quantity"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-tonga-red"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min={1}
                    required
                  />
                )}
              </div>
            </div>
            
            {/* Special Requests */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="special-requests">
                {service.category === 'community' ? 'Tell us about your background and goals' : 'Special Requests'}
              </label>
              <textarea
                id="special-requests"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-tonga-red"
                rows={4}
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                placeholder={service.category === 'community' 
                  ? 'Please describe your educational background, current situation, and entrepreneurial goals...'
                  : 'Any special dietary requirements, allergies, or custom requests...'}
                {...(service.category === 'community' && { required: true })}
              />
            </div>
            
            {service.category !== 'community' && (
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="payment-method">
                  Payment Method
                </label>
                <select
                  id="payment-method"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-tonga-red"
                  value={paymentMethod}
                  onChange={handlePaymentMethodChange}
                  required
                >
                  <option value={0}>Ethereum (ETH)</option>
                  <option value={1}>Bitcoin (BTC)</option>
                  <option value={2}>Credit/Debit Card</option>
                </select>
              </div>
            )}
            
            {/* Order Summary */}
            {service.category !== 'community' && (
              <div className="bg-gray-50 p-4 rounded-md mb-6">
                <h4 className="font-medium text-gray-800 mb-3">Order Summary</h4>
                
                <div className="flex justify-between mb-2">
                  <span>{service.name} ({quantity} {quantity === 1 ? 'item' : 'items'})</span>
                  <span>${(parseFloat(service.price) * quantity * 1800).toFixed(2)} TOP</span>
                </div>
                
                {paymentMethod === 0 && (
                  <div className="flex justify-between mb-2 text-blue-700">
                    <span>Crypto Payment (ETH)</span>
                    <span>{(parseFloat(service.price) * quantity).toFixed(4)} ETH</span>
                  </div>
                )}
                
                {paymentMethod === 1 && (
                  <div className="flex justify-between mb-2 text-yellow-700">
                    <span>Crypto Payment (BTC)</span>
                    <span>{(parseFloat(service.price) * quantity).toFixed(6)} BTC</span>
                  </div>
                )}
                
                <div className="border-t border-gray-300 my-2"></div>
                
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>
                    {paymentMethod === 0 
                      ? `${(parseFloat(service.price) * quantity).toFixed(4)} ETH`
                      : paymentMethod === 1
                      ? `${(parseFloat(service.price) * quantity).toFixed(6)} BTC`
                      : `$${(parseFloat(service.price) * quantity * 1800).toFixed(2)} TOP`}
                  </span>
                </div>
              </div>
            )}
            
            {/* Action Buttons */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-tonga-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-colors flex items-center"
                disabled={isProcessing || isLoading}
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  service.category === 'community' ? 'Submit Application' : 'Complete Order'
                )}
              </button>
            </div>
            
            {!isConnected && service.category !== 'community' && (
              <div className="mt-4 text-center">
                <p className="text-gray-600">You need to connect your wallet to complete the order.</p>
                <button
                  type="button"
                  onClick={() => connect({ connector: connectors[0] })}
                  className="text-tonga-red font-medium hover:underline mt-1"
                >
                  Connect Wallet
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
