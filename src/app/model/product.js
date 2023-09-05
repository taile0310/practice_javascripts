import Observable from './Observable';

class Product extends Observable {
  constructor() {
    super();
  }

  getListProducts() {
    return JSON.parse(localStorage.getItem('products')) || [];
  }
}

export { Product };
