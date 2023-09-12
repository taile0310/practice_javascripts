import Observable from './Observable';

class Product extends Observable {
  constructor() {
    super();
    this.products = [];
  }

  initProducts(products) {
    this.products = products;
    console.log(this.products);
    this.notify(products);
  }

  addMoreProducts(newItems) {
    debugger;
    this.products = this.products.concat(newItems);
    console.log(this.products);
    this.notify(this.products);
  }
}

export { Product };
