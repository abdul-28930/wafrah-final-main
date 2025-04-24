export interface Product {
  productId: string;
  name: string;
  brand: string;
  price: number;
  salePrice?: number;
  images: string[]; // replaces imageSrc
  category: string;
  launchDate: string;
  description: string;
  isNewArrival?: boolean;
  isTrending?: boolean;
  isSale?: boolean;
}

export const products = [
  {
    productId: 'diamond-pendant-floral',
    name: 'FLORAL DIAMOND PENDANT',
    brand: 'Wafrah Signature',
    price: 45999,
    images: ['/products/goldpendants1.jpg'],
    category: 'pendants',
    launchDate: '2024-01-01',
    description: 'A beautiful floral pendant crafted with diamonds.',
    isNewArrival: true
  },
  {
    productId: 'gold-bangles-set',
    name: 'TRADITIONAL BANGLES SET',
    brand: 'Wafrah Signature',
    price: 75999,
    images: ['/products/goldearrings1.jpg'],
    category: 'bangles',
    launchDate: '2024-01-02',
    description: 'Elegant bangles set for traditional occasions.',
    isNewArrival: true
  },
  {
    productId: 'diamond-earrings-drop',
    name: 'DIAMOND DROP EARRINGS',
    brand: 'Wafrah Signature',
    price: 35999,
    images: ['/products/goldearrings1.jpg'],
    category: 'earrings',
    launchDate: '2024-01-03',
    description: 'Stunning drop earrings with sparkling diamonds.',
    isNewArrival: true
  },
  {
    productId: 'gold-ring-solitaire',
    name: 'SOLITAIRE DIAMOND RING',
    brand: 'Royal Gold',
    price: 125999,
    images: ['/products/goldring1.jpg'],
    category: 'rings',
    launchDate: '2024-01-04',
    description: 'A luxurious solitaire diamond ring with timeless charm.',
    isTrending: true
  },
  {
    productId: 'gold-bracelet-chain',
    name: 'GOLD CHAIN BRACELET',
    brand: 'Royal Gold',
    price: 42999,
    images: ['/products/goldearrings2.jpg'],
    category: 'bracelets',
    launchDate: '2024-01-05',
    description: 'A classic gold bracelet chain with elegant design.',
    isTrending: true
  },
  {
    productId: 'gold-necklace-antique',
    name: 'ANTIQUE GOLD NECKLACE',
    brand: 'Heritage Collection',
    price: 95999,
    images: ['/products/goldnecklace2.jpg'],
    category: 'necklaces',
    launchDate: '2024-01-06',
    description: 'A heritage-inspired antique necklace made of pure gold.',
    isTrending: true
  },
  {
    productId: 'diamond-earrings-studs',
    name: 'DIAMOND STUD EARRINGS',
    brand: 'Diamond Elite',
    price: 29999,
    images: ['/products/goldearrings2.jpg'],
    category: 'earrings',
    launchDate: '2024-01-07',
    description: 'Elegant diamond studs for a timeless look.',
    isTrending: true
  },
  {
    productId: 'gold-necklace-bridal',
    name: 'BRIDAL GOLD NECKLACE SET',
    brand: 'Wafrah Bridal',
    price: 159999,
    salePrice: 129999,
    images: ['/products/goldnecklace3.jpg'],
    category: 'bridal',
    launchDate: '2024-01-08',
    description: 'A regal bridal necklace set crafted for weddings.',
    isSale: true
  },
  {
    productId: 'gold-bangles-broad',
    name: 'BROAD GOLD BANGLES',
    brand: 'Heritage Collection',
    price: 85999,
    salePrice: 69999,
    images: ['/products/goldearrings3.jpg'],
    category: 'bangles',
    launchDate: '2024-01-09',
    description: 'Bold and broad bangles with intricate craftsmanship.',
    isSale: true
  },
  {
    productId: 'gold-earrings-jhumka',
    name: 'TRADITIONAL JHUMKA EARRINGS',
    brand: 'Heritage Collection',
    price: 45999,
    salePrice: 38999,
    images: ['/products/goldearrings3.jpg'],
    category: 'earrings',
    launchDate: '2024-01-10',
    description: 'Classic jhumka earrings with a traditional touch.',
    isSale: true
  },
  {
    productId: 'gold-chain-mens',
    name: 'MEN\'S GOLD CHAIN',
    brand: 'Royal Gold',
    price: 65999,
    salePrice: 55999,
    images: ['/products/goldring3.jpg'],
    category: 'chains',
    launchDate: '2024-01-11',
    description: 'A sturdy and stylish chain for men.',
    isSale: true
  }
];

export const getNewArrivals = () => products.filter(product => product.isNewArrival);
export const getTrendingProducts = () => products.filter(product => product.isTrending);
export const getSaleProducts = () => products.filter(product => product.isSale);
export const getProductsByCategory = (category: string) => 
  products.filter(product => product.category === category);
