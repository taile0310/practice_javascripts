export class CartController {
  constructor(modelCart) {
    this.modelCart = modelCart;
  }

  getName() {
    return this.modelCart.getName();
  }
  getQuantity() {
    return this.modelCart.getQuantity;
  }
  getTotalPrice() {
    return this.modelCart.getTotalPrice();
  }
  getImage() {
    return this.modelCart.getImage;
  }
}
