export class CartController {
  constructor(modelCart) {
    this.modelCart = modelCart;
  }
  getProductsInCart() {
    return this.modelCart.getProductsInCart();
  }

  decreaseQuantity(index) {
    debugger;
    return this.modelCart.decreaseQuantity(index);
  }

  increaseQuantity(index) {
    debugger;
    return this.modelCart.increaseQuantity(index);
  }
}
