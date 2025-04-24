'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Props {
  currentCategory: string;
}

export default function CategorySidebar({ currentCategory }: Props) {
  const [expanded, setExpanded] = useState(true);
  
  const categories = [
    {
      name: 'necklaces',
      displayName: 'Necklaces',
      href: '/category/necklaces'
    },
    {
      name: 'earrings',
      displayName: 'Earrings',
      href: '/category/earrings'
    },
    {
      name: 'rings',
      displayName: 'Rings',
      href: '/category/rings'
    },
    {
      name: 'bangles',
      displayName: 'Bangles',
      href: '/category/bangles'
    },
    {
      name: 'bracelets',
      displayName: 'Bracelets',
      href: '/category/bracelets'
    },
    {
      name: 'chains',
      displayName: 'Chains',
      href: '/category/chains'
    },
    {
      name: 'pendants',
      displayName: 'Pendants',
      href: '/category/pendants'
    },
    {
      name: 'bridal',
      displayName: 'Bridal Collection',
      href: '/category/bridal'
    }
  ];

  // Price ranges for filtering
  const priceRanges = [
    { name: 'Under ₹10,000', value: 'under-10000' },
    { name: '₹10,000 - ₹25,000', value: '10000-25000' },
    { name: '₹25,000 - ₹50,000', value: '25000-50000' },
    { name: 'Over ₹50,000', value: 'over-50000' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      {/* Mobile toggle */}
      <button 
        className="md:hidden w-full flex justify-between items-center py-2 px-4 bg-amber-50 rounded mb-4"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="font-medium">Categories</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-5 w-5 transition-transform ${expanded ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`${expanded ? 'block' : 'hidden'} md:block`}>
        {/* Categories Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Categories</h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.name}>
                <Link 
                  href={category.href}
                  className={`block py-2 px-3 rounded transition-colors ${
                    currentCategory === category.name 
                      ? 'bg-amber-100 text-amber-800 font-medium' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {category.displayName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Price Range</h3>
          <ul className="space-y-2">
            {priceRanges.map((range) => (
              <li key={range.value} className="flex items-center">
                <input 
                  type="checkbox" 
                  id={range.value} 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                />
                <label htmlFor={range.value} className="ml-2 text-gray-700 cursor-pointer">
                  {range.name}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Material Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Material</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <input 
                type="checkbox" 
                id="22k-gold" 
                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
              />
              <label htmlFor="22k-gold" className="ml-2 text-gray-700 cursor-pointer">
                22K Gold
              </label>
            </li>
            <li className="flex items-center">
              <input 
                type="checkbox" 
                id="18k-gold" 
                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
              />
              <label htmlFor="18k-gold" className="ml-2 text-gray-700 cursor-pointer">
                18K Gold
              </label>
            </li>
            <li className="flex items-center">
              <input 
                type="checkbox" 
                id="gold-diamond" 
                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
              />
              <label htmlFor="gold-diamond" className="ml-2 text-gray-700 cursor-pointer">
                Gold with Diamonds
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
