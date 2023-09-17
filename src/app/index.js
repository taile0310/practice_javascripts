import { CartController } from './controller/CartController';
import { NavbarController } from './controller/NavbarController';
import { Cart } from './model/Cart';
import { Navbar } from './model/Navbar';
import { Product } from './model/Product';
import { NavbarView } from './view/NavbarView';
import { ProductController } from './controller/ProductController';
import { ProductView } from './view/ProductView';
import { CartView } from './view/CartView';

export function main() {
  // model
  const navbarModel = new Navbar();
  const cartModel = new Cart();
  const producModel = new Product();

  // controller
  const navbarController = new NavbarController(navbarModel);
  const cartController = new CartController(cartModel);
  const productController = new ProductController(producModel);
  window.productController = productController;

  // view
  const productView = new ProductView(productController, cartController);
  const navbarView = new NavbarView(navbarController, cartController, productController);
  const cartView = new CartView(cartController);
}
main();
