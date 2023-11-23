import { Schema, model } from "mongoose";

export interface ImagesModelInterface {
  idElement: string;
  src: string;
}

const schemaImage = new Schema<ImagesModelInterface>({
  idElement: { type: String, required: true },
  src: { type: String, required: true },
});

export const imageModel = model("Images", schemaImage);
