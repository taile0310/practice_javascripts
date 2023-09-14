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

  /**
   * Check product existence
   * @param {number} productId
   * @returns Returns true if the product exists in the cart, otherwise returns false.
   */
  isAvailable(productId) {
    debugger;
    this.productIdExis = this.productsInCart.some((product) => product.id === +productId);
    return this.productIdExis;
  }

  /**
   * Method remove product from cart
   * @param {number} productId
   * @returns {Array} Returns an array of products after removing products with corresponding codes.
   */
  removeProduct(productId) {
    debugger;
    this.productsInCart = this.productsInCart.filter((product) => product.id !== +productId);
    this.notify(this.productsInCart);
    return this.productsInCart;
  }

  /**
   * Method to add products to cart
   * @param {number} productId
   * @param {string} productName
   * @param {string} productImage
   * @param {number} productPrice
   * @returns {Array} Returns an array of products
   */
  addToCart(productId, productName, productImage, productPrice) {
    debugger;
    this.productsInCart.push({
      id: +productId,
      quantity: 1,
      name: productName,
      image: productImage,
      totalPrice: +productPrice,
    });
    this.notify(this.productsInCart);
    return this.productsInCart;
  }
}
