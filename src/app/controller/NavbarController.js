class NavbarController {
  constructor(model) {
    this.model = model;
  }

  getPath() {
    return this.model.getPath();
  }
  getImage() {
    return this.model.getImage();
  }
  getName() {
    return this.model.getName();
  }
}

export { NavbarController };
