import Observer from './Observer';
import renderProductTemplate from '../page/ProductPage';
import { renderCartTemplate } from '../page/CartPage';
import renderCheckoutTemplate from '../page/CheckoutPage';

class NavbarView extends Observer {
  constructor(navbarController, cartController, productController) {
    super();
    this.controllerNavbar = navbarController;
    // this.controllerNavbar.modelNavbar.addObserver(this);

    this.cartController = cartController;
    this.cartController.modelCart.addObserver(this);

    this.productController = productController;

    this.productController.loadInitialData();

    this.renderNavbar(this.controllerNavbar.modelNavbar.navbars);
  }

  // Update active links in the site navigation bar.
  updateActiveLink() {
    // Get a list of all links in the navigation bar.
    const navLinks = document.querySelectorAll('.nav-item');
    // Get the current URL of the website.
    const currentURL = window.location.href;
    navLinks.forEach((navLink) => {
      const href = navLink.getAttribute('href');
      // Compare the current URL with the link's path
      if ('http://localhost:1234/menu.html#' + href === currentURL) {
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
      elementA.className = 'nav-item';
      elementA.href = link.path;

      if (elementA.getAttribute('href') == '/cart') {
        const cartNumber = document.createElement('div');
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

        const menu = document.querySelector('.menu');
        const carts = document.querySelector('.carts');
        const checkout = document.querySelector('.checkout-cart');
        // Handle the display of the interface corresponding to the clicked link.
        // if (link.path === '/menu') {
        // Displays the menu interface
        // renderProductTemplate;
        carts.style.display = 'none';
        checkout.style.display = 'none';

        menu.style.display = 'flex';
        window.location.hash = '/menu';
        this.updateActiveLink();

        // }
        if (link.path === '/cart') {
          // Displays the cart interface
          renderCartTemplate();
          menu.style.display = 'none';
          checkout.style.display = 'none';

          carts.style.display = 'block';
          window.location.hash = '/cart';
          this.updateActiveLink();
        }
        if (link.path === '/checkout') {
          // Displays the checkout interface
          renderCheckoutTemplate;
          menu.style.display = 'none';
          carts.style.display = 'none';

          checkout.style.display = 'block';
          window.location.hash = '/checkout';
          this.updateActiveLink();
        }
      });

      elementA.appendChild(elememntImage);
      navbarContainer.appendChild(elementA);
    });
  }

  getLengthInCart(productsInCart) {
    this.lengths = productsInCart.length;
    console.log('dộ dài', this.lengths);
    return this.lengths;
  }

  update(data) {
    console.log('NavbarView - #update', data);
    this.getLengthInCart(data);
  }
}

export { NavbarView };
