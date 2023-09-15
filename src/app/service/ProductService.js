import { Data } from '../storages/Data';

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

  loadMoreData() {
    debugger;
    const startIndex = this.displayedListProduct;
    const endIndex = startIndex + this.productsNext;
    const newItems = this.allProducts.slice(startIndex, endIndex);
    this.displayedListProduct = endIndex;

    return newItems;
  }
}

export default ProductService;
