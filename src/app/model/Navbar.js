import Observable from './Observable';

import brand from '../../asset/image/logo.svg';
import home from '../../asset/image/home.svg';
import menu from '../../asset/image/menu.svg';
import cart from '../../asset/image/cart.svg';
import place from '../../asset/image/place.svg';
import exit from '../../asset/image/exit.svg';

class Navbar extends Observable {
  constructor() {
    super();

    this.navbars = [
      {
        id: 1,
        name: 'Logo',
        image: brand,
        path: '../../index.html',
      },
      {
        id: 2,
        name: 'Home',
        image: home,
        path: '../../index.html',
      },
      {
        id: 3,
        name: 'Menu',
        image: menu,
        path: './menu.html',
      },
      {
        id: 4,
        name: 'Cart',
        image: cart,
        path: './cart.html',
      },
      {
        id: 5,
        name: 'Place',
        image: place,
        path: './checkout.html',
      },
      {
        id: 6,
        name: 'Back',
        image: exit,
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
  getImage() {
    return this.image;
  }
}

export { Navbar };
