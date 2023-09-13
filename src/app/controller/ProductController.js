import { Cart } from '../model/cart';
import { CartService } from '../service/CartService';
import ProductService from '../service/ProductService';

class ProductController {
  constructor(model) {
    this.model = model;
    this.modelCart = new Cart();
    this.productService = new ProductService();
    this.cartService = new CartService();
  }

  loadInitialData() {
    const products = this.productService.loadInitialData();

    this.model.initProducts(products);
  }

  loadMoreData() {
    const newItems = this.productService.loadMoreData();
    this.model.addMoreProducts(newItems);
  }

  removeOutCart(productId) {
    const latestCart = this.modelCart.removeProduct(productId);
    this.cartService.save(latestCart);
  }
}

export { ProductController };
