class NavbarController {
  constructor(modelNavbar) {
    this.modelNavbar = modelNavbar;
  }

  getPath() {
    return this.model.getPath();
  }
  getImageNavbar() {
    return this.model.getImageNavbar();
  }
  getName() {
    return this.model.getName();
  }
}

export { NavbarController };
