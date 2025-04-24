'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Props {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({ images, productName }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);

  // Ensure we have at least one image
  const safeImages = images && images.length > 0 ? images : ['/placeholder-image.jpg'];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-200">
        <Image
          src={safeImages[selectedImage]}
          alt={`${productName} - Image ${selectedImage + 1}`}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>

      {/* Thumbnail Gallery */}
      {safeImages.length > 1 && (
        <div className="grid grid-cols-5 gap-2">
          {safeImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-square rounded overflow-hidden border-2 transition-all ${
                selectedImage === index 
                  ? 'border-amber-500 opacity-100 scale-105' 
                  : 'border-gray-200 opacity-70 hover:opacity-100'
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
