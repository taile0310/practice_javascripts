import { Cart } from '../model/Cart';
import { CartService } from '../service/CartService';

class NavbarController {
  constructor(modelNavbar) {
    this.modelNavbar = modelNavbar;
    this.modelCart = new Cart();
    this.cartService = new CartService();
  }
}
export { NavbarController };
