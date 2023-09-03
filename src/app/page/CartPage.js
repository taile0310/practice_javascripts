import { CartController } from '../controller/CartController';
import { Cart } from '../model/Cart';
import { CartView } from '../view/CartView';

export function renderCartTemplate() {
  const cartModel = new Cart();
  const cartController = new CartController(cartModel);
  const cartView = new CartView(cartController);

  cartView.renderCart(cartModel.carts);
}
