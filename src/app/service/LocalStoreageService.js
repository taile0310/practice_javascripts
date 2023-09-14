class LocalStoreageService {
  /**
   * Method to save product list into localstorage
   * @param {Array} products
   */
  saveListProductsToStorage(products) {
    localStorage.setItem('products', JSON.stringify(products));
  }

  /**
   * Method saves the discount code list into localstorage
   * @param {Array} discounts
   */
  saveListDiscountToStorage(discounts) {
    localStorage.setItem('discounts', JSON.stringify(discounts));
  }

  // Method to get product list in localstorage
  getListProducts() {
    return JSON.parse(localStorage.getItem('products')) || [];
  }

  // Method to get list of discount codes in localstorage
  getListDiscounts() {
    return JSON.parse(localStorage.getItem('discounts')) || [];
  }

  // Method to get cart's product list in localstorage
  getListProductsInCart() {
    return JSON.parse(localStorage.getItem('productsInCart')) || [];
  }
}
export { LocalStoreageService };
