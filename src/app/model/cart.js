import Observable from './Observable';

export class Cart extends Observable {
  constructor() {
    super();
    this.productsInCart = this.loadInitialData();
    console.log(this.productsInCart);
  }

  loadInitialData() {
    return JSON.parse(localStorage.getItem('productsInCart')) || [];
  }

  getListProduct() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    return products;
  }

  getProductById(productId) {
    debugger;
    const products = this.getListProduct();
    return products.find((product) => product.id === productId);
  }

  getProductsInCart() {
    return this.productsInCart;
  }

  addToCart(productId, productName, productImage, productPrice, quantity) {
    const existingCartItemIndex = this.productsInCart.findIndex((item) => item.id === productId);

    if (existingCartItemIndex !== -1) {
      this.productsInCart[existingCartItemIndex].quantity += quantity;
    } else {
      const newItem = {
        id: productId,
        quantity: quantity,
        name: productName,
        image: productImage,
        totalPrice: parseInt(productPrice, 10),
      };

      this.productsInCart.push(newItem);
    }

    localStorage.setItem('productsInCart', JSON.stringify(this.productsInCart));

    this.notify(this.productsInCart);
  }

  removeFromCart(productId) {
    const cartItemIndex = this.productsInCart.findIndex((item) => item.id === productId);
    if (cartItemIndex !== -1) {
      this.productsInCart.splice(cartItemIndex, 1);
      localStorage.setItem('productsInCart', JSON.stringify(this.productsInCart));
      this.notify(this.productsInCart);
    }
  }
}
