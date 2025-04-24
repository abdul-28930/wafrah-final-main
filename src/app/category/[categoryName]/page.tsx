import { getProducts } from '@/lib/api';
import Link from 'next/link';
import { Suspense } from 'react';

// Import components directly with relative paths to fix module resolution issues
import CategorySidebar from '../../../components/CategorySidebar';
import ProductGrid from '../../../components/ProductGrid';

interface Props {
  params: {
    categoryName: string;
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) {
  // Await params to fix the Next.js error
  const {categoryName} = await params;
  
  // Fetch all products for this category with error handling
  let products = [];
  let error = null;
  
  try {
    products = await getProducts({ category: categoryName });
  } catch (err) {
    console.error(`Error fetching products for category ${categoryName}:`, err);
    error = err instanceof Error ? err.message : 'Failed to load products';
  }
  
  // Format the category name for display
  const formattedCategoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  return (
    <div className="bg-[#fff9e6] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-amber-600">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/categories" className="text-gray-500 hover:text-amber-600">Categories</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">{formattedCategoryName}</span>
          </nav>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-6">{formattedCategoryName}</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="w-full md:w-1/4">
            <CategorySidebar currentCategory={categoryName} />
          </div>
          
          {/* Product Grid */}
          <div className="w-full md:w-3/4">
            <Suspense fallback={<div className="text-center py-10">Loading products...</div>}>
              {error ? (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-red-700 mb-2">Something went wrong</h3>
                  <p className="text-red-600 mb-4">{error}</p>
                  <p className="text-gray-600 mb-4">We're having trouble connecting to our database. Please try again later.</p>
                  <Link href="/categories" className="inline-block px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition">
                    Return to Categories
                  </Link>
                </div>
              ) : products.length > 0 ? (
                <ProductGrid products={products} />
              ) : (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
                  <p className="text-gray-600 mb-4">We couldn't find any products in this category.</p>
                  <Link href="/categories" className="inline-block px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition">
                    Browse All Categories
                  </Link>
                </div>
              )}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
