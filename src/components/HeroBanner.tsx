"use client";

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Banner {
  id: number;
  imageSrc: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const HeroBanner: FC = () => {
  const banners: Banner[] = [
    {
      id: 1,
      imageSrc: '/banners/goldbanner1.jpg',
      title: 'LUXURY GOLD COLLECTION',
      subtitle: 'Timeless Elegance for Every Occasion',
      buttonText: 'SHOP NOW',
      buttonLink: '/collections/luxury'
    },
    {
      id: 2,
      imageSrc: '/banners/goldbanner2.jpg',
      title: 'BRIDAL COLLECTION',
      subtitle: 'Make Your Special Day Unforgettable',
      buttonText: 'EXPLORE NOW',
      buttonLink: '/collections/bridal'
    }
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [banners.length]);

  const goToBanner = (index: number) => {
    setCurrentBanner(index);
  };

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-r from-amber-50 to-amber-100">
      {/* Banners */}
      <div className="relative h-full">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBanner ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="relative h-full w-full">
              <Image
                src={banner.imageSrc}
                alt={banner.title}
                fill
                priority={index === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevBanner}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-amber-800 p-2 rounded-full shadow-md hover:bg-amber-50 z-10"
        aria-label="Previous banner"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <button
        onClick={nextBanner}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-amber-800 p-2 rounded-full shadow-md hover:bg-amber-50 z-10"
        aria-label="Next banner"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToBanner(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentBanner ? 'bg-amber-600' : 'bg-white/50'
            }`}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
