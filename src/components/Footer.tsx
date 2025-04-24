import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Store Locations */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <Link href="/stores/delhi" className="relative h-48 overflow-hidden group">
            <Image 
              src="/stores/delhi.jpg" 
              alt="Delhi Store" 
              fill 
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 px-4 py-2">
              <h3 className="text-xl font-bold">DELHI</h3>
            </div>
          </Link>
          <Link href="/stores/hyderabad" className="relative h-48 overflow-hidden group">
            <Image 
              src="/stores/hyderabad.jpg" 
              alt="Hyderabad Store" 
              fill 
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 px-4 py-2">
              <h3 className="text-xl font-bold">HYDERABAD</h3>
            </div>
          </Link>
          <Link href="/stores/mumbai" className="relative h-48 overflow-hidden group">
            <Image 
              src="/stores/mumbai.jpg" 
              alt="Mumbai Store" 
              fill 
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 px-4 py-2">
              <h3 className="text-xl font-bold">MUMBAI</h3>
            </div>
          </Link>
          <Link href="/stores/bangalore" className="relative h-48 overflow-hidden group">
            <Image 
              src="/stores/bangalore.jpg" 
              alt="Bangalore Store" 
              fill 
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 px-4 py-2">
              <h3 className="text-xl font-bold">BANGALORE</h3>
            </div>
          </Link>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-lg font-bold mb-4">INFO</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact-us" className="hover:text-amber-400">Contact Us</Link></li>
              <li><Link href="/releases" className="hover:text-amber-400">Releases</Link></li>
              <li><Link href="/stores" className="hover:text-amber-400">Stores</Link></li>
              <li><Link href="/brands" className="hover:text-amber-400">Brands</Link></li>
              <li><Link href="/blogs" className="hover:text-amber-400">Blogs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">POLICIES</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help-center" className="hover:text-amber-400">Help Center</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-amber-400">Privacy Policy</Link></li>
              <li><Link href="/returns-exchange" className="hover:text-amber-400">Returns & Exchange</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-amber-400">Terms & Conditions</Link></li>
              <li><Link href="/order-shipping" className="hover:text-amber-400">Order & Shipping</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-amber-400">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">OUR SOCIALS</h4>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-amber-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </Link>
              <Link href="https://instagram.com" className="hover:text-amber-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">SUBSCRIBE TO OUR NEWSLETTER</h4>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="px-4 py-2 w-full bg-white text-black focus:outline-none" 
              />
              <button 
                type="submit" 
                className="bg-black text-white px-4 py-2 border border-white hover:bg-amber-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">PAYMENT METHODS</h3>
          <div className="flex flex-wrap gap-2">
            <Image src="/payment/visa.svg" alt="Visa" width={40} height={25} />
            <Image src="/payment/mastercard.svg" alt="Mastercard" width={40} height={25} />
            <Image src="/payment/upi.svg" alt="UPI" width={40} height={25} />
            <Image src="/payment/paytm.svg" alt="Paytm" width={40} height={25} />
            <Image src="/payment/gpay.svg" alt="Google Pay" width={40} height={25} />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm">
          <p> {new Date().getFullYear()}, Wafrah Gold</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
