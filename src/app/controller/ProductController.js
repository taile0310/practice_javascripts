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
    // call product service get new item with window = 4
    const newItems = this.productService.loadMoreData();
    this.model.addMoreProducts(newItems);
  }

  addToCart(productId/**, productName, productImage, productPrice, quantity, productIsSelected */) {
    debugger;
    const updatedProductsInCart = this.cartService.addToCart(
      productId,
      // productName,
      // productImage,
      // productPrice,
      // quantity,
      // productIsSelected,
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

  checkProductInCart(productId) {
    return this.modelCart.isAvailable(productId);
  }

  removeOutCart(productId) {
    const latestCart = this.modelCart.removeProduct(productId)
    this.cartService.save(latestCart);
  }
  
  addToCart(productId) {
    const latestCart = this.modelCart.addToCart(productId);
    this.cartService.save(latestCart);
  }

export { ProductController };
