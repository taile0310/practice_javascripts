import Observer from './Observer';
import { renderProductTemplate } from '../page/ProductPage';
import { renderCartTemplate } from '../page/CartPage';

class NavbarView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
  }

  updateActiveLink() {
    const navLinks = document.querySelectorAll('.nav-item');
    console.log(navLinks);
    const currentURL = window.location.href;
    console.log(currentURL);
    navLinks.forEach((navLink) => {
      const href = navLink.getAttribute('href');
      console.log('href: ' + href);
      if ('http://localhost:1234/menu.html#' + href === currentURL) {
        navLink.classList.add('active-link');
      } else {
        navLink.classList.remove('active-link');
      }
    });
  }

  renderNavbar(navbars) {
    const navbarContainer = document.querySelector('.nav-menu');
    navbarContainer.innerHTML = '';

    navbars.forEach((link) => {
      const elementA = document.createElement('a');
      elementA.className = 'nav-item';
      elementA.href = link.path;

      const elememntImage = document.createElement('img');
      elememntImage.className = 'icon';
      elememntImage.src = link.imageNavbar;
      elememntImage.alt = link.name;

      elementA.addEventListener('click', (event) => {
        event.preventDefault();

        const menu = document.querySelector('.menu');
        const carts = document.querySelector('.carts');

        if (link.path === '/menu') {
          renderProductTemplate();
          carts.style.display = 'none';
          menu.style.display = 'flex';
          window.location.hash = '/menu';
          this.updateActiveLink();
        }

        if (link.path === '/cart') {
          renderCartTemplate();
          menu.style.display = 'none';
          carts.style.display = 'block';
          window.location.hash = '/cart';
          this.updateActiveLink();
        }
      });

      elementA.appendChild(elememntImage);
      navbarContainer.appendChild(elementA);
    });
  }
}

export { NavbarView };
