import Observable from './Observable';

export class Cart extends Observable {
  constructor() {
    super();
    this.productsInCart = this.loadInitialData();
  }

  loadInitialData() {
    return JSON.parse(localStorage.getItem('productsInCart')) || [];
  }

  getListProduct() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    return products;
  }

  getProductsInCart() {
    return this.productsInCart;
  }

  // Generic function to add and remove products from the cart
  modifyCart(productId, productName, productImage, productPrice, isSelected, quantity) {
    const newItem = {
      id: productId,
      quantity: quantity,
      name: productName,
      image: productImage,
      totalPrice: parseInt(productPrice, 10),
      isSelected: isSelected,
    };

    // If isSelected status is true then add it to cart
    if (isSelected) {
      this.productsInCart.push(newItem);
    } else {
      // If the isSelected status is false, remove it from the cart
      const cartItemIndex = this.productsInCart.findIndex((item) => item.id == productId);
      if (cartItemIndex !== -1) {
        this.productsInCart.splice(cartItemIndex, 1);
      }
    }

    localStorage.setItem('productsInCart', JSON.stringify(this.productsInCart));
    this.notify(this.productsInCart);

    // Update the product's status corresponding to each function
    const menuProducts = this.getListProduct();
    const updatedMenuProducts = menuProducts.map((menuProduct) => {
      if (menuProduct.id === +productId) {
        return {
          ...menuProduct,
          isSelected: isSelected,
        };
      }
      return menuProduct;
    });

    localStorage.setItem('products', JSON.stringify(updatedMenuProducts));
  }

  // Method to add product to cart
  addToCart(productId, productName, productImage, productPrice, quantity) {
    this.modifyCart(productId, productName, productImage, productPrice, true, quantity);
  }

  // Method to remove product from cart
  removeFromCart(productId) {
    this.modifyCart(productId, null, null, null, false, null);
  }

  // Method increases the number of products
  increaseQuantity(index) {
    this.productsInCart[index].quantity += 1;
    localStorage.setItem('productsInCart', JSON.stringify(this.productsInCart));

    this.notify(this.productsInCart);
  }

  // Method to reduce the number of products
  decreaseQuantity(index) {
    this.productsInCart[index].quantity -= 1;
    localStorage.setItem('productsInCart', JSON.stringify(this.productsInCart));

    this.notify(this.productsInCart);
  }
}
