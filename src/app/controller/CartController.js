export class CartController {
  constructor(modelCart) {
    this.modelCart = modelCart;
  }
  getProductsInCart() {
    return this.modelCart.getProductsInCart();
  }
}
