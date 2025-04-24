import Link from 'next/link';
import Image from 'next/image';

interface Product {
  productId: string;
  name: string;
  category: string;
  price: number;
  brand?: string;
  description?: string;
  images: string[];
}

interface Props {
  products: Product[];
}

export default function ProductGrid({ products }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link 
          key={product.productId}
          href={`/product/${product.productId}`}
          className="group bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:shadow-md hover:scale-[1.02]"
        >
          <div className="aspect-square relative">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1 group-hover:text-amber-600 transition-colors">
              {product.name}
            </h3>
            
            <p className="text-amber-600 font-medium mb-2">
              ₹{product.price.toLocaleString()}
            </p>
            
            {product.category && (
              <p className="text-sm text-gray-500 mb-2">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </p>
            )}
            
            <div className="mt-2 flex justify-between items-center">
              <span className="text-sm text-gray-600">
                {product.brand || 'Gold Store'}
              </span>
              <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                View Details
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
