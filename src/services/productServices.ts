import { ProductInterface, ProductModel } from "../DB/models/productsModels";

export class ProductService {
  static async getProductById(id: string) {
    const product = await ProductModel.findById(id);
    return product;
  }

  static async getPageProduct(page: number, offset: number) {
    const products = await ProductModel.find({})
      .skip(page > 0 ? page * offset : 0)
      .limit(offset);
    return products;
  }

  static async createProduct(body: ProductInterface) {
    const newProduct = await ProductModel.create(body);
    return newProduct;
  }
  static async updateProductById(id: string, body: ProductInterface) {
    const newProduct = await ProductModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    return newProduct;
  }
  static async delProductById(id: string) {
    const delProduct = await ProductModel.findByIdAndDelete(id);
    return delProduct;
  }
}
