class ProductController {
  constructor(model) {
    this.model = model;
  }

  loadMore() {
    return this.model.loadMore();
  }

  getListProducts() {
    return this.model.getListProducts();
  }
}

export { ProductController };
