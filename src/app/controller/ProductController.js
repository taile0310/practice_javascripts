import { Cart } from '../model/Cart';
import { CartService } from '../service/CartService';
import ProductService from '../service/ProductService';

class ProductController {
  constructor(model) {
    this.model = model;
    this.modelCart = new Cart();
    this.productService = new ProductService();
    this.cartService = new CartService();
  }

  // Method gets the initial product list
  loadInitialData() {
    const products = this.productService.loadInitialData();
    this.model.initProducts(products);
  }

  // Method to load additional product data
  loadMoreData() {
    const newItems = this.productService.loadMoreData();
    this.model.addMoreProducts(newItems);
  }

  /**
   * Method to remove products from cart
   * @param {number} productId
   */
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
    debugger;
    const latestCart = this.modelCart.addToCart(productId, productName, productImage, productPrice);
    // Call the service to change the list after adding
    this.cartService.save(latestCart);
  }
}

export { ProductController };
