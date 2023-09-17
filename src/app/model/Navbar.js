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
        id: '0',
        name: 'Logo',
        imageNavbar: logo,
      },
      {
        id: '1',
        name: 'Home',
        imageNavbar: home,
      },
      {
        id: '2',
        name: 'Menu',
        imageNavbar: menu,
      },
      {
        id: '3',
        name: 'Cart',
        imageNavbar: cart,
      },
      {
        id: '4',
        name: 'Place',
        imageNavbar: place,
      },
      {
        id: '5',
        name: 'Back',
        imageNavbar: back,
      },
    ];
  }
}

export { Navbar };
