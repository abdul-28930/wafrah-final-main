export interface Category {
  id: string;
  name: string;
  imageSrc: string;
  link: string;
}

export const categories: Category[] = [
  {
    id: 'necklaces',
    name: 'NECKLACES',
    imageSrc: '/categories/goldnecklace.jpg',
    link: '/collections/necklaces'
  },
  {
    id: 'earrings',
    name: 'EARRINGS',
    imageSrc: '/categories/goldearrings.jpg',
    link: '/collections/earrings'
  },
  {
    id: 'rings',
    name: 'RINGS',
    imageSrc: '/categories/goldrings.jpg',
    link: '/collections/rings'
  },
  {
    id: 'bangles',
    name: 'BANGLES',
    imageSrc: '/categories/goldbangles.jpg',
    link: '/women/bangles'
  },
  {
    id: 'bracelets',
    name: 'BRACELETS',
    imageSrc: '/categories/goldbracelets.jpg',
    link: '/collections/bracelets'
  },
  {
    id: 'pendants',
    name: 'PENDANTS',
    imageSrc: '/categories/goldpendants.jpg',
    link: '/collections/pendants'
  },
  {
    id: 'chains',
    name: 'CHAINS',
    imageSrc: '/categories/goldchain.jpg',
    link: '/collections/chains'
  },
  {
    id: 'bridal',
    name: 'BRIDAL COLLECTION',
    imageSrc: '/categories/goldbridal.jpg',
    link: '/women/bridal'
  }
];

export const storeLocations: Category[] = [
  {
    id: 'delhi',
    name: 'DELHI',
    imageSrc: '/stores/delhi.jpg',
    link: '/stores/delhi'
  },
  {
    id: 'hyderabad',
    name: 'HYDERABAD',
    imageSrc: '/stores/hyderabad.jpg',
    link: '/stores/hyderabad'
  },
  {
    id: 'mumbai',
    name: 'MUMBAI',
    imageSrc: '/stores/mumbai.jpg',
    link: '/stores/mumbai'
  },
  {
    id: 'bangalore',
    name: 'BANGALORE',
    imageSrc: '/stores/bangalore.jpg',
    link: '/stores/bangalore'
  }
];
