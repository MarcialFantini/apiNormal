import { Schema, model } from "mongoose";

export interface BlogInterface {
  title: string;
  subTitle: string;
  texts: string[];
  picture: string[];
}

const blogSchema = new Schema<BlogInterface>({
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  texts: { type: [String], required: true },
  picture: { type: [String], required: true },
});

export const BlogModel = model<BlogInterface>("Blog", blogSchema);
