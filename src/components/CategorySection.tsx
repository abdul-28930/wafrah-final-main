"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function CategorySection() {
  const categories = [
    {
      name: 'NECKLACES',
      image: '/categories/goldnecklace.jpg',
      href: '/category/necklaces'
    },
    {
      name: 'EARRINGS',
      image: '/categories/goldearrings.jpg',
      href: '/category/earrings'
    },
    {
      name: 'RINGS',
      image: '/categories/goldrings.jpg',
      href: '/category/rings'
    },
    {
      name: 'BANGLES',
      image: '/categories/goldbangles.jpg',
      href: '/category/bangles'
    },
    {
      name: 'BRACELETS',
      image: '/categories/goldbracelets.jpg',
      href: '/category/bracelets'
    },
    {
      name: 'CHAINS',
      image: '/categories/goldchain.jpg',
      href: '/category/chains'
    },
    {
      name: 'PENDANTS',
      image: '/categories/goldpendants.jpg',
      href: '/category/pendants'
    },
    {
      name: 'BRIDAL',
      image: '/categories/goldbridal.jpg',
      href: '/category/bridal'
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#fff9e6]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">SHOP BY CATEGORY</h2>
        <p className="text-center text-gray-600 mb-12">
          Explore our exquisite collection of fine gold jewelry
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.name}
              href={category.href}
              className="group relative block overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="aspect-square relative">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white tracking-wider">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/categories"
            className="inline-block px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-300"
          >
            VIEW ALL CATEGORIES
          </Link>
        </div>
      </div>
    </section>
  );
}
