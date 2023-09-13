import { Product } from '../model/Product';
import { Data } from '../storages/Data';
import ProductService from './ProductService';

// Service
export class CartService {
  constructor() {
    this.productData = new Data();

    this.productsInCart = this.productData.localStorageService.getListProductsInCart();
  }

  loadInitialDataInCart() {
    return this.productsInCart;
  }
}
