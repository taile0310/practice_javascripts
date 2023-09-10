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
    this.cartItems = this.getProductsInCart();
  }

  loadInitialData() {
    this.productData = new Data();
    this.allProducts = this.productData.getListProducts();
    this.products = this.allProducts.slice(0, this.displayedListProduct);
  }

  getListProducts() {
    return this.products;
  }

  getProductsInCart() {
    return JSON.parse(localStorage.getItem('productsInCart')) || [];
  }

  loadMoreData() {
    const startIndex = this.products.length;
    const endIndex = startIndex + this.productsNext;

    if (startIndex >= this.allProducts.length) {
      this.checkProductExists = true;
      return;
    }

    const loadProducts = this.allProducts.slice(startIndex, endIndex);

    this.products.push(...loadProducts);

    this.notify(this.products);
  }
}

export { Product };
