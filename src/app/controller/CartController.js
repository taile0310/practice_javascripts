import { Discount } from '../model/Discount';
import { Product } from '../model/Product';
import { CartService } from '../service/CartService';
import DiscountService from '../service/DiscountService';

export class CartController {
  constructor(modelCart) {
    this.modelCart = modelCart;
    this.cartService = new CartService();
    this.modelProduct = new Product();
    this.modelDiscount = new Discount();
    this.discountService = new DiscountService();
  }

  getProductsInCart() {
    this.modelCart.initProductsInCart();
  }

  decreaseQuantity(index) {
    debugger;
    return this.modelCart.setProductsInCart(decreaseQuantity);
  }

  increaseQuantity(productId) {
    debugger;
    const latestCart = this.modelCart.increaseQuantity(productId);
    this.cartService.save(latestCart);
  }

  removeProductFromCart(productId) {
    debugger;
    const latestCart = this.modelCart.removeProduct(productId);
    this.cartService.save(latestCart);
  }

  // Method retrieves a list of discount codes
  getListDiscounts() {
    const discounts = this.discountService.getListDiscounts();
    this.modelDiscount.getListDiscounts(discounts);
  }

  // Method checks the existence of a discount code
  checkExistPromoCode(promoCode) {
    debugger;
    return this.modelDiscount.isAvailable(promoCode);
  }
}
