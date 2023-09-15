class LocalStoreageService {
  saveListProductsToStorage(products) {
    localStorage.setItem('products', JSON.stringify(products));
  }

  saveListDiscountToStorage(discounts) {
    localStorage.setItem('discounts', JSON.stringify(discounts));
  }

  getListProducts() {
    return JSON.parse(localStorage.getItem('products')) || [];
  }

  getListDiscounts() {
    return JSON.parse(localStorage.getItem('discounts')) || [];
  }

  getListProductsInCart() {
    return JSON.parse(localStorage.getItem('productsInCart')) || [];
  }
}
export { LocalStoreageService };
