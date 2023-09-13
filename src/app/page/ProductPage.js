import { ProductController } from '../controller/ProductController';
import { Product } from '../model/Product';
import { ProductView } from '../view/ProductView';

class renderProductTemplate {
  constructor() {
    this.productModel = new Product();
    this.productController = new ProductController(this.productModel);
    this.productView = new ProductView(this.productController);
  }
}

export default new renderProductTemplate();

// export function renderProductTemplate() {
//   const productModel = new Product();
//   const productController = new ProductController(productModel);
//   const productView = new ProductView(productController);
// }
