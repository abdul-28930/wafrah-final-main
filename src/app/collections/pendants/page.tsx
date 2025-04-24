import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Gold Pendants Collection | Wafrah Gold',
  description: 'Explore our exquisite collection of gold pendants, featuring traditional and contemporary designs crafted with the finest materials.',
};

export default function PendantsPage() {
  const pendants = getProductsByCategory('pendants');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-amber-700">Gold Pendants Collection</h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Discover our exquisite collection of gold pendants, designed to add a touch of elegance to any outfit.
          From traditional motifs to contemporary designs, find the perfect pendant to express your style.
        </p>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-4 md:mb-0 md:pr-6">
            <h2 className="text-2xl font-semibold text-amber-800 mb-3">Elegant Expressions</h2>
            <p className="text-gray-700 mb-4">
              Our gold pendants are crafted with precision and artistry, combining traditional motifs with contemporary elegance.
              Each piece is meticulously created to be a focal point of your jewelry collection.
            </p>
            <p className="text-gray-700">
              Whether you're looking for a religious symbol, a meaningful motif, or a modern design statement,
              our collection offers pendants that capture the essence of your personal style and sentiments.
            </p>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
            <Image 
              src="/products/goldpendants1.jpg" 
              alt="Gold Pendants Collection" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {pendants.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pendants.map((product) => (
           <ProductCard key={product.productId} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">No pendants found. Check back soon for our updated collection.</p>
        </div>
      )}
    </div>
  );
}
