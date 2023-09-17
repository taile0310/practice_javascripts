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

export default renderProductTemplate;
