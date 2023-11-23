import { Router } from "express";
import { upload } from "../utils/multer";
import {
  createImageController,
  delImageController,
  getImageController,
} from "../controllers/imagesControllers";

const imagesRouter = Router();

imagesRouter.post("/create/one", upload.single("image"), createImageController);

imagesRouter.get("/one/:id", getImageController);

imagesRouter.delete("/one/:id", delImageController);

export { imagesRouter };
