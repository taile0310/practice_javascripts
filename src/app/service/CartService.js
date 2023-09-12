import { Product } from '../model/Product';
import { Data } from '../storages/Data';
import ProductService from './ProductService';

// Service
export class CartService {
  constructor() {
    this.productData = new Data();

    this.productsInCart = this.productData.localStorageService.getListProductsInCart();

    this.productService = new ProductService();
    this.modelProduct = new Product();
  }

  loadInitialDataInCart() {
    return this.productsInCart;
  }

  getListProduct() {
    debugger;
    const products = this.productService.loadInitialData();
    console.log(products);
    return products;
  }

  getProductsInCart() {
    return this.productsInCart;
  }

  // Generic function to add and remove products from the cart
  modifyCart(productId, productName, productImage, productPrice, quantity, isSelected) {
    debugger;
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

    // Update the product's status corresponding to each function
    // const menuProducts = this.getListProduct();
    // const updatedMenuProducts = menuProducts.map((menuProduct) => {
    //   if (menuProduct.id === +productId) {
    //     return {
    //       ...menuProduct,
    //       isSelected: isSelected,
    //     };
    //   }
    //   return menuProduct;
    // });

    // localStorage.setItem('products', JSON.stringify(updatedMenuProducts));

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

    return updatedMenuProducts;
  }

  // Method to add product to cart
  addToCart(productId, productName, productImage, productPrice, quantity) {
    debugger;
    return this.modifyCart(productId, productName, productImage, productPrice, quantity, true);
  }

  // Method to remove product from cart
  removeFromCart(productId) {
    return this.modifyCart(productId, null, null, null, null, false);
  }

  // Method increases the number of products
  increaseQuantity(index) {
    this.productsInCart[index].quantity += 1;
    localStorage.setItem('productsInCart', JSON.stringify(this.productsInCart));

    return this.productsInCart;
  }

  // Method to reduce the number of products
  decreaseQuantity(index) {
    if (this.productsInCart[index].quantity > 1) {
      console.log(this.productsInCart[index].quantity);
      this.productsInCart[index].quantity -= 1;
    } else {
      alert('The quantity cannot be less than 1');
    }
    localStorage.setItem('productsInCart', JSON.stringify(this.productsInCart));

    return this.productsInCart;
  }
}
