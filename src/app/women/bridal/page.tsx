import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'Bridal Gold Collection | Wafrah Gold',
  description: 'Explore our exquisite bridal gold collection, featuring traditional and contemporary designs crafted with the finest materials for your special day.',
};

export default function BridalPage() {
  const bridalProducts = getProductsByCategory('bridal');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-amber-700">Bridal Gold Collection</h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Discover our exquisite bridal gold collection, crafted with precision and artistry. 
          From traditional designs to contemporary styles, find the perfect pieces to make your special day even more memorable.
        </p>
      </div>

      {bridalProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bridalProducts.map((product) => (
           <ProductCard key={product.productId} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="mb-4">
            <Image
              src="/categories/goldbridal.jpg"
              alt="Bridal Gold Collection"
              width={300}
              height={300}
              className="mx-auto rounded-lg shadow-md"
            />
          </div>
          <h2 className="text-2xl font-semibold text-amber-700 mb-2">Coming Soon</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Our exclusive bridal gold collection is being curated and will be available soon. 
            Please check back later or explore our other beautiful collections for your special day.
          </p>
        </div>
      )}
    </div>
  );
}
