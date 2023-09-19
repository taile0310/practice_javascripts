import { NAVBAR } from '../constant/MenuConstant';
import Observer from './Observer';

class NavbarView extends Observer {
  constructor(navbarController, cartController, productController) {
    super();
    this.controllerNavbar = navbarController;

    this.cartController = cartController;
    this.cartController.cartModel.addObserver(this);

    this.productController = productController;
    this.productController.loadInitialData();

    this.cartNumberElement = null;
    this.lengths = 0;
    this.currentMenu = NAVBAR.HOME;

    this.initHomeMenu();
  }

  initHomeMenu() {
    const btnMenu = document.querySelector('.btnMenu');
    btnMenu.addEventListener('click', (event) => {
      event.preventDefault();
      this.currentMenu = NAVBAR.MENU;
      const content = document.querySelector('.component-layout');
      const menu = document.querySelector('.menu');
      const homeLayout = document.querySelector('.home-layout');
      const navbar = document.querySelector('.nav-menu');
      content.style.display = 'flex';
      menu.style.display = 'flex';
      homeLayout.style.display = 'none';
      navbar.style.display = 'flex';
      this.renderNavbar(this.controllerNavbar.navbarModel.navbars);
      this.updateActiveLink();
    });
  }

  // Update active links in the site navigation bar.
  updateActiveLink() {
    // Get a list of all links in the navigation bar.
    const navLinks = document.querySelectorAll('.nav-item');
    navLinks.forEach((navLink) => {
      const navBarId = navLink.getAttribute('navBarId');

      // Compare the current URL with the link's path
      if (this.currentMenu == navBarId) {
        navLink.classList.add('active-link');
      } else {
        navLink.classList.remove('active-link');
      }
    });
  }

  // Displays the website's navigation bar
  renderNavbar(navbars) {
    // // Get the containing element for the navigation bar
    const navbarContainer = document.querySelector('.nav-menu');
    navbarContainer.innerHTML = '';

    navbars.forEach((link) => {
      const elementA = document.createElement('a');
      elementA.setAttribute('navBarId', link.id);
      elementA.className = 'nav-item';

      // Check if the navigation item is for the cart
      if (link.id == NAVBAR.CART) {
        const cartNumber = document.createElement('div');
        this.cartNumberElement = cartNumber;
        cartNumber.className = 'cart-number';
        // Set the cart number text based on the number of items in the cart
        if (this.lengths > 0) {
          this.cartNumberElement.textContent = `${this.lengths}`;
        } else {
          this.cartNumberElement.textContent = '0';
        }
        elementA.appendChild(cartNumber);
      }

      const elememntImage = document.createElement('img');
      elememntImage.className = 'icon';
      elememntImage.src = link.imageNavbar;
      elememntImage.alt = link.name;

      elementA.addEventListener('click', (event) => {
        event.preventDefault();

        const navBarId = event.currentTarget.getAttribute('navBarId');
        this.currentMenu = navBarId;
        const menu = document.querySelector('.menu');
        const carts = document.querySelector('.carts');
        const checkout = document.querySelector('.checkout-cart');
        const homeLayout = document.querySelector('.home-layout');
        const navbar = document.querySelector('.nav-menu');
        // Handle navigation based on the ID of the item clicked
        switch (navBarId) {
          case NAVBAR.HOME:
          case NAVBAR.LOGO:
          case NAVBAR.LOGOUT:
            homeLayout.style.display = 'block';
            menu.style.display = 'none';
            carts.style.display = 'none';
            checkout.style.display = 'none';
            navbar.style.display = 'none';
            break;
          case NAVBAR.MENU:
            menu.style.display = 'flex';
            carts.style.display = 'none';
            checkout.style.display = 'none';
            break;
          case NAVBAR.CART:
            menu.style.display = 'none';
            carts.style.display = 'block';
            checkout.style.display = 'none';
            break;
          case NAVBAR.CHECKOUT:
            if (this.lengths > 0) {
              menu.style.display = 'none';
              carts.style.display = 'none';
              checkout.style.display = 'block';
            } else {
              alert('Your shopping cart is empty, cannot checkout');
              this.currentMenu = NAVBAR.MENU;
              menu.style.display = 'flex';
              carts.style.display = 'none';
              checkout.style.display = 'none';
            }
            break;
        }
        this.updateActiveLink();
      });

      elementA.appendChild(elememntImage);
      navbarContainer.appendChild(elementA);
    });
  }

  /**
   * Updates the cart number displayed in the navigation bar based on the number of products in the cart.
   * @param {Array} productsInCart - An array of products in the cart.
   */
  updateCartNumber(productsInCart) {
    // Update the 'lengths' property with the number of products in the cart
    this.lengths = productsInCart.length;

    // Update the text content of the cart number element with the updated length
    this.cartNumberElement.textContent = `${this.lengths}`;
  }

  // Method that listens for order confirmation button events
  confirmOrder() {
    const btnConfirmOrder = document.querySelector('.btn-confirm');
    btnConfirmOrder.addEventListener('click', () => {
      // If the length is greater than 0, then render template checkout
      if (this.lengths > 0) {
        const menu = document.querySelector('.menu');
        const carts = document.querySelector('.carts');
        const homeLayout = document.querySelector('.home-layout');
        const navbar = document.querySelector('.nav-menu');
        const checkout = document.querySelector('.checkout-cart');

        menu.style.display = 'none';
        carts.style.display = 'none';
        homeLayout.style.display = 'none';
        navbar.style.display = 'flex';
        checkout.style.display = 'block';
        this.currentMenu = NAVBAR.CHECKOUT;
        this.updateActiveLink();
      }
      // Otherwise, less than zero is a warning
      else {
        alert('Your shopping cart is empty, cannot checkout');
      }
    });
  }

  /**
   * Update the user interface and calculate totals based on new data.
   * @param {*} data Data is provided from the model.
   */
  update(data) {
    this.updateCartNumber(data);
  }
}

export { NavbarView };
