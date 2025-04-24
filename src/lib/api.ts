// API utility functions for interacting with the backend
import { getMockProducts, getMockProductById } from '@/data/mockProducts';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';
const USE_MOCK_DATA = process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';
/**
 * Helper function to get base URL for API calls
 */
const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    // Browser should use relative path
    return '';
  }
  // Server should use NEXT_PUBLIC_API_URL
  return process.env.NEXT_PUBLIC_API_URL || 'https://goldstore-wafrah.vercel.app';
};

/**
 * Fetch all products or filter by category
 */
export async function getProducts(options: { sort?: string; category?: string } = {}) {
  // Use mock data if enabled or in development mode
  if (USE_MOCK_DATA) {
    console.log('Using mock product data asdf');
    const mock = getMockProducts(options);   
    return Array.isArray(mock) ? mock : [];
  }

  try {
    const queryParams = new URLSearchParams();
    if (options.sort) queryParams.set('sort', options.sort);
    if (options.category) queryParams.set('category', options.category);

    const queryString = queryParams.toString();
    const url = `${getBaseUrl()}/api/products${queryString ? `?${queryString}` : ''}`;

    const response = await fetch(url, { 
      cache: 'no-store',
      next: { revalidate: 60 }
    });

    const data = await response.json();
    console.log("📦 Raw API response:", data);

    if (!data.success) {
      throw new Error(data.error || 'Failed to fetch products');
    }

    // ✅ Fix is here
    return Array.isArray(data.products) ? data.products : [];
  } catch (error) {
    console.error('Error in getProducts:', error);

    if (process.env.NODE_ENV === 'development') {
      console.log('Falling back to mock product data');
      return getMockProducts(options);
    }

    return [];
  }
}

/**
 * Fetch a single product by ID
 */
export async function getProductById(productId: string) {
  // Use mock data if enabled or in development mode
  if (USE_MOCK_DATA) {

    console.log('Using mock product data');
    console.log("no")
    return getMockProductById(productId);
  }

  try {
    const response = await fetch(`${getBaseUrl()}/api/products/${productId}`, {
      cache: 'no-store',
      next: { revalidate: 60 } // Revalidate every 60 seconds
    });
    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error || 'Failed to fetch product');
    }

    // Track the visit asynchronously
    trackProductVisit(productId).catch(console.error);

    return data.data;
  } catch (error) {
    console.error('Error in getProductById:', error);
    
    // Fallback to mock data if API fails
    if (process.env.NODE_ENV === 'development') {
      console.log('Falling back to mock product data');
      return getMockProductById(productId);
    }
    
    return null;
  }
}

/**
 * Track a product visit
 */
export async function trackProductVisit(productId: string) {
  try {
    const response = await fetch(`${getBaseUrl()}/api/products/track-visit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId }),
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error || 'Failed to track product visit');
    }

    return data.data;
  } catch (error) {
    console.error('Error in trackProductVisit:', error);
    return null;
  }
}

/**
 * Create a new product
 */
export async function createProduct(productData: any) {
  try {
    const response = await fetch(`${getBaseUrl()}/api/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error || 'Failed to create product');
    }

    return data.data;
  } catch (error) {
    console.error('Error in createProduct:', error);
    throw error;
  }
}

/**
 * Update an existing product
 */
export async function updateProduct(productId: string, productData: any) {
  try {
    const response = await fetch(`${getBaseUrl()}/api/products/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error || 'Failed to update product');
    }

    return data.data;
  } catch (error) {
    console.error('Error in updateProduct:', error);
    throw error;
  }
}

/**
 * Delete a product
 */
export async function deleteProduct(productId: string) {
  try {
    const response = await fetch(`${getBaseUrl()}/api/products/${productId}`, {
      method: 'DELETE',
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error || 'Failed to delete product');
    }

    return data.data;
  } catch (error) {
    console.error('Error in deleteProduct:', error);
    throw error;
  }
}

/**
 * Upload product images
 */
/**
 * Upload product images to Cloudinary and link to product by ID
 */
export async function uploadImages(files: File[]) {
  try {
    const url = new URL('/api/upload', process.env.NEXT_PUBLIC_API_URL || window.location.origin);
    const formData = new FormData();
    files.forEach(file => formData.append('files', file));

    const res = await fetch(url.toString(), {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      const { error } = await res.json();
      throw new Error(error || 'Failed to upload images');
    }

    const { data } = await res.json(); // data = array of Cloudinary URLs
    return data;
  } catch (error) {
    console.error('Error uploading images:', error);
    throw error;
  }
}
