import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'Gold Bangles Collection | Wafrah Gold',
  description: 'Explore our exquisite collection of gold bangles, featuring traditional and contemporary designs crafted with the finest materials.',
};

export default function BanglesPage() {
  const bangles = getProductsByCategory('bangles');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-amber-700">Gold Bangles Collection</h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Discover our exquisite collection of gold bangles, crafted with precision and artistry. 
          From traditional designs to contemporary styles, find the perfect piece to elevate your look.
        </p>
      </div>

      {bangles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bangles.map((product) => (
           <ProductCard key={product.productId} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="mb-4">
            <Image
              src="/categories/goldbangles.jpg"
              alt="Gold Bangles"
              width={300}
              height={300}
              className="mx-auto rounded-lg shadow-md"
            />
          </div>
          <h2 className="text-2xl font-semibold text-amber-700 mb-2">Coming Soon</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Our collection of exquisite gold bangles is being curated and will be available soon. 
            Please check back later or explore our other beautiful collections.
          </p>
        </div>
      )}
    </div>
  );
}
