import { Suspense } from 'react';
import { getProducts, ProductClient } from '@/lib/actions/getProducts';
import ProductCard from '@/components/ProductCard';
import LoadingSpinner from '../../components/LoadingSpinner';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function NewArrivalsPage() {
  try {
    const allProducts = await getProducts();
    
    // Ensure allProducts is an array and sort by launch date
    const sortedProducts = Array.isArray(allProducts) ? [...allProducts].sort((a, b) => {
      const dateA = new Date(a.launchDate || 0).getTime();
      const dateB = new Date(b.launchDate || 0).getTime();
      return dateB - dateA;
    }) : [];

    return (
      <main className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">New Arrivals</h1>
            <p className="mt-2 text-gray-600">
              Discover our latest gold jewelry collection
            </p>
          </div>

          <Suspense fallback={<LoadingSpinner />}>
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard 
                    key={product.productId || product._id} 
                    product={product}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No new arrivals at the moment.</p>
                <p className="text-gray-500 mt-2">Please check back soon!</p>
              </div>
            )}
          </Suspense>
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error in NewArrivalsPage:', error);
    return (
      <main className="min-h-screen p-8">
        <div className="text-center">
          <h1 className="text-2xl text-gray-800">Unable to load products</h1>
          <p className="text-gray-600 mt-2">Please try again later</p>
        </div>
      </main>
    );
  }
}

// Helper function to check if a product is new (within last 30 days)
function isNewProduct(launchDate: string) {
  const launch = new Date(launchDate);
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  return launch >= thirtyDaysAgo;
}

// Helper function to format price in Indian Rupees
function formatPrice(amount: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

// Helper function to format date
function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}
