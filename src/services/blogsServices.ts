import { BlogInterface, BlogModel } from "../DB/models/blogModel";

export class BlogService {
  static async createBlog(blogData: BlogInterface) {
    const newBlog = new BlogModel(blogData);
    const savedBlog = await newBlog.save();
    return savedBlog;
  }

  static async getBlogById(blogId: string) {
    const blog = await BlogModel.findById(blogId);
    return blog;
  }

  static async getPageBlogs(page: number, amount: number) {
    const data = await BlogModel.find({})
      .limit(amount)
      .skip(page < 0 ? 0 : page * amount);
    return data;
  }

  static async updateBlog(blogId: string, updateData: Partial<BlogInterface>) {
    const updatedBlog = await BlogModel.findByIdAndUpdate(blogId, updateData, {
      new: true,
    });
    return updatedBlog;
  }

  static async addTextBlog(blogId: string, text: string) {
    const updateBlog = await BlogModel.findByIdAndUpdate(
      blogId,
      {
        $push: { texts: text },
      },
      { new: true }
    );

    return updateBlog;
  }

  static async delTextBlog(blogId: string, text: string) {
    const updateBlog = await BlogModel.findByIdAndUpdate(
      blogId,
      {
        $pull: { texts: text },
      },
      { new: true }
    );
    return updateBlog;
  }

  static async updateTextBlog(
    blogId: string,
    oldText: string,
    newText: string
  ) {
    const updateBlog = await BlogModel.findById(blogId);
    if (!updateBlog) {
      throw new Error("Blog NOT Found");
    }
    const indexBlog = updateBlog.texts.findIndex((item) => {
      return item === oldText;
    });
    if (!updateBlog.texts[indexBlog]) {
      throw new Error("Text NOT Found");
    }
    updateBlog.texts[indexBlog] = newText;
    await updateBlog.save();
    return updateBlog;
  }

  static async deleteBlog(blogId: string) {
    const deletedBlog = await BlogModel.findByIdAndDelete(blogId);
    if (!deletedBlog) {
      throw new Error("blog to DELETE not Found");
    }
    return deletedBlog;
  }
}
