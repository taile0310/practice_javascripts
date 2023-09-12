import { Cart } from '../model/cart';
import { CartService } from '../service/CartService';
import ProductService from '../service/ProductService';

class ProductController {
  constructor(model) {
    this.model = model;
    this.modelCart = new Cart();
    this.productService = new ProductService();
    this.cartService = new CartService(this.model);
  }

  loadInitialData() {
    debugger;
    const products = this.productService.loadInitialData();

    this.model.initProducts(products);
  }

  loadMoreData() {
    debugger;
    const newItems = this.productService.loadMoreData();
    this.model.addMoreProducts(newItems);
  }

  addToCart(productId, productName, productImage, productPrice, quantity, productIsSelected) {
    debugger;
    const updatedProductsInCart = this.cartService.addToCart(
      productId,
      productName,
      productImage,
      productPrice,
      quantity,
      productIsSelected,
    );

    // Update model with new data
    this.modelCart.setProductsInCart(updatedProductsInCart);
    this.model.initProducts(updatedProductsInCart);
  }

  removeFromCart(productId) {
    const updatedProductsInCart = this.cartService.removeFromCart(productId);

    // Update model with new data
    this.modelCart.setProductsInCart(updatedProductsInCart);
  }
}

export { ProductController };
