import Observable from './Observable';

class Navbar extends Observable {
  constructor() {
    super();

    this.navbars = [
      {
        id: 1,
        name: 'Logo',
        image: '/logo.aab6636d.svg',
        path: '../../index.html',
      },
      {
        id: 2,
        name: 'Home',
        image: '/home.2f72963b.svg',
        path: '../../index.html',
      },
      {
        id: 3,
        name: 'Menu',
        image: '/menu.fdf13921.svg',
        path: './menu.html',
      },
      {
        id: 4,
        name: 'Cart',
        image: '/cart.94faad49.svg',
        path: './cart.html',
      },
      {
        id: 5,
        name: 'Place',
        image: '/place.5a70d442.svg',
        path: './checkout.html',
      },
      {
        id: 6,
        name: 'Back',
        image: '/exit.f5da649e.svg',
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
