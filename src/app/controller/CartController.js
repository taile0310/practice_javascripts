import { Discount } from '../model/Discount';
import { CartService } from '../service/CartService';
import DiscountService from '../service/DiscountService';

export class CartController {
  constructor(modelCart) {
    this.modelCart = modelCart;
    this.cartService = new CartService();
    this.modelDiscount = new Discount();
    this.discountService = new DiscountService();
  }

  // Method to get the list of products in the cart
  getProductsInCart() {
    const productsInCart = this.cartService.loadInitialDataInCart();
    this.modelCart.initProductsInCart(productsInCart);
  }

  /**
   * Method to decrease quantity in cart
   * @param {number} productId
   */
  decreaseQuantity(productId) {
    // debugger;
    const latestCart = this.modelCart.decreaseQuantity(productId);
    this.cartService.save(latestCart);
  }

  /**
   * Method to increase quantity in cart
   * @param {number} productId
   */
  increaseQuantity(productId) {
    // debugger;
    const latestCart = this.modelCart.increaseQuantity(productId);
    this.cartService.save(latestCart);
  }

  /**
   * Method to delete products in cart
   * @param {number} productId
   */
  removeProductFromCart(productId) {
    // debugger;
    const latestCart = this.modelCart.removeProduct(productId);
    this.cartService.save(latestCart);
  }

  // Method retrieves a list of discount codes
  getListDiscounts() {
    const discounts = this.discountService.getListDiscounts();
    this.modelDiscount.getListDiscounts(discounts);
  }

  /**
   * Method checks the existence of a discount code
   * @param {string} promoCode
   * @returns
   */
  checkExistPromoCode(promoCode) {
    return this.modelDiscount.isAvailable(promoCode);
  }
}
