import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Women\'s Gold Earrings | Wafrah Gold',
  description: 'Explore our exquisite collection of women\'s gold earrings, from traditional jhumkas to modern studs for every occasion.',
};

export default function WomensEarringsPage() {
  const earrings = getProductsByCategory('earrings');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-amber-700">Women's Gold Earrings</h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Discover our exquisite collection of women's gold earrings, designed to frame your face with elegance.
          From traditional jhumkas for celebrations to delicate studs for everyday wear.
        </p>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-4 md:mb-0 md:pr-6">
            <h2 className="text-2xl font-semibold text-amber-800 mb-3">Elegant Adornments</h2>
            <p className="text-gray-700 mb-4">
              Our women's gold earrings are crafted with precision and artistry, combining traditional designs with contemporary elegance.
              Each pair is meticulously created to enhance your natural beauty and complement your personal style.
            </p>
            <p className="text-gray-700">
              Whether you prefer statement jhumkas for weddings, intricate chandbalis for festivals, or simple studs for daily wear,
              our collection offers a wide range of designs to suit every occasion and preference.
            </p>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
            <Image 
              src="/products/goldearrings3.jpg" 
              alt="Women's Gold Earrings" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {earrings.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {earrings.map((product) => (
              <ProductCard key={product.productId} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">No earrings found. Check back soon for our updated collection.</p>
        </div>
      )}
    </div>
  );
}
