import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const files = formData.getAll('files') as File[];

    if (!files || files.length === 0) {
      return NextResponse.json({ success: false, message: 'No files uploaded.' }, { status: 400 });
    }

    const uploadedImageUrls: string[] = [];

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const base64 = `data:${file.type};base64,${buffer.toString('base64')}`;

      const cloudinaryRes = await cloudinary.uploader.upload(base64, {
        folder: 'product-images',
      });

      uploadedImageUrls.push(cloudinaryRes.secure_url);
    }

    return NextResponse.json({
      success: true,
      message: `Uploaded ${uploadedImageUrls.length} image(s) successfully.`,
      data: uploadedImageUrls, // return to frontend
    });

  } catch (error) {
    console.error('Upload Error:', error);
    return NextResponse.json({ success: false, message: 'Upload failed.' }, { status: 500 });
  }
}