import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Women\'s Gold Rings | Wafrah Gold',
  description: 'Explore our exquisite collection of women\'s gold rings, from traditional designs to modern styles for every occasion.',
};

export default function WomensRingsPage() {
  const rings = getProductsByCategory('rings');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-amber-700">Women's Gold Rings</h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Discover our exquisite collection of women's gold rings, designed to adorn your fingers with elegance.
          From traditional designs for special occasions to contemporary styles for everyday luxury.
        </p>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-4 md:mb-0 md:pr-6">
            <h2 className="text-2xl font-semibold text-amber-800 mb-3">Elegant Expressions</h2>
            <p className="text-gray-700 mb-4">
              Our women's gold rings are crafted with precision and artistry, combining traditional motifs with contemporary design.
              Each piece is meticulously created to symbolize beauty, commitment, and personal expression.
            </p>
            <p className="text-gray-700">
              Whether you're looking for an engagement ring, a statement cocktail ring, or a delicate band for everyday wear,
              our collection offers designs that capture the essence of your style and sentiment.
            </p>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
            <Image 
              src="/products/goldring2.jpg" 
              alt="Women's Gold Rings" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {rings.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {rings.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">No rings found. Check back soon for our updated collection.</p>
        </div>
      )}
    </div>
  );
}
