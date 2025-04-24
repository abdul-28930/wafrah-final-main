import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { getProducts, ProductClient } from '@/lib/actions/getProducts';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Gold Necklaces Collection | Wafrah Gold',
  description: 'Explore our exquisite collection of gold necklaces, featuring traditional and contemporary designs crafted with the finest materials.',
};

export default async function NecklacesPage() {
  // Fetch necklaces from MongoDB
  const necklaces = await getProducts({ category: "necklaces" });
  
  // Sort by launch date (newest first)
  const sortedNecklaces = [...necklaces].sort((a, b) => 
    new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-amber-700">Gold Necklaces Collection</h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Discover our exquisite collection of gold necklaces, crafted with precision and artistry. 
          From traditional designs to contemporary styles, find the perfect piece to elevate your look.
        </p>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-4 md:mb-0 md:pr-6">
            <h2 className="text-2xl font-semibold text-amber-800 mb-3">Timeless Elegance</h2>
            <p className="text-gray-700 mb-4">
              Our gold necklaces represent the pinnacle of craftsmanship and design. Each piece is meticulously crafted 
              using traditional techniques combined with modern innovation to create jewelry that stands the test of time.
            </p>
            <p className="text-gray-700">
              Whether you're looking for a statement piece for a special occasion or an everyday necklace that adds a touch 
              of luxury to your style, our collection offers something for every preference and occasion.
            </p>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
            <Image 
              src="/products/goldnecklace1.jpg" 
              alt="Gold Necklace Collection" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {sortedNecklaces.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedNecklaces.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">No necklaces found. Check back soon for our updated collection.</p>
        </div>
      )}
    </div>
  );
}
