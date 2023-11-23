import { Request, Response } from "express";
import { ProductService } from "../services/productServices";

export class ProductController {
  static async getProductById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await ProductService.getProductById(id);
      res.json(product);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
  static async getPageProduct(req: Request, res: Response) {
    try {
      const { page, offset } = req.params;
      const products = await ProductService.getPageProduct(
        Number(page),
        Number(offset)
      );
      res.json(products);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
  static async createProduct(req: Request, res: Response) {
    try {
      const newProduct = await ProductService.createProduct(req.body);
      res.json(newProduct);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
  static async updateProductById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updatedProduct = await ProductService.updateProductById(
        id,
        req.body
      );
      res.json(updatedProduct);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
  static async delProductById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedProduct = await ProductService.delProductById(id);
      res.json(deletedProduct);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
