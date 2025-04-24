// Mock product data for development and fallback when database is unavailable

export interface MockProduct {
  productId: string;
  name: string;
  category: string;
  price: number;
  brand: string;
  description?: string;
  images: string[];
  launchDate: string;
  onSale: boolean;
  visitCount: number;
}

const mockProducts: MockProduct[] = [
  {
    productId: 'NK001',
    name: 'Diamond Studded Gold Necklace',
    category: 'necklaces',
    price: 85000,
    brand: 'Wafrah Gold',
    description: 'Elegant 22K gold necklace with diamond studs, perfect for special occasions.',
    images: [
      '/products/necklace1.jpg',
      '/products/necklace1-2.jpg',
      '/products/necklace1-3.jpg'
    ],
    launchDate: '2024-12-01',
    onSale: false,
    visitCount: 120
  },
  {
    productId: 'NK002',
    name: 'Traditional Bridal Necklace',
    category: 'necklaces',
    price: 125000,
    brand: 'Wafrah Gold',
    description: 'Stunning bridal necklace with intricate design, made from 22K gold.',
    images: [
      '/products/necklace2.jpg',
      '/products/necklace2-2.jpg'
    ],
    launchDate: '2024-11-15',
    onSale: true,
    visitCount: 210
  },
  {
    productId: 'ER001',
    name: 'Classic Gold Earrings',
    category: 'earrings',
    price: 28000,
    brand: 'Wafrah Gold',
    description: 'Timeless 22K gold earrings with a simple yet elegant design.',
    images: [
      '/products/earrings1.jpg',
      '/products/earrings1-2.jpg'
    ],
    launchDate: '2024-12-10',
    onSale: false,
    visitCount: 85
  },
  {
    productId: 'ER002',
    name: 'Diamond Drop Earrings',
    category: 'earrings',
    price: 45000,
    brand: 'Wafrah Gold',
    description: 'Beautiful drop earrings with diamond accents, made from 18K gold.',
    images: [
      '/products/earrings2.jpg',
      '/products/earrings2-2.jpg'
    ],
    launchDate: '2024-10-20',
    onSale: false,
    visitCount: 95
  },
  {
    productId: 'RG001',
    name: 'Classic Gold Band',
    category: 'rings',
    price: 18000,
    brand: 'Wafrah Gold',
    description: 'Simple and elegant 22K gold band, perfect for everyday wear.',
    images: [
      '/products/ring1.jpg',
      '/products/ring1-2.jpg'
    ],
    launchDate: '2024-11-05',
    onSale: false,
    visitCount: 150
  },
  {
    productId: 'RG002',
    name: 'Diamond Solitaire Ring',
    category: 'rings',
    price: 65000,
    brand: 'Wafrah Gold',
    description: 'Stunning 18K gold ring with a brilliant diamond solitaire.',
    images: [
      '/products/ring2.jpg',
      '/products/ring2-2.jpg'
    ],
    launchDate: '2024-09-15',
    onSale: true,
    visitCount: 180
  },
  {
    productId: 'BG001',
    name: 'Traditional Gold Bangle',
    category: 'bangles',
    price: 42000,
    brand: 'Wafrah Gold',
    description: 'Traditional 22K gold bangle with intricate design work.',
    images: [
      '/products/bangle1.jpg',
      '/products/bangle1-2.jpg'
    ],
    launchDate: '2024-10-10',
    onSale: false,
    visitCount: 110
  },
  {
    productId: 'BG002',
    name: 'Diamond Accent Bangle',
    category: 'bangles',
    price: 58000,
    brand: 'Wafrah Gold',
    description: 'Elegant 22K gold bangle with diamond accents.',
    images: [
      '/products/bangle2.jpg',
      '/products/bangle2-2.jpg'
    ],
    launchDate: '2024-11-25',
    onSale: false,
    visitCount: 90
  },
  {
    productId: 'BR001',
    name: 'Classic Chain Bracelet',
    category: 'bracelets',
    price: 32000,
    brand: 'Wafrah Gold',
    description: '22K gold chain bracelet with a secure clasp.',
    images: [
      '/products/bracelet1.jpg',
      '/products/bracelet1-2.jpg'
    ],
    launchDate: '2024-12-05',
    onSale: false,
    visitCount: 75
  },
  {
    productId: 'BR002',
    name: 'Diamond Tennis Bracelet',
    category: 'bracelets',
    price: 78000,
    brand: 'Wafrah Gold',
    description: 'Stunning 18K gold tennis bracelet with diamond accents.',
    images: [
      '/products/bracelet2.jpg',
      '/products/bracelet2-2.jpg'
    ],
    launchDate: '2024-10-15',
    onSale: true,
    visitCount: 130
  },
  {
    productId: 'CH001',
    name: 'Classic Gold Chain',
    category: 'chains',
    price: 35000,
    brand: 'Wafrah Gold',
    description: 'Classic 22K gold chain with a secure clasp.',
    images: [
      '/products/chain1.jpg',
      '/products/chain1-2.jpg'
    ],
    launchDate: '2024-11-10',
    onSale: false,
    visitCount: 100
  },
  {
    productId: 'CH002',
    name: 'Thick Rope Chain',
    category: 'chains',
    price: 48000,
    brand: 'Wafrah Gold',
    description: 'Thick 22K gold rope chain with a secure clasp.',
    images: [
      '/products/chain2.jpg',
      '/products/chain2-2.jpg'
    ],
    launchDate: '2024-09-20',
    onSale: false,
    visitCount: 85
  },
  {
    productId: 'PD001',
    name: 'Diamond Heart Pendant',
    category: 'pendants',
    price: 38000,
    brand: 'Wafrah Gold',
    description: 'Beautiful 18K gold heart pendant with diamond accents.',
    images: [
      '/products/pendant1.jpg',
      '/products/pendant1-2.jpg'
    ],
    launchDate: '2024-12-15',
    onSale: false,
    visitCount: 95
  },
  {
    productId: 'PD002',
    name: 'Religious Symbol Pendant',
    category: 'pendants',
    price: 28000,
    brand: 'Wafrah Gold',
    description: '22K gold religious symbol pendant with intricate details.',
    images: [
      '/products/pendant2.jpg',
      '/products/pendant2-2.jpg'
    ],
    launchDate: '2024-10-25',
    onSale: false,
    visitCount: 80
  },
  {
    productId: 'BD001',
    name: 'Complete Bridal Set',
    category: 'bridal',
    price: 250000,
    brand: 'Wafrah Gold',
    description: 'Complete 22K gold bridal set including necklace, earrings, bangles, and ring.',
    images: [
      '/products/bridal1.jpg',
      '/products/bridal1-2.jpg',
      '/products/bridal1-3.jpg'
    ],
    launchDate: '2024-11-01',
    onSale: false,
    visitCount: 200
  },
  {
    productId: 'BD002',
    name: 'Diamond Bridal Necklace Set',
    category: 'bridal',
    price: 180000,
    brand: 'Wafrah Gold',
    description: 'Stunning 22K gold bridal necklace set with diamond accents.',
    images: [
      '/products/bridal2.jpg',
      '/products/bridal2-2.jpg'
    ],
    launchDate: '2024-09-10',
    onSale: true,
    visitCount: 180
  }
];

// Function to get all products or filter by category
export function getMockProducts(options: { category?: string; sort?: string } = {}) {
  let filteredProducts = [...mockProducts];
  
  // Filter by category if provided
  if (options.category) {
    filteredProducts = filteredProducts.filter(
      product => product.category.toLowerCase() === options.category!.toLowerCase()
    );
  }
  
  // Sort products based on option
  if (options.sort === 'trending') {
    filteredProducts.sort((a, b) => b.visitCount - a.visitCount);
  } else {
    // Default sort by launch date (newest first)
    filteredProducts.sort((a, b) => 
      new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()
    );
  }
  
  return filteredProducts;
}

// Function to get a single product by ID
export function getMockProductById(productId: string) {
  return mockProducts.find(product => product.productId === productId);
}

export default mockProducts;
