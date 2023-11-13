import { Router } from "express";
import {
  createBlog,
  delBlogForId,
  getBlogById,
  getPageBlogs,
  patchBlogForId,
} from "../controllers/blogsControllers";

const blogRouter = Router();

//blog general

blogRouter.post("/one/create", createBlog);
blogRouter.get("/one/:id", getBlogById);
blogRouter.get("/page/:page/:amount", getPageBlogs);
blogRouter.patch("/one/:id", patchBlogForId);
blogRouter.delete("/one/:id", delBlogForId);

//blog texts operations

blogRouter.post("/text/push/:");

export { blogRouter };
