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

interface Tour {
  id: number;
  name: string;
  description: string;
  price: any;
  maxParticipants: number;
}

export default function BookingPage() {
  const searchParams = useSearchParams();
  const tourId = searchParams.get('tourId');
  const { connect, connectors } = useConnect();
  const { address, isConnected } = useAccount();
  const { bookTour, getTours, processPayment, isLoading } = useKidsHubContracts();
  
  const [tour, setTour] = useState<Tour | null>(null);
  const [date, setDate] = useState<string>('');
  const [participants, setParticipants] = useState<number>(1);
  const [paymentMethod, setPaymentMethod] = useState<number>(0); // 0: Crypto, 1: Fiat (via credit card)
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  
  useEffect(() => {
    // Load tour information
    async function loadTour() {
      if (!tourId) return;
      
      try {
        const tours = await getTours();
        const selectedTour = tours.find((t: Tour) => t.id.toString() === tourId);
        if (selectedTour) {
          setTour(selectedTour);
        } else {
          toast.error('Tour not found');
        }
      } catch (error) {
        console.error('Error loading tour:', error);
        toast.error('Failed to load tour information');
      }
    }
    
    loadTour();
  }, [tourId, getTours]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  
  const handleParticipantsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0 && tour && value <= tour.maxParticipants) {
      setParticipants(value);
    }
  };
  
  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(parseInt(e.target.value));
  };
  
  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isConnected || !address) {
      toast.info('Please connect your wallet to book this tour');
      connect({ connector: connectors[0] });
      return;
    }
    
    if (!tour || !date) {
      toast.error('Please select a date for your booking');
      return;
    }
    
    setIsProcessing(true);
    try {
      // Convert date to Unix timestamp
      const bookingDate = Math.floor(new Date(date).getTime() / 1000);
      
      // Book tour through smart contract
      const bookingResult = await bookTour(
        tour.id,
        bookingDate,
        participants,
        paymentMethod
      );
      
      if (bookingResult) {
        // For demo purposes, let's simulate a booking ID
        const bookingId = Math.floor(Math.random() * 1000) + 1;
        
        // If using crypto payment method, process payment
        if (paymentMethod === 0) {
          // Calculate total price
          const totalPrice = (parseFloat(tour.price) * participants).toString();
          
          await processPayment(bookingId, totalPrice);
        }
        
        toast.success('Booking completed successfully!');
        // Redirect to confirmation page (in a real app)
        // window.location.href = `/booking/confirmation?id=${bookingId}`;
      }
    } catch (error) {
      console.error('Booking error:', error);
      toast.error('There was an error processing your booking');
    } finally {
      setIsProcessing(false);
    }
  };
  
  if (!tour) {
    return (
      <main className="flex min-h-screen flex-col">
        <Header />
        <div className="container mx-auto px-4 py-16 flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Loading tour information...</h1>
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
          <h1 className="text-3xl font-bold mb-8 text-center">Book Your Tour</h1>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            {/* Tour Info */}
            <div className="md:flex">
              <div className="md:w-2/5 relative h-64 md:h-auto">
                <Image 
                  src={getImagePath('/images/tour-placeholder.jpg')}
                  alt={tour.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6 md:w-3/5">
                <h2 className="text-2xl font-bold mb-2">{tour.name}</h2>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-500">Price per person:</span>
                    <span className="font-bold text-lg ml-2">${parseFloat(tour.price) * 1800} TOP</span>
                    <span className="text-sm text-gray-500 ml-2">({parseFloat(tour.price)} ETH)</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Max participants:</span>
                    <span className="font-bold ml-2">{tour.maxParticipants}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Booking Form */}
          <form onSubmit={handleBooking} className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6">Booking Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="date">
                  Tour Date
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
              
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="participants">
                  Number of Participants
                </label>
                <input
                  type="number"
                  id="participants"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-tonga-red"
                  value={participants}
                  onChange={handleParticipantsChange}
                  min={1}
                  max={tour.maxParticipants}
                  required
                />
                <p className="text-sm text-gray-500 mt-1">Maximum {tour.maxParticipants} participants</p>
              </div>
            </div>
            
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
                <option value={0}>Cryptocurrency (ETH)</option>
                <option value={1}>Credit/Debit Card</option>
              </select>
            </div>
            
            {/* Order Summary */}
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <h4 className="font-medium text-gray-800 mb-3">Order Summary</h4>
              
              <div className="flex justify-between mb-2">
                <span>Tour Price ({participants} {participants === 1 ? 'person' : 'people'})</span>
                <span>${(parseFloat(tour.price) * participants * 1800).toFixed(2)} TOP</span>
              </div>
              
              {paymentMethod === 0 && (
                <div className="flex justify-between mb-2 text-tonga-red">
                  <span>Crypto Payment (ETH)</span>
                  <span>{(parseFloat(tour.price) * participants).toFixed(4)} ETH</span>
                </div>
              )}
              
              <div className="border-t border-gray-300 my-2"></div>
              
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>
                  {paymentMethod === 0 
                    ? `${(parseFloat(tour.price) * participants).toFixed(4)} ETH`
                    : `$${(parseFloat(tour.price) * participants * 1800).toFixed(2)} TOP`}
                </span>
              </div>
            </div>
            
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
                  'Complete Booking'
                )}
              </button>
            </div>
            
            {!isConnected && (
              <div className="mt-4 text-center">
                <p className="text-gray-600">You need to connect your wallet to complete the booking.</p>
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
