import { Cart } from '../model/Cart';

class ProductController {
  constructor(model) {
    this.model = model;
    this.modelCart = new Cart();
  }

  loadMore() {
    return this.model.loadMore();
  }

  getListProducts() {
    return this.model.getListProducts();
  }

  addToCart(productId, productName, productImage, productPrice, quantity) {
    this.modelCart.addToCart(productId, productName, productImage, productPrice, quantity);
  }

  removeFromCart(productId) {
    this.modelCart.removeFromCart(productId);
  }
}

export { ProductController };
