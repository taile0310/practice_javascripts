import { Cart } from '../model/Cart';
import { CartService } from '../service/CartService';

class NavbarController {
  constructor(modelNavbar) {
    this.modelNavbar = modelNavbar;
    this.modelCart = new Cart();
    this.cartService = new CartService();
  }

  getLenghtCart() {
    const productsInCart = this.cartService.loadInitialDataInCart();
    this.modelCart.initProductsInCart(productsInCart);
  }
}
export { NavbarController };
