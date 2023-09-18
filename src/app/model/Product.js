import Observable from './Observable';

class Product extends Observable {
  constructor() {
    super();
    this.products = [];
  }

  /**
   * Method gets the initial product list
   * @param {Array} products
   */
  initProducts(products) {
    this.products = products;
    this.notify(products);
  }

  /**
   * Upload new products to the existing product list.
   * @param {Array} newItems
   */
  addMoreProducts(newItems) {
    this.products = this.products.concat(newItems);
    this.notify(this.products);
  }
}

export { Product };
