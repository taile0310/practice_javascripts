import { CartController } from '../controller/CartController';
import { Cart } from '../model/Cart';
import { CartView } from '../view/CartView';

export function renderCartTemplate() {
  const cartModel = new Cart();
  const cartController = new CartController(cartModel);
  const cartView = new CartView(cartController);
}
// class renderProductTemplate {
//   constructor() {
//     this.cartModel = new Cart();
//     this.cartController = new CartController(this.cartModel);
//     this.cartView = new CartView(this.cartController);
//   }
// }

// export default new renderProductTemplate();
