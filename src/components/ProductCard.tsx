"use client";

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Updated interface to match MongoDB product structure
interface ProductCardProps {
  product: {
    productId: string;
    name: string;
    brand: string;
    price: number;
    images: string[];
    category: string;
    launchDate: string;
    description: string;
    _id?: string;
  };
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { productId, name, brand, price, images, launchDate } = product;
  
  // Format price in Indian Rupees
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Check if product is new (launched within last 30 days)
  const isNew = () => {
    const launchDate = new Date(product.launchDate);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return launchDate >= thirtyDaysAgo;
  };

  // Default image if images array is empty or undefined
  const imageUrl = images && images.length > 0 ? images[0] : '/placeholder-image.jpg';

  return (
    <div className="group relative">
      <div className="relative overflow-hidden bg-gray-100 rounded-lg aspect-square">
        <Link href={`/products/${productId}`}>
          <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
            <Image
              src={imageUrl}
              alt={name}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover"
              priority={isNew()}
            />
          </div>
        </Link>
        
        {/* Quick action buttons */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            className="bg-white text-amber-700 p-2 rounded-full shadow-md hover:bg-amber-50"
            aria-label="Add to wishlist"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </button>
          <button 
            className="bg-amber-600 text-white p-2 rounded-full shadow-md hover:bg-amber-700"
            aria-label="Add to cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </button>
        </div>
        
        {/* New Arrival badge - show for products launched within the last 30 days */}
        {isNew() && (
          <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </div>
        )}
      </div>
      
      <div className="mt-4 space-y-2">
        <h3 className="text-sm font-medium text-gray-900 truncate">{name}</h3>
        <p className="text-sm text-gray-500 truncate">{brand}</p>
        <p className="text-lg font-semibold text-amber-600">{formatPrice(price)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
