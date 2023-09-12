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

  setProductsInCart(productsInCart) {
    debugger;
    this.productsInCart = productsInCart;
    this.notify(this.productsInCart);
  }

  isAvailable(productId) {
    return this.productsInCart.includes(productId);
  }

  removeProduct(productId) {
    this.productsInCart = this.productsInCart.filter(product => product.id !== productId);
    this.notify(this.productsInCart);
    return this.productsInCart;
  }

  addToCart(productId) {
    this.productsInCart.push({
      productId: productId,
      quantity: 1
    })
    this.notify(this.productsInCart);
    return this.productsInCart;
  }
}
