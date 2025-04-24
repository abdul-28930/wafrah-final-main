"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FC, useState } from 'react';

const Header: FC = () => {
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <Image src="/logowafrah.png" alt="Wafrah Gold" width={100} height={100} className="h-[100px] w-[100px]" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/new-arrivals" className="text-gray-700 hover:text-amber-600">New Arrivals</Link>
            <div className="relative">
              <button 
                className="flex items-center text-gray-700 hover:text-amber-600 focus:outline-none"
                onClick={() => setCollectionsOpen(!collectionsOpen)}
                onMouseEnter={() => setCollectionsOpen(true)}
              >
                Collections
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {collectionsOpen && (
                <div 
                  className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10"
                  onMouseLeave={() => setTimeout(() => setCollectionsOpen(false), 300)}
                >
                  <Link href="/collections/necklaces" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600">Necklaces</Link>
                  <Link href="/collections/earrings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600">Earrings</Link>
                  <Link href="/collections/rings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600">Rings</Link>
                  <Link href="/collections/bracelets" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600">Bracelets</Link>
                </div>
              )}
            </div>
            <Link 
              href="/admin" 
              className="flex items-center text-gray-700 hover:text-amber-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              Admin Login
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-amber-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/new-arrivals" 
                className="text-gray-700 hover:text-amber-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                New Arrivals
              </Link>
              <div className="relative">
                <button 
                  className="flex items-center text-gray-700 hover:text-amber-600 focus:outline-none py-2"
                  onClick={() => setCollectionsOpen(!collectionsOpen)}
                >
                  Collections
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {collectionsOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link 
                      href="/collections/necklaces" 
                      className="block text-gray-700 hover:text-amber-600 py-1"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setCollectionsOpen(false);
                      }}
                    >
                      Necklaces
                    </Link>
                    <Link 
                      href="/collections/earrings" 
                      className="block text-gray-700 hover:text-amber-600 py-1"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setCollectionsOpen(false);
                      }}
                    >
                      Earrings
                    </Link>
                    <Link 
                      href="/collections/rings" 
                      className="block text-gray-700 hover:text-amber-600 py-1"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setCollectionsOpen(false);
                      }}
                    >
                      Rings
                    </Link>
                    <Link 
                      href="/collections/bracelets" 
                      className="block text-gray-700 hover:text-amber-600 py-1"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setCollectionsOpen(false);
                      }}
                    >
                      Bracelets
                    </Link>
                  </div>
                )}
              </div>
              <Link 
                href="/admin" 
                className="flex items-center text-gray-700 hover:text-amber-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                Admin Login
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
