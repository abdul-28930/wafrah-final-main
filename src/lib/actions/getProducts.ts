import connectToDatabase from '@/lib/mongodb';
import Product from '@/models/Product';

export interface ProductClient {
  _id?: string;
  productId: string;
  name: string;
  brand: string;
  price: number;
  images: string[];
  category: string;
  launchDate: string;
  description: string;
  onSale?: boolean;
}

export async function getProducts(options?: { category?: string; sort?: string }): Promise<ProductClient[]> {
  await connectToDatabase();

  const { category, sort } = options || {};

  let query: Record<string, any> = {};
  if (category) query.category = category;

  let sortOptions: Record<string, 1 | -1> = {};
  if (sort === 'trending') {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    query.lastVisited = { $gte: thirtyDaysAgo };
    query.visitCount = { $gt: 0 };
    sortOptions = { visitCount: -1, lastVisited: -1 };
  } else if (sort === 'price-asc') {
    sortOptions = { price: 1 };
  } else if (sort === 'price-desc') {
    sortOptions = { price: -1 };
  } else {
    sortOptions = { launchDate: -1 };
  }

  const rawProducts = await Product.find(query).sort(sortOptions).lean();

  return rawProducts.map((doc: any) => ({
    _id: doc._id?.toString(),
    productId: doc.productId,
    name: doc.name,
    brand: doc.brand,
    price: doc.price,
    images: doc.images,
    category: doc.category,
    launchDate: doc.launchDate,
    description: doc.description,
    onSale: doc.onSale ?? false,
  }));
}