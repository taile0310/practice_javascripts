import { Cart } from '../model/cart';

class ProductController {
  constructor(model) {
    this.model = model;
    this.modelCart = new Cart();
  }

  // loadMoreData() {
  //   debugger;
  //   return this.model.loadMoreData();
  // }

  loadMoreData() {
    debugger;
    // Gọi đến model để thực hiện tải thêm dữ liệu
    this.model.loadMoreData();
  }

  getListProducts() {
    return this.model.getListProducts();
  }

  addToCart(productId, productName, productImage, productPrice, productIsSelected, quantity) {
    debugger;
    this.modelCart.addToCart(
      productId,
      productName,
      productImage,
      productPrice,
      productIsSelected,
      quantity,
    );
  }

  removeFromCart(productId) {
    debugger;
    this.modelCart.removeFromCart(productId);
  }
}

export { ProductController };
