import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { storeLocations } from '@/data/categories';

const StoreLocationsSection: FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-amber-800 mb-2">OUR STORES</h2>
          <p className="text-amber-700">Visit us at our exclusive showrooms</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {storeLocations.map((store) => (
            <Link 
              key={store.id} 
              href={store.link} 
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square shadow-md transition-transform duration-300 group-hover:shadow-xl group-hover:scale-105">
                <Image
                  src={store.imageSrc}
                  alt={store.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white font-bold text-xl">{store.name}</h3>
                    <p className="text-amber-200 mt-1 text-sm">Visit Store &rarr;</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreLocationsSection;
