import mongoose, { Document } from 'mongoose';

export interface IProduct extends Document {
  productId: string;
  name: string;
  category: string;
  price: number;
  brand: string;
  description?: string;
  images: string[];
  launchDate: Date;
  onSale: boolean;
  visitCount: number;
  lastVisited: Date;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: [true, 'Please provide a product ID'],
    unique: true,
    trim: true
  },
  name: {
    type: String,
    required: [true, 'Please provide a product name'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Please provide a category'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price'],
    min: [0, 'Price cannot be negative']
  },
  brand: {
    type: String,
    required: [true, 'Please provide a brand name'],
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  images: {
    type: [String],
    required: true,
    validate: {
      validator: function(v: string[]) {
        return v.length > 0;
      },
      message: 'At least one image is required'
    }
  },
  launchDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  onSale: {
    type: Boolean,
    default: false
  },
  visitCount: {
    type: Number,
    default: 0,
    min: 0
  },
  lastVisited: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
});

// Create indexes for efficient querying
ProductSchema.index({ category: 1 });
ProductSchema.index({ launchDate: -1 });
ProductSchema.index({ visitCount: -1, lastVisited: -1 });
ProductSchema.index({ onSale: 1 });
// Removed duplicate index on productId as it's already defined in the schema with unique: true

// Ensure visitCount is never negative
ProductSchema.pre('save', function(next) {
  if (this.visitCount < 0) {
    this.visitCount = 0;
  }
  next();
});

// Check if the model is already defined to prevent overwriting during hot reloads
export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
