import { CartController } from './controller/CartController';
import { NavbarController } from './controller/NavbarController';
import { Cart } from './model/Cart';
import { Navbar } from './model/Navbar';
import { Product } from './model/Product';
import { NavbarView } from './view/NavbarView';
import { ProductController } from './controller/ProductController';
import { ProductView } from './view/ProductView';
import { CartView } from './view/CartView';
import { CheckoutView } from './view/CheckoutView';
import { CheckoutController } from './controller/CheckoutController';

export function main() {
  // model
  const navbarModel = new Navbar();
  const cartModel = new Cart();
  const producModel = new Product();

  // controller
  const navbarController = new NavbarController(navbarModel);
  const cartController = new CartController(cartModel, producModel);
  const productController = new ProductController(producModel);
  const checkoutController = new CheckoutController(cartModel);

  // view
  const productView = new ProductView(productController, cartController);
  const navbarView = new NavbarView(
    navbarController,
    cartController,
    productController,
    checkoutController,
  );
  const cartView = new CartView(cartController);
  const checkoutView = new CheckoutView(checkoutController, cartController);
}
main();
