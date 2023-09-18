import { CartService } from '../service/CartService';
import ProductService from '../service/ProductService';

export class CartController {
  constructor(cartModel, productModel) {
    this.cartModel = cartModel;
    this.productModel = productModel;
    this.cartService = new CartService();
    this.productService = new ProductService();
  }

  // Method to get the list of products in the cart
  getProductsInCart() {
    const productsInCart = this.cartService.loadInitialDataInCart();
    this.cartModel.initProductsInCart(productsInCart);
  }

  /**
   * Method to decrease quantity in cart
   * @param {number} productId
   */
  decreaseQuantity(productId) {
    const latestCart = this.cartModel.decreaseQuantity(productId);
    this.cartService.save(latestCart);
    this.cartModel.calculateTotalValue(latestCart);
  }

  /**
   * Method to increase quantity in cart
   * @param {number} productId
   */
  increaseQuantity(productId) {
    const latestCart = this.cartModel.increaseQuantity(productId);
    this.cartService.save(latestCart);
    this.cartModel.calculateTotalValue(latestCart);
  }

  // Method retrieves a list of discount codes
  getListDiscounts() {
    const discounts = this.cartService.getListDiscounts();
    this.cartModel.getListDiscounts(discounts);
  }

  /**
   * Method checks the existence of a discount code
   * @param {string} promoCode
   * @returns
   */
  checkExistPromoCode(promoCode) {
    return this.cartModel.isAvailablePromo(promoCode);
  }

  /**
   * Method add product to cart.
   * @param {number} productId
   * @param {string} productName
   * @param {string} productImage
   * @param {number} productPrice
   */
  addToCart(productId, productName, productImage, productPrice) {
    const latestCart = this.cartModel.addToCart(productId, productName, productImage, productPrice);
    // Call the service to change the list after adding
    this.cartService.save(latestCart);
    this.cartModel.calculateTotalValue(latestCart);
  }

  /**
   * Checks if a product is present in the shopping cart.
   * @param {number} productId
   * @returns Returns true if the product is in the cart, otherwise returns false.
   */
  checkProductInCart(productId) {
    return this.cartModel.isAvailable(productId);
  }

  /**
   * Removes a product from the shopping cart and updates related data.
   * @param {number} productId
   */
  removeOutCart(productId) {
    const latestCart = this.cartModel.removeProduct(productId);
    this.cartService.save(latestCart);
    this.cartModel.calculateTotalValue(latestCart);
    const updateProduct = this.productService.loadInitialData();
    this.productModel.initProducts(updateProduct);
  }
}
