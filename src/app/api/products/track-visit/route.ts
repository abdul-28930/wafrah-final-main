import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Product from '@/models/Product';

export async function POST(request: Request) {
  try {
    const { productId } = await request.json();
    
    if (!productId) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      );
    }

    await connectToDatabase();

    // Update visit count and last visited timestamp
    await Product.findOneAndUpdate(
      { productId },
      {
        $inc: { visitCount: 1 },
        lastVisited: new Date()
      }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error tracking product visit:', error);
    return NextResponse.json(
      { error: 'Failed to track product visit' },
      { status: 500 }
    );
  }
}
