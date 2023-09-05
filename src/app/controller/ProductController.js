class ProductController {
  constructor(model) {
    this.model = model;
  }

  getListProductsController() {
    return this.model.getListProducts();
  }
}

export { ProductController };
