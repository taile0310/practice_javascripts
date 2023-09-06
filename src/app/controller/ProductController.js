class ProductController {
  constructor(model) {
    this.model = model;
  }

  getListProducts() {
    return this.model.getListProducts();
  }
}

export { ProductController };
