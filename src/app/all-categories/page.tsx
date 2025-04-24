"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/categories';

export default function AllCategoriesPage() {
  const [activeCategory, setActiveCategory] = useState('necklaces');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-amber-700">All Categories</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-1/4 bg-amber-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-amber-700">Categories</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                    activeCategory === category.id
                      ? 'bg-amber-600 text-white'
                      : 'hover:bg-amber-100 text-gray-700'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className={`${activeCategory === category.id ? 'block' : 'hidden'}`}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={category.imageSrc}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-amber-700">{category.name}</h2>
                  <p className="text-gray-600 mb-6">
                    Explore our exquisite collection of {category.name.toLowerCase()}, featuring traditional and contemporary designs crafted with the finest materials.
                  </p>
                  <Link 
                    href={category.link}
                    className="inline-block bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors"
                  >
                    View Collection
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
