import Observable from './Observable';

import logo from '../../asset/image/logo.svg';
import home from '../../asset/image/home.svg';
import menu from '../../asset/image/menu.svg';
import cart from '../../asset/image/cart.svg';
import place from '../../asset/image/place.svg';
import back from '../../asset/image/exit.svg';

class Navbar extends Observable {
  constructor() {
    super();

    this.navbars = [
      {
        id: 1,
        name: 'Logo',
        imageNavbar: logo,
        path: '/home',
      },
      {
        id: 2,
        name: 'Home',
        imageNavbar: home,
        path: '/home',
      },
      {
        id: 3,
        name: 'Menu',
        imageNavbar: menu,
        path: '/menu',
      },
      {
        id: 4,
        name: 'Cart',
        imageNavbar: cart,
        path: '/cart',
      },
      {
        id: 5,
        name: 'Place',
        imageNavbar: place,
        path: '/checkout',
      },
      {
        id: 6,
        name: 'Back',
        imageNavbar: back,
        path: '/home',
      },
    ];
  }
}

export { Navbar };
