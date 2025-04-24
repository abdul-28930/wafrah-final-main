import Image from 'next/image';
import { getProductById } from '@/lib/api';
import Link from 'next/link';
import { IProduct } from '@/models/Product';
import { Suspense } from 'react';

// Import components from the components directory
import ProductDetails from '@/components/product/ProductDetails';
import ProductImageGallery from '@/components/product/ProductImageGallery';



export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  // Fetch product with error handling
  let product: IProduct | null = null;
  let error = null;

  try {
    product = await getProductById(productId);
  } catch (err) {
    console.error(`Error fetching product ${productId}:`, err);
    error = err instanceof Error ? err.message : 'Failed to load product';
  }

  // Handle error state
  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h1 className="text-2xl font-bold text-red-700 mb-2">Something went wrong</h1>
          <p className="text-red-600 mb-4">{error}</p>
          <p className="text-gray-600 mb-4">We're having trouble connecting to our database. Please try again later.</p>
          <div className="flex justify-center gap-4 mt-6">
            <Link href="/" className="px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition">
              Return to Home
            </Link>
            <Link href="/categories" className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition">
              Browse Categories
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Handle product not found
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <div className="flex justify-center gap-4">
            <Link href="/" className="px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition">
              Return to Home
            </Link>
            <Link href="/categories" className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition">
              Browse Categories
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Format the category name for display
  const formattedCategory = product.category.charAt(0).toUpperCase() + product.category.slice(1);

  return (
    <div className="bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-amber-600">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href={`/category/${product.category}`} className="text-gray-500 hover:text-amber-600">
              {formattedCategory}
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700 truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Image Gallery */}
            <Suspense fallback={<div className="aspect-square bg-gray-100 animate-pulse"></div>}>
              <ProductImageGallery images={product.images} productName={product.name} />
            </Suspense>

            {/* Product Details */}
            <ProductDetails product={product} />
          </div>

          {/* Product Description */}
          <div className="p-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Description</h2>
            <div className="prose max-w-none text-gray-600">
              <p>{product.description || 'No description available for this product.'}</p>
            </div>
          </div>

          {/* Product Specifications */}
          <div className="p-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-medium text-gray-700 mb-2">Product Details</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-500">Brand</span>
                    <span className="font-medium">{product.brand || 'Wafrah Gold'}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Category</span>
                    <span className="font-medium">{formattedCategory}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Product ID</span>
                    <span className="font-medium">{product.productId}</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-medium text-gray-700 mb-2">Care Instructions</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Store in a cool, dry place</li>
                  <li>• Avoid contact with perfumes and chemicals</li>
                  <li>• Clean with a soft, dry cloth</li>
                  <li>• Remove before swimming or bathing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
