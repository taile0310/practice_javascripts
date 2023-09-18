import Observable from './Observable';

export class Cart extends Observable {
  constructor() {
    super();
    this.productsInCart = [];
    this.discounts = [];
  }

  /**
   * Method gets the original data
   * @param {Array} productsInCart
   */
  initProductsInCart(productsInCart) {
    this.productsInCart = productsInCart;
    this.notify(this.productsInCart);
  }

  /**
   * Check product existence
   * @param {number} productId
   * @returns Returns true if the product exists in the cart, otherwise returns false.
   */
  isAvailable(productId) {
    this.productIdExis = this.productsInCart.find((product) => product.id === +productId);
    return this.productIdExis;
  }

  /**
   * Method remove product from cart
   * @param {number} productId
   * @returns {Array} Returns an array of products after removing products with corresponding codes.
   */
  removeProduct(productId) {
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
    this.productsInCart.push({
      id: +productId,
      quantity: 1,
      name: productName,
      image: productImage,
      totalPrice: +productPrice,
      total: +productPrice,
    });
    this.notify(this.productsInCart);
    return this.productsInCart;
  }

  /**
   * Method increases the number of products
   * @param {number} productId
   * @returns {Array} Array of products after increasing quantity.
   */
  increaseQuantity(productId) {
    this.productsInCart.find((product) => {
      if (product.id === +productId) {
        product.quantity += 1;
        product.total += product.totalPrice;
      }
    });
    this.notify(this.productsInCart);
    return this.productsInCart;
  }

  /**
   * Method decreases the number of products
   * @param {number} productId
   * @returns {Array} Array of products after quantity reduction.
   */
  decreaseQuantity(productId) {
    const product = this.productsInCart.find((product) => product.id === +productId);
    if (product) {
      if (product.quantity > 1) {
        product.quantity -= 1;
        product.total -= product.totalPrice;
      } else {
        alert('The quantity cannot be less than 1');
      }
    }
    this.notify(this.productsInCart);
    return this.productsInCart;
  }

  /**
   * Checks the existence of a discount code in the shopping cart.
   * @param {*} productsInCart
   * @returns {Object | undefined} - Returns the discount object if found, or undefined if not found.
   */
  calculateTotalValue(productsInCart) {
    this.totalValue = productsInCart.reduce((total, product) => total + product.total, 0);
    this.notify(this.productsInCart);
    return this.totalValue;
  }

  /**
   * Get a list of discount codes
   * @param {Array} discounts - An array of discount objects.
   * @returns {Array} - Returns the list of discounts.
   */
  getListDiscounts(discounts) {
    this.discounts = discounts;
    return this.discounts;
  }

  /**
   * Check if the discount code exists
   * @param {string} promoCode - The promo code to check.
   * @returns {Object | undefined} Returns the discount object if found, or undefined if not found.
   */
  isAvailablePromo(promoCode) {
    this.discountCode = this.discounts.find((discount) => discount.code === promoCode);
    this.totalValue =
      this.totalValue - (this.totalValue * this.discountCode.percentReduction) / 100;
    this.notify(this.productsInCart);
    return this.discountCode;
  }
}
