class LocalStoreageService {
  saveListProductsToStorage(products) {
    localStorage.setItem('products', JSON.stringify(products));
  }

  getListProducts() {
    return JSON.parse(localStorage.getItem('products')) || [];
  }

  getListProductsInCart() {
    return JSON.parse(localStorage.getItem('productsInCart')) || [];
  }
}

export { LocalStoreageService };
