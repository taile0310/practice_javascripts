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
        path: '../../index.html',
      },
      {
        id: 2,
        name: 'Home',
        imageNavbar: home,
        path: '../../index.html',
      },
      {
        id: 3,
        name: 'Menu',
        imageNavbar: menu,
        path: './menu.html',
      },
      {
        id: 4,
        name: 'Cart',
        imageNavbar: cart,
        path: './cart.html',
      },
      {
        id: 5,
        name: 'Place',
        imageNavbar: place,
        path: './checkout.html',
      },
      {
        id: 6,
        name: 'Back',
        imageNavbar: back,
        path: '../../index.html',
      },
    ];
  }

  getName() {
    return this.name;
  }

  getPath() {
    return this.path;
  }

  getImageNavbar() {
    return this.imageNavbar;
  }
}

export { Navbar };
