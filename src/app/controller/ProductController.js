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

  /**
   * Check product existence
   * @param {number} productId
   * @returns {boolean} Returns true if the product exists in the cart, otherwise returns false.
   */
  checkProductInCart(productId) {
    return this.modelCart.isAvailable(productId);
  }

  /**
   * Method to add products to cart
   * @param {productId}
   * @param {productName}
   * @param {productImage}
   * @param {productPrice}
   */
  addToCart(productId, productName, productImage, productPrice) {
    const latestCart = this.modelCart.addToCart(productId, productName, productImage, productPrice);
    // Call the service to change the list after adding
    this.cartService.save(latestCart);
  }
}

export { ProductController };
