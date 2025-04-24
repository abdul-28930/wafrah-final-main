import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Women\'s Gold Necklaces | Wafrah Gold',
  description: 'Explore our exquisite collection of women\'s gold necklaces, featuring traditional and contemporary designs for every occasion.',
};

export default function WomensNecklacesPage() {
  const necklaces = getProductsByCategory('necklaces');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-amber-700">Women's Gold Necklaces</h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Discover our exquisite collection of women's gold necklaces, designed to enhance your natural beauty.
          From traditional designs for weddings to contemporary pieces for everyday elegance.
        </p>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-4 md:mb-0 md:pr-6">
            <h2 className="text-2xl font-semibold text-amber-800 mb-3">Timeless Elegance</h2>
            <p className="text-gray-700 mb-4">
              Our women's gold necklaces represent the epitome of craftsmanship and design. Each piece is meticulously 
              created to accentuate your beauty and add a touch of luxury to any outfit.
            </p>
            <p className="text-gray-700">
              Whether you're looking for a statement piece for your wedding day, a traditional design for festivals, 
              or a delicate chain for everyday wear, our collection offers something for every occasion.
            </p>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
            <Image 
              src="/products/goldnecklace3.jpg" 
              alt="Women's Gold Necklaces" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {necklaces.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {necklaces.map((product) => (
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
