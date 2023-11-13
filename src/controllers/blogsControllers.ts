import { Request, Response } from "express";
import { BlogService } from "../services/blogsServices";
import { BlogInterface } from "../DB/models/blogModel";

export const createBlog = async (req: Request, res: Response) => {
  try {
    const data = req.body as BlogInterface;
    const responseBlog = await BlogService.createBlog(data);
    res.json(responseBlog);
  } catch (error: any) {
    res.json({ message: error.message, code: 500 });
  }
};

export const getBlogById = async (req: Request, res: Response) => {
  try {
    const blog = await BlogService.getBlogById(req.params.id);
    res.json({ message: blog, code: 200 });
  } catch (error: any) {
    res.json({ message: error.message, code: 500 });
  }
};

export const getPageBlogs = async (req: Request, res: Response) => {
  try {
    const page = Number(req.params.page);
    const amount = Number(req.params.amount);

    const pageBlog = await BlogService.getPageBlogs(page, amount);

    res.status(200).json({ message: pageBlog, code: 200 });
  } catch (error: any) {
    res.json({ message: error.message, code: 500 });
  }
};

export const delBlogForId = async (req: Request, res: Response) => {
  try {
    const id = await BlogService.deleteBlog(req.params.id);
    res.json({ message: id, code: 200 });
  } catch (error: any) {
    res.json({ message: error.message, code: 500 });
  }
};

export const patchBlogForId = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = req.body as BlogInterface;
    const patchBlog = await BlogService.updateBlog(id, body);
    res.json({ message: patchBlog, code: 200 });
  } catch (error: any) {
    res.json({ message: error.message, code: 500 });
  }
};

export const addTextBlogById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const text = req.body.text;
    const newBlog = await BlogService.addTextBlog(id, text);
    res.json({ message: newBlog, status: 200 });
  } catch (error: any) {
    res.json({ message: error.message, status: 500 });
  }
};

export const updateTextBlogById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const oldText = req.body.oldText;
    const newText = req.body.newText;
    const newBlog = await BlogService.updateTextBlog(id, oldText, newText);
    res.json({ message: newBlog, status: 200 });
  } catch (error: any) {
    res.json({ message: error.message, status: 500 });
  }
};

export const delTextBlogById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const textOld = req.body.textOld;
    const newBlog = await BlogService.delTextBlog(id, textOld);
    res.json({ message: newBlog, status: 200 });
  } catch (error: any) {
    res.json({ message: error.message, status: 500 });
  }
};
