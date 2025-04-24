import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Product from '@/models/Product';
import { getMockProductById } from '@/data/mockProducts';

const isDev = () => process.env.NODE_ENV?.trim() === 'development';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) : Promise<NextResponse> {
  const { productId } = await params;
  try {
    await connectToDatabase();
    const product = await Product.findOne({ productId }).lean().exec();

    if (!product) {
      return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
    }

    await Product.findOneAndUpdate(
      { productId },
      { $inc: { visitCount: 1 }, $set: { lastVisited: new Date() } }
    ).exec();

    return NextResponse.json({ success: true, data: product });
  } catch (error: any) {
    if (isDev()) {
      const mockProduct = getMockProductById(productId);
      if (mockProduct) {
        return NextResponse.json({ success: true, data: mockProduct });
      }
    }
    return NextResponse.json({ success: false, error: 'Server error', details: error.message }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) {
  const { productId } = await params;
  try {
    const data = await req.json();
    await connectToDatabase();

    const product = await Product.findOneAndUpdate(
      { productId },
      { $set: data },
      { new: true, runValidators: true }
    ).exec();

    if (!product) {
      return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: product });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) {
  const { productId } = await params;
  try {
    await connectToDatabase();
    const product = await Product.findOneAndDelete({ productId }).exec();

    if (!product) {
      return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: {} });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}