import { Data } from '../storages/Data';
import { LocalStoreageService } from './LocalStoreageService';

class ProductService {
  constructor() {
    this.productData = new Data();
    this.allProducts = this.productData.localStorageService.getListProducts();
    this.displayedListProduct = 8;
    this.productsNext = 4;
  }

  loadInitialData() {
    return this.allProducts.slice(0, this.displayedListProduct);
  }

  loadMoreProducts(currentListProducts) {
    const startIndex = currentListProducts.length;
    const endIndex = startIndex + this.productsNext;

    if (startIndex >= this.allProducts.length) {
      return {
        products: currentListProducts,
        checkProductExists: true,
      };
    }

    const loadProducts = this.allProducts.slice(startIndex, endIndex);
    const updatedProducts = [...currentListProducts, ...loadProducts];

    return {
      products: updatedProducts,
      checkProductExists: false,
    };
  }
}

export default ProductService;
