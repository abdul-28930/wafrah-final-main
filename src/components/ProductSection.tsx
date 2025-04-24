"use client";

import { FC } from 'react';
import ProductCard from './ProductCard';
import Link from 'next/link';

interface ProductSectionProps {
  title: string;
  viewAllLink?: string;
  products: Array<{
    productId: string;
    name: string;
    brand: string;
    price: number;
    images: string[];
    category: string;
    launchDate: string;
    description: string;
    _id?: string;
  }>;
  bgColor?: string;
  description?: string;
  emptyMessage?: string;
}

const ProductSection: FC<ProductSectionProps> = ({ 
  title, 
  products = [],
  bgColor = 'bg-white',
  description,
  viewAllLink,
  emptyMessage
}) => {
  // Ensure products is always an array
  const safeProducts = Array.isArray(products) ? products : [];

  // Only return null if no products AND no emptyMessage
  if (safeProducts.length === 0 && !emptyMessage) return null;

  return (
    <section className={`py-12 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            {description && (
              <p className="mt-2 text-gray-600">{description}</p>
            )}
          </div>
          {viewAllLink && (
            <Link 
              href={viewAllLink}
              className="text-amber-600 hover:text-amber-700 font-medium transition-colors"
            >
              View All
            </Link>
          )}
        </div>

        {safeProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {safeProducts.map((product) => (
              <ProductCard key={product.productId || product._id} product={product} />
            ))}
          </div>
        ) : emptyMessage && (
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <p className="text-gray-600">{emptyMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
