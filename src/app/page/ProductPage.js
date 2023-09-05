import { ProductController } from '../controller/ProductController';
import { Product } from '../model/Product';
import { ProductView } from '../view/ProductView';

export function renderProductTemplate() {
  const productModel = new Product();
  const productController = new ProductController(productModel);
  const productView = new ProductView(productController);

  productView.renderProduct(productModel.getListProducts());
}
