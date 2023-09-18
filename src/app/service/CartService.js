import { Data } from '../storages/Data';

export class CartService {
  constructor() {
    this.productData = new Data();
    this.productsInCart = this.productData.localStorageService.getListProductsInCart();
    this.allDiscount = this.productData.localStorageService.getListDiscounts();
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

  // Method retrieves a list of discount codes
  getListDiscounts() {
    return this.allDiscount;
  }
}
