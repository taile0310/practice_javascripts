import Observable from './Observable';
import { Data } from '../storages/Data';

class Product extends Observable {
  constructor() {
    super();
    this.products = [];
    this.displayedListProduct = 8;
    this.productsNext = 4;
    this.checkProductExists = false;
    this.loadInitialData();
  }

  loadInitialData() {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    this.products = storedProducts.slice(0, this.displayedListProduct);
  }

  getListProducts() {
    return this.products;
  }

  loadMore() {
    this.loadMoreData();
    this.notify(this.products);
  }

  loadMoreData() {
    const productData = new Data();
    const allProducts = productData.getListProducts();
    const startIndex = this.products.length;
    const endIndex = startIndex + this.productsNext;

    // Check if the product is still there
    if (startIndex >= allProducts.length) {
      this.checkProductExists = true;
    }

    const loadProducts = allProducts.slice(startIndex, endIndex);

    this.products = [...this.products, ...loadProducts];

    this.notify(this.products);
  }
}

export { Product };
