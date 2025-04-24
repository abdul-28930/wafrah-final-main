'use client';

import { IProduct } from '@/models/Product';
import Link from 'next/link';

interface Props {
  product: IProduct;
}

export default function ProductDetails({ product }: Props) {
  // Format WhatsApp message with product details
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+919876543210";
  const message = `Hello! I'm interested in the ${product.name} (ID: ${product.productId}) priced at ₹${product.price.toLocaleString()}. Can you provide more information?`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`;

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
        <p className="text-2xl text-amber-600 mb-6">₹{product.price.toLocaleString()}</p>
        
        {product.description && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>
        )}

        <div className="space-y-4 mb-8">
          {product.category && (
            <div>
              <span className="font-semibold">Category:</span> {product.category}
            </div>
          )}
          {product.brand && (
            <div>
              <span className="font-semibold">Brand:</span> {product.brand}
            </div>
          )}
          <div>
            <span className="font-semibold">Product ID:</span> {product.productId}
          </div>
        </div>
      </div>

      <div className="mt-auto space-y-4">
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5c-5.799 0-10.5-4.701-10.5-10.5S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5z" />
          </svg>
          Contact via WhatsApp
        </a>
        
        <div className="grid grid-cols-2 gap-4">
          <Link 
            href={`/category/${product.category}`}
            className="text-center py-3 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors"
          >
            More {product.category}
          </Link>
          <button 
            className="py-3 px-4 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-colors"
            onClick={() => window.print()}
          >
            Print Details
          </button>
        </div>
      </div>
    </div>
  );
}
