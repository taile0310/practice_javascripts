import { CartController } from './controller/CartController';
import { NavbarController } from './controller/NavbarController';
import { Cart } from './model/Cart';
import { Navbar } from './model/Navbar';
import { NavbarView } from './view/NavbarView';

export function renderNavbarTemplate() {
  const navbarModel = new Navbar();
  const cartModel = new Cart();

  const navbarController = new NavbarController(navbarModel);
  const cartController = new CartController(cartModel);

  const navbarView = new NavbarView(navbarController, cartController);
}
renderNavbarTemplate();
