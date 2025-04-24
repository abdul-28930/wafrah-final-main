
import HeroBanner from '@/components/HeroBanner';
import CategorySection from '@/components/CategorySection';
import ProductSection from '@/components/ProductSection';
import Testimonials from '@/components/Testimonials';
import TrustBadgesSection from '@/components/TrustBadgesSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getProducts, ProductClient } from '@/lib/actions/getProducts';

export default async function HomePage() {
  try {
    // Get all products and trending products
    const [allProducts, trendingProducts] = await Promise.all([
      getProducts(),
      getProducts({ sort: 'trending' })
    ]);

    // Get new arrivals (latest 8 products by launch date)
    const newArrivals = [...allProducts]
      .sort((a, b) => {
        const dateA = new Date(a.launchDate || 0).getTime();
        const dateB = new Date(b.launchDate || 0).getTime();
        return dateB - dateA;
      })
      .slice(0, 8);

    // Get top 8 trending products
    const topTrending = trendingProducts.slice(0, 8);

    // Get products on sale
    const saleProducts = allProducts.filter((p: ProductClient) => p.onSale).slice(0, 8);

    return (
      <main className="min-h-screen">
        <HeroBanner />
        <CategorySection />
        
        <ProductSection 
          title="NEW ARRIVALS" 
          products={newArrivals}
          bgColor="bg-white"
          viewAllLink="/new-arrivals"
        />

        <Testimonials />
        
        {/* Always show Trending section, even if empty */}
        <ProductSection 
          title="TRENDING NOW" 
          products={topTrending}
          bgColor="bg-white"
          description="Most visited products in the last 30 days"
          emptyMessage="Visit products to see trending items here!"
        />
        
        {saleProducts.length > 0 && (
          <ProductSection 
            title="ON SALE" 
            products={saleProducts}
            bgColor="bg-white"
            viewAllLink="/on-sale"
          />
        )}

        <TrustBadgesSection />
        <WhatsAppButton />
      </main>
    );
  } catch (error) {
    console.error('Error in HomePage:', error);
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
