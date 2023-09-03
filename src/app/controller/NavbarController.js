class NavbarController {
  constructor(modelNavbar) {
    this.modelNavbar = modelNavbar;
  }
  // Xử lý sự kiện click trên Menu button
  handleMenuClick() {
    if (typeof this.menuClickCallback === 'function') {
      this.menuClickCallback();
    }
  }

  // Xử lý sự kiện click trên Cart button
  handleCartClick() {
    if (typeof this.cartClickCallback === 'function') {
      this.cartClickCallback();
    }
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
