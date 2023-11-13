import { Router } from "express";
import {
  addTextBlogById,
  createBlog,
  delBlogForId,
  delTextBlogById,
  getBlogById,
  getPageBlogs,
  patchBlogForId,
  updateTextBlogById,
} from "../controllers/blogsControllers";

const blogRouter = Router();

//blog general

blogRouter.post("/one/create", createBlog);
blogRouter.get("/one/:id", getBlogById);
blogRouter.get("/page/:page/:amount", getPageBlogs);
blogRouter.patch("/one/:id", patchBlogForId);
blogRouter.delete("/one/:id", delBlogForId);

//blog texts operations

blogRouter.post("/one/text/create/:id", addTextBlogById);
blogRouter.patch("/one/text/update/:id", updateTextBlogById);
blogRouter.delete("/one/text/del/:id", delTextBlogById);

export { blogRouter };
