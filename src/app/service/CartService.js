import { Product } from '../model/Product';
import { Data } from '../storages/Data';
import ProductService from './ProductService';

// Service
export class CartService {
  constructor() {
    this.productData = new Data();
    this.productsInCart = this.productData.localStorageService.getListProductsInCart();
  }

  // Method gets the original data
  loadInitialDataInCart() {
    return this.productsInCart;
  }

  /**
   * Method saves changes in cart
   * @param {Array} productsInCart
   */
  save(productsInCart) {
    localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
  }
}
