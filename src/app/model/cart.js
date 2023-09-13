import Observable from './Observable';

export class Cart extends Observable {
  constructor() {
    super();
    this.productsInCart = [];
  }

  initProductsInCart() {
    this.productsInCart = JSON.parse(localStorage.getItem('productsInCart')) || [];
    this.notify(this.productsInCart);
  }
}
