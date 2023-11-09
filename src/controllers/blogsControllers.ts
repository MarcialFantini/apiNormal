import { Request, Response } from "express";
import { BlogService } from "../services/blogsServices";
import { BlogInterface } from "../DB/models/blogModel";

export const createBlog = async (req: Request, res: Response) => {
  try {
    const data = req.body as BlogInterface;

    const responseBlog = await BlogService.createBlog(data);

    res.json(responseBlog);
  } catch (error) {
    res.json({ message: error, code: 500 });
  }
};

export const getBlogPage = async (req: Request, res: Response) => {
  try {
    const blog = await BlogService.getBlogById(req.params.id);

    res.json({ message: blog, code: 200 });
  } catch (error) {
    res.json({ message: error, code: 500 });
  }
};

export const delBlogForId = async (req: Request, res: Response) => {
  try {
    const id = await BlogService.deleteBlog(req.params.id);

    res.json({ message: id, code: 200 });
  } catch (error) {
    res.json({ message: error, code: 500 });
  }
};

export const patchBlogForId = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = req.body as BlogInterface;

    const patchBlog = await BlogService.updateBlog(id, body);

    res.json({ message: patchBlog, code: 200 });
  } catch (error) {
    res.json({ message: error, code: 500 });
  }
};
