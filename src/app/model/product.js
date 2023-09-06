import Observable from './Observable';
import { Data } from '../storages/Data';

class Product extends Observable {
  constructor() {
    super();
    this.loadInitialData();
  }

  loadInitialData() {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    this.products = storedProducts.slice(0, this.displayedListProduct);
  }

  getListProducts() {
    return this.products;
  }
}

export { Product };
