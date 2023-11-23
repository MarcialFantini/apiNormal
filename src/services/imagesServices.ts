import { imageModel } from "../DB/models/imagesModel";
import * as fsPromises from "fs/promises";

export class ImagesService {
  static async saveImage(src: string, idElement: string) {
    console.log(!src || !idElement);

    if (!src || !idElement) {
      throw new Error(
        `not SEND ${!src ? "src " : ""}${!idElement ? "idElement" : ""}`
      );
    }

    const blog = await imageModel.create({ idElement, src });
    return blog;
  }

  static async getImageForId(id?: string) {
    if (!id) {
      throw new Error("ID not SEND");
    }

    const image = await imageModel.findById(id);

    if (!image) {
      throw new Error("image not Found");
    }

    return image;
  }

  static async delImageForId(id?: string) {
    if (!id) {
      throw new Error("ID not SEND");
    }

    const image = await imageModel.findByIdAndDelete(id);

    if (!image) {
      throw new Error("Image not Found");
    }

    await fsPromises.unlink(image.src);

    return "deleted image";
  }
}
