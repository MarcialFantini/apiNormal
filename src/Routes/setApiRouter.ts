import { Application, Router } from "express";
import { blogRouter } from "./blogsRouter";

export const setApiRouter = (app: Application) => {
  const router_v1 = Router();

  router_v1.use("/blogs", blogRouter);

  app.use("/api/v1", router_v1);
};
