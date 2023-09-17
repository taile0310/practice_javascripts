import { CartController } from '../controller/CartController';
import { ProductController } from '../controller/ProductController';
import { Cart } from '../model/Cart';
import { Product } from '../model/Product';
import { ProductView } from '../view/ProductView';

class renderProductTemplate {
  constructor() {
    this.productModel = new Product();
    this.cartModel = new Cart();
    this.productController = new ProductController(this.productModel);
    this.cartController = new CartController(this.cartModel);
    this.productView = new ProductView(this.productController, this.cartController);
  }
}

export default new renderProductTemplate();

// export function renderProductTemplate() {
//   const productModel = new Product();
//   const cartModel = new Cart();

//   const productController = new ProductController(productModel);
//   const cartController = new CartController(cartModel);

//   const productView = new ProductView(productController, cartController);
// }
