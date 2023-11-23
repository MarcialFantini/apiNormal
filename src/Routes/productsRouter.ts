import { Router } from "express";
import { ProductController } from "../controllers/productsControllers";

const productsRouter = Router();

// GET /products/:id
productsRouter.get("/:id", ProductController.getProductById);

// GET /products?page=<page>&offset=<offset>
productsRouter.get(
  "/page/:page/offset/:offset",
  ProductController.getPageProduct
);

// POST /products
productsRouter.post("/create/one", ProductController.createProduct);

// PUT /products/:id
productsRouter.patch("/:id", ProductController.updateProductById);

// DELETE /products/:id
productsRouter.delete("/:id", ProductController.delProductById);

export default productsRouter;
