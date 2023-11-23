import { Request, Response, response } from "express";
import { ImagesService } from "../services/imagesServices";

export const createImageController = async (req: Request, res: Response) => {
  try {
    if (!req.file?.path || !req.body.idElement) {
      throw new Error(
        `Not all required data sent: ${!req.file ? "file, " : ""}${
          !req.body.idElement ? "idElement" : ""
        }`
      );
    }
    console.log(req.file);
    const createdImage = await ImagesService.saveImage(
      req.file.path,
      req.body.idElement
    );
    res
      .status(201)
      .json({ message: "Imagen guardada correctamente", data: createdImage });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getImageController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const image = await ImagesService.getImageForId(id);
    console.log(image.src);
    res.sendFile(image.src);
  } catch (error) {}
};

export const delImageController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const image = await ImagesService.delImageForId(id);

    res.json({ message: image, status: 200 });
  } catch (error: any) {
    res.json({ message: error.message, status: 500 });
  }
};
