import Observable from './Observable';

class Product extends Observable {
  constructor() {
    super();
    this.products = [];
  }

  initProducts(products) {
    this.products = products;
    this.notify(products);
    return this.products;
  }

  addMoreProducts(newItems) {
    debugger;
    this.products = this.products.concat(newItems);
    this.notify(this.products);
  }
}

export { Product };
