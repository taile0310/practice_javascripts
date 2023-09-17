import MenuConstant from '../constants/MenuConstant';
import Observer from './Observer';
// import renderProductTemplate from '../page/ProductPage';
// import { renderCartTemplate } from '../page/CartPage';
// import renderCheckoutTemplate from '../page/CheckoutPage';

class NavbarView extends Observer {
  constructor(navbarController, cartController, productController) {
    super();
    this.controllerNavbar = navbarController;
    // this.controllerNavbar.modelNavbar.addObserver(this);

    this.cartController = cartController;
    this.cartController.modelCart.addObserver(this);
    window.modelCart = this.cartController.modelCart;

    this.productController = productController;

    this.productController.loadInitialData();
    this.cartNumberElement = null;
    this.lengths = 0;
    this.currentMenu = MenuConstant.HOME;

    // this.renderNavbar(this.controllerNavbar.modelNavbar.navbars);
    this.initHomeMenu();
  }

  initHomeMenu() {
    const btnMenu = document.querySelector('.btnMenu');
    console.log('btnMenu', btnMenu);
    btnMenu.addEventListener('click', (event) => {
      event.preventDefault();
      this.currentMenu = MenuConstant.MENU;
      console.log('lisst menu');
      const menu = document.querySelector('.menu');
      const homeLayout = document.querySelector('.home-layout');
      const navbar = document.querySelector('.nav-menu');
      const cart = document.querySelector('.carts');
      console.log(menu);
      menu.style.display = 'flex';
      homeLayout.style.display = 'none';
      navbar.style.display = 'flex';
      // window.location.hash = '/menu';
      this.renderNavbar(this.controllerNavbar.modelNavbar.navbars);
      this.updateActiveLink();
    });
  }

  // Update active links in the site navigation bar.
  updateActiveLink() {
    // Get a list of all links in the navigation bar.
    const navLinks = document.querySelectorAll('.nav-item');
    navLinks.forEach((navLink) => {
      const navBarId = navLink.getAttribute('navBarId');
      console.log('navBarId', navBarId);
      console.log(this.currentMenu);

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
    console.log('navbars', navbars);
    const navbarContainer = document.querySelector('.nav-menu');
    navbarContainer.innerHTML = '';

    navbars.forEach((link) => {
      const elementA = document.createElement('a');
      elementA.setAttribute('navBarId', link.id);
      elementA.className = 'nav-item';
      elementA.href = link.path;

      if (link.id == MenuConstant.CART) {
        const cartNumber = document.createElement('div');
        this.cartNumberElement = cartNumber;
        cartNumber.className = 'cart-number';
        cartNumber.style.color = 'white';
        cartNumber.style.position = 'absolute';
        cartNumber.style.marginTop = '-10px';
        cartNumber.style.marginLeft = '40px';
        // Kiểm tra độ dài của giỏ hàng trước khi hiển thị
        if (this.lengths > 0) {
          cartNumber.textContent = `${this.lengths}`;
        } else {
          cartNumber.textContent = '0'; // Không hiển thị gì cả nếu không có sản phẩm trong giỏ hàng
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
        console.log('navBarId => ', navBarId);
        this.currentMenu = navBarId;
        const menu = document.querySelector('.menu');
        const carts = document.querySelector('.carts');
        const checkout = document.querySelector('.checkout-cart');
        const homeLayout = document.querySelector('.home-layout');
        const navbar = document.querySelector('.nav-menu');
        switch (navBarId) {
          case MenuConstant.HOME:
          case MenuConstant.LOGO:
          case MenuConstant.LOGOUT:
            homeLayout.style.display = 'block';
            menu.style.display = 'none';
            carts.style.display = 'none';
            checkout.style.display = 'none';
            break;
          case MenuConstant.MENU:
            menu.style.display = 'flex';
            carts.style.display = 'none';
            checkout.style.display = 'none';
            break;
          case MenuConstant.CART:
            menu.style.display = 'none';
            carts.style.display = 'block';
            checkout.style.display = 'none';
            break;
          case MenuConstant.CHECKOUT:
            menu.style.display = 'none';
            carts.style.display = 'none';
            checkout.style.display = 'block';
            break;
        }

        this.updateActiveLink();

        // // get attrinute navBarId

        // const carts = document.querySelector('.carts');
        // const checkout = document.querySelector('.checkout-cart');

        // carts;
        // // Displays the cart interface
        // // renderCartTemplate();
        // // menu.style.display = 'none';
        // // checkout.style.display = 'none';

        // // carts.style.display = 'block';
        // // window.location.hash = '/cart';
        // // this.updateActiveLink();

        // if (link.path === '/checkout') {
        //   // Displays the checkout interface
        //   renderCheckoutTemplate;
        //   menu.style.display = 'none';
        //   carts.style.display = 'none';

        //   checkout.style.display = 'block';
        //   window.location.hash = '/checkout';
        //   this.updateActiveLink();
        // }
      });

      elementA.appendChild(elememntImage);
      navbarContainer.appendChild(elementA);
    });
  }

  updateCartNumber(productsInCart) {
    this.lengths = productsInCart.length;
    this.cartNumberElement.textContent = `${this.lengths}`;
  }

  update(data) {
    console.log('NavbarView - #update', data);
    this.updateCartNumber(data);
  }
}

export { NavbarView };
