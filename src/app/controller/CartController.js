import { CartService } from '../service/CartService';

export class CartController {
  constructor(modelCart) {
    this.modelCart = modelCart;

    this.cartService = new CartService();
  }

  getProductsInCart() {
    this.modelCart.initProductsInCart();
  }

  decreaseQuantity(index) {
    debugger;
    const decreaseQuantity = this.cartService.decreaseQuantity(index);
    return this.modelCart.setProductsInCart(decreaseQuantity);
  }

  increaseQuantity(index) {
    debugger;
    const increaseQuantity = this.cartService.increaseQuantity(index);
    return this.modelCart.setProductsInCart(increaseQuantity);
  }

  removeProductFromCart(productId) {
    debugger;
    this.modelCart.initProductsInCart(this.cartService.removeFromCart(productId));
  }
}
