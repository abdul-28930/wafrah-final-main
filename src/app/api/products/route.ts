import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Product from '@/models/Product';
import { SortOrder } from 'mongoose';
import { getMockProducts } from '@/data/mockProducts';

// Helper function to check if we're in development mode
const isDevelopment = () => process.env.NODE_ENV === 'development';

// GET all products
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const sort = searchParams.get('sort');
    const useMockData = process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';

    // If mock data is enabled and we're in development, return mock products
    if (useMockData) {
      console.log('Using mock product data this is ');
      const mockProducts = getMockProducts({
        category: category ?? undefined,
        sort: sort ?? undefined
      });
      
      // Apply sorting to mock data if needed
      let sortedProducts = [...mockProducts];
      if (sort === 'trending') {
        sortedProducts.sort((a, b) => (b.visitCount ?? 0) - (a.visitCount ?? 0));
      } else if (sort === 'price-asc') {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sort === 'price-desc') {
        sortedProducts.sort((a, b) => b.price - a.price);
      } else {
        // Default sort by newest
        sortedProducts.sort((a, b) => {
          const dateA = a.launchDate ? new Date(a.launchDate).getTime() : 0;
          const dateB = b.launchDate ? new Date(b.launchDate).getTime() : 0;
          return dateB - dateA;
        });
      }
      
      return NextResponse.json({ success: true, products: sortedProducts });
    }

    // Connect to database with better error handling and timeout
    let dbConnected = false;
    try {
      const connectPromise = connectToDatabase();
      
      // Add timeout to database connection
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Database connection timeout')), 15000);
      });
      
      await Promise.race([connectPromise, timeoutPromise]);
      dbConnected = true;
    } catch (dbError: any) {
      console.error('MongoDB connection error:', dbError);
      
      // If in development mode, fall back to mock data
      if (isDevelopment()) {
        console.log('Falling back to mock product data after connection error');
        const mockProducts = getMockProducts({
          category: category ?? undefined,
          sort: sort ?? undefined
        });
        return NextResponse.json({ 
          success: true, 
          products: mockProducts,
          warning: 'Using mock data due to database connection issues'
        });
      }
      
      return NextResponse.json(
        { 
          success: false, 
          error: 'Database connection failed. Please try again later.',
          details: isDevelopment() ? dbError.message : undefined
        },
        { status: 503 }
      );
    }

    if (!dbConnected) {
      return NextResponse.json(
        { success: false, error: 'Database connection failed' },
        { status: 503 }
      );
    }

    let query: Record<string, any> = {};
    if (category) {
      query = { category };
    }

    let sortOptions: Record<string, SortOrder> = {};
    if (sort === 'trending') {
      // Get products with visits in the last 30 days
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      
      query = {
        ...query,
        lastVisited: { $gte: thirtyDaysAgo },
        visitCount: { $gt: 0 }
      };
      
      // Sort by visit count (descending) and last visited date (descending)
      sortOptions = { 
        visitCount: -1,
        lastVisited: -1 
      };
    } else if (sort === 'price-asc') {
      sortOptions = { price: 1 };
    } else if (sort === 'price-desc') {
      sortOptions = { price: -1 };
    } else {
      // Default sort by launch date (descending)
      sortOptions = { launchDate: -1 };
    }

    // Add timeout to database query
    const queryPromise = Product.find(query).sort(sortOptions).lean();
    const queryTimeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Database query timeout')), 5000);
    });

    try {
      const products = await Promise.race([queryPromise, queryTimeoutPromise]);
      return NextResponse.json({ success: true, products });
    } catch (queryError: any) {
      console.error('Database query error:', queryError);
      
      // If in development mode, fall back to mock data
      if (isDevelopment()) {
        console.log('Falling back to mock product data after query error');
        const mockProducts = getMockProducts({
          category: category ?? undefined,
          sort: sort ?? undefined
        });
        return NextResponse.json({ 
          success: true, 
          products: mockProducts,
          warning: 'Using mock data due to database query issues'
        });
      }
      
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to retrieve products. Please try again later.',
          details: isDevelopment() ? queryError.message : undefined
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Unexpected error in GET /api/products:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected error occurred',
        details: isDevelopment() ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// POST create a new product
export async function POST(req: NextRequest) {
  try {
    // Connect to database with better error handling
    try {
      await connectToDatabase();
    } catch (dbError: any) {
      console.error('MongoDB connection error:', dbError);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Database connection failed. Please try again later.',
          details: isDevelopment() ? dbError.message : undefined
        },
        { status: 503 }
      );
    }

    const body = await req.json();
    
    // Validate required fields
    const requiredFields = ['name', 'category', 'price'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Generate a unique productId if not provided
    if (!body.productId) {
      const timestamp = new Date().getTime();
      const randomStr = Math.random().toString(36).substring(2, 8);
      body.productId = `PROD-${timestamp}-${randomStr}`;
    }

    // Set default values for optional fields
    body.visitCount = body.visitCount ?? 0;
    body.launchDate = body.launchDate ?? new Date();
    
    // Create the product
    const product = await Product.create(body);
    return NextResponse.json({ success: true, product }, { status: 201 });
  } catch (error: any) {
    console.error('Error in POST /api/products:', error);
    
    // Check for duplicate key error
    if (error.code === 11000) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'A product with this ID already exists',
          details: isDevelopment() ? error.message : undefined
        },
        { status: 409 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create product',
        details: isDevelopment() ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
