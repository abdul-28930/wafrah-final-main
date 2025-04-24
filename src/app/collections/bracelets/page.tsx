import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Gold Bracelets Collection | Wafrah Gold',
  description: 'Explore our stunning collection of gold bracelets, featuring traditional and contemporary designs crafted with the finest materials.',
};

export default function BraceletsPage() {
  const bracelets = getProductsByCategory('bracelets');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-amber-700">Gold Bracelets Collection</h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Discover our exquisite collection of gold bracelets, designed to add elegance to your wrist.
          From delicate chains to statement cuffs, find the perfect bracelet to complement your style.
        </p>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-4 md:mb-0 md:pr-6">
            <h2 className="text-2xl font-semibold text-amber-800 mb-3">Wrist Elegance</h2>
            <p className="text-gray-700 mb-4">
              Our gold bracelets are crafted with precision and artistry, combining traditional craftsmanship with modern design.
              Each piece is meticulously created to add a touch of luxury to your everyday style or special occasions.
            </p>
            <p className="text-gray-700">
              Whether you prefer a delicate chain bracelet for daily wear or an intricately designed piece for celebrations,
              our collection offers a wide range of options to suit your personal style and preferences.
            </p>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
            <Image 
              src="/products/goldearrings2.jpg" 
              alt="Gold Bracelets Collection" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {bracelets.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bracelets.map((product) => (
           <ProductCard key={product.productId} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">No bracelets found. Check back soon for our updated collection.</p>
        </div>
      )}
    </div>
  );
}
