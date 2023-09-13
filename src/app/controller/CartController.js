import { Product } from '../model/Product';
import { CartService } from '../service/CartService';

export class CartController {
  constructor(modelCart) {
    this.modelCart = modelCart;
    this.cartService = new CartService();
    this.modelProduct = new Product();
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
}
