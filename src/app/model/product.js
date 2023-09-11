import Observable from './Observable';
import ProductService from '../service/ProductService';

class Product extends Observable {
  constructor() {
    super();
    this.products = [];
    this.checkProductExists = false;
    this.productService = new ProductService();
  }

  getListProducts() {
    this.products = this.productService.loadInitialData();
    return this.products;
  }

  loadMoreData() {
    const { products: updatedProducts, checkProductExists } = this.productService.loadMoreProducts(
      this.products,
    );

    this.products = updatedProducts;
    this.checkProductExists = checkProductExists;

    this.notify(this.products);
  }
}

export { Product };
