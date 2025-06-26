import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <Image 
              src="/logo.png"
              alt="The Kids Hub Logo"
              width={180}
              height={60}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm mt-4">
              The Kids Hub provides authentic eco-tourism experiences in Tonga, 
              featuring island tours, traditional village experiences, and 
              local cuisine.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-gray-300 hover:text-white transition-colors">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Tours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Tours</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tours/historical" className="text-gray-300 hover:text-white transition-colors">
                  Historical Sites
                </Link>
              </li>
              <li>
                <Link href="/tours/village" className="text-gray-300 hover:text-white transition-colors">
                  Village Experience
                </Link>
              </li>
              <li>
                <Link href="/tours/culinary" className="text-gray-300 hover:text-white transition-colors">
                  Culinary Tours
                </Link>
              </li>
              <li>
                <Link href="/tours/custom" className="text-gray-300 hover:text-white transition-colors">
                  Custom Tours
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Vaini, Tongatapu</p>
              <p>Kingdom of Tonga</p>
              <p>Email: thekidshub@pasifika.xyz</p>
              <p>Phone: +676 7752039</p>
            </address>
            
            {/* Social Media */}
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-white hover:text-tonga-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-tonga-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-tonga-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} The Kids Hub Eco-Tourism. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            {' • '}
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </p>
          <p className="mt-2">
            <span>Accept fiat and crypto payments</span>
          </p>
          <div className="flex justify-center items-center mt-2 space-x-3">
            <svg className="h-6" viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg"><g fill="none"><rect fill="#0E4595" width="48" height="32" rx="4"/><path d="M18 21.7l1-5.8h1.6l-1 5.8H18z" fill="#fff"/><path d="M27 16c-.4-.3-1-.5-1.6-.5-1.8 0-3 1-3.1 2.3 0 1 .9 1.6 1.6 1.9.7.3 1 .6 1 .9 0 .5-.6.7-1.1.7-.7 0-1.1-.1-1.7-.4l-.2-.1-.3 1.2c.5.2 1.3.4 2.2.4 2 0 3.3-1 3.3-2.4 0-.8-.5-1.4-1.6-2-.7-.3-1-.5-1-.9 0-.3.4-.6 1.1-.6.6 0 1.1.1 1.4.3l.2.1.3-1z" fill="#fff"/><path d="M31 16.2h-1.2l-1.5 4.2-.2-.7s-.3-1.3-.4-1.7c-.2-.3-.6-.9-1.6-.9h-2.6l-.1.1s.8.2 1.7.6l1.4 4.1h1.7l2.6-5.7z" fill="#fff"/><path d="M14.6 16.2l-1.6 4.2-.2-.9c-.3-.8-.8-1.7-1.5-2.1l1.3 4.5h1.6l2.4-5.7h-1.6z" fill="#fff"/><path d="M12 16.2H9.6l-.1.1c1.9.5 3.1 1.6 3.6 3l-.5-2.4c-.1-.3-.3-.4-.6-.5z" fill="#fff"/></g></svg>
            <svg className="h-6" viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg"><g fill="none"><rect fill="#000" width="48" height="32" rx="4"/><path d="M33.9 16h-4v10h4v-10z" fill="#FF5F00"/><path d="M30 16c-1.5 0-2.9.6-4 1.6A6 6 0 0 0 26 21a6 6 0 0 0 4 5.7 6 6 0 0 0 4-5.6 6 6 0 0 0-4-5z" fill="#FFBC00"/><path d="M39.9 16c-1.5 0-3 .6-4 1.6h-.1a6 6 0 0 1 0 6.8h.1a6 6 0 0 0 4-10.3V16z" fill="#F79E1B"/><path d="M46 17.8v-.3h-.1l-.1.2-.1-.2h-.2v.3h.1v-.2l.1.2h.1l.1-.2v.2h.1zm-.7 0v-.2h.1v-.1h-.4v.1h.2v.2h.1z" fill="#F79E1B"/><g fill="#fff"><circle cx="16" cy="21" r="6"/><path d="M17 25a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-7.5V25m-2.5-3.8h5"/></g></g></svg>
            <svg className="h-6" viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg"><g fill="none"><rect fill="#016FD0" width="48" height="32" rx="4"/><path d="M25 21.1l.7-1.7h1.6l.4 1.7h1.3l-1.6-5.8h-1.6L24 21h1zm1.5-4.4l.5 2h-1l.5-2z" fill="#fff"/><path d="M20.4 19c0 .6.3 1.1 1 1.3.4.2.5.3.5.5s-.2.3-.7.3c-.4 0-.7 0-1-.2v.8c.3 0 .7.1 1 .1 1 0 1.7-.4 1.7-1.2 0-.6-.3-1-1-1.2-.4-.2-.6-.3-.6-.5 0-.3.2-.4.6-.4.3 0 .6 0 .9.2v-.9c-.3 0-.5-.1-.8-.1-.9 0-1.6.5-1.6 1.3z" fill="#fff"/><path d="M15 21H16v-4h1.3v-.8h-3.6v.9H15v4z" fill="#fff"/><path d="M29.4 21.1L28 18h-.1v3h-1v-5.7h1l1.5 3h.1v-3h1v5.8h-1z" fill="#fff"/><path d="M31.6 21.1h1v-5.8h-1v5.8z" fill="#fff"/><path d="M34.3 21.1V16H33v5h1.3z" fill="#fff"/></g></svg>
            <svg className="h-5" viewBox="0 0 512 512"><path fill="#ffdb4d" d="m0 0h512v512h-512z"/><path fill="#fff" d="m256 64c106 0 192 86 192 192S362 448 256 448 64 362 64 256 150 64 256 64"/><path fill="#f0932b" d="M287 243c7-4 19-11 19-24.9 0-14-10-23.1-26-23.1h-68v128h70c17 0 28-10 28-25 0-17-14-21-23-25Zm-53-29h42c5 0 8 4 8 8s-3 8-8 8h-42zm43 90h-43v-16h43c5 0 9 3 9 8s-4 8-9 8z"/></svg>
          </div>
        </div>
      </div>
    </footer>
  )
}
