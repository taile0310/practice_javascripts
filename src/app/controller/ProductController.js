import { CartService } from '../service/CartService';
import ProductService from '../service/ProductService';

class ProductController {
  constructor(productModel) {
    this.productModel = productModel;
    this.productService = new ProductService();
    this.cartService = new CartService();
  }

  // Method gets the initial product list
  loadInitialData() {
    const products = this.productService.loadInitialData();
    this.productModel.initProducts(products);
  }

  // Method to load additional product data
  loadMoreData() {
    const newItems = this.productService.loadMoreData();
    this.productModel.addMoreProducts(newItems);
  }
}

export { ProductController };
