import { BlogInterface, BlogModel } from "../DB/models/blogModel";

export class BlogService {
  static async createBlog(blogData: BlogInterface) {
    try {
      const newBlog = new BlogModel(blogData);
      const savedBlog = await newBlog.save();
      return savedBlog;
    } catch (error) {
      throw new Error(`Error al crear el blog: ${error}`);
    }
  }

  static async getBlogById(blogId: string) {
    try {
      const blog = await BlogModel.findById(blogId);
      return blog;
    } catch (error) {
      throw new Error(`Error al obtener el blog: ${error}`);
    }
  }

  static async updateBlog(blogId: string, updateData: Partial<BlogInterface>) {
    try {
      const updatedBlog = await BlogModel.findByIdAndUpdate(
        blogId,
        updateData,
        {
          new: true,
        }
      );
      return updatedBlog;
    } catch (error) {
      throw new Error(`Error al actualizar el blog: ${error}`);
    }
  }

  static async deleteBlog(blogId: string) {
    try {
      const deletedBlog = await BlogModel.findByIdAndRemove(blogId);
      return deletedBlog;
    } catch (error) {
      throw new Error(`Error al eliminar el blog: ${error}`);
    }
  }
}
