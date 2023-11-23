import { Schema, model } from "mongoose";

export interface ProductInterface {
  name: string;
  price: number;
  description: string;
  category: string;
  stock: number;
}

const productSchema = new Schema<ProductInterface>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  stock: { type: Number, required: true },
});

export const ProductModel = model<ProductInterface>("Product", productSchema);
