import { Application, Router } from "express";
import { blogRouter } from "./blogsRouter";
import { imagesRouter } from "./imagesRouter";
import productsRouter from "./productsRouter";

export const setApiRouter = (app: Application) => {
  const router_v1 = Router();

  router_v1.use("/blogs", blogRouter);
  router_v1.use("/images", imagesRouter);
  router_v1.use("/products", productsRouter);
  app.use("/api/v1", router_v1);
};
