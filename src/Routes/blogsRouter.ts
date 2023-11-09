import { Router } from "express";
import { createBlog } from "../controllers/blogsControllers";

const blogRouter = Router();

blogRouter.post("/one/create", createBlog);

export { blogRouter };
