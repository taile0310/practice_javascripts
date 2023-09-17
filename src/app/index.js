import { CartController } from './controller/CartController';
import { NavbarController } from './controller/NavbarController';
import { Cart } from './model/Cart';
import { Navbar } from './model/Navbar';
import { Product } from './model/Product';
import { NavbarView } from './view/NavbarView';
import { ProductController } from './controller/ProductController';
import { ProductView } from './view/ProductView';

export function main() {
  // model
  const navbarModel = new Navbar();
  const cartModel = new Cart();
  const producModel = new Product();

  // controller
  const navbarController = new NavbarController(navbarModel);
  const cartController = new CartController(cartModel);
  const productController = new ProductController(producModel);

  // view
  const productView = new ProductView(productController);
  const navbarView = new NavbarView(navbarController, cartController, productController);
}
main();
