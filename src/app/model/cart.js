import Observable from './Observable';

import item1 from '../../asset/image/item1.jpg';
import item2 from '../../asset/image/item2.jpg';

export class Cart extends Observable {
  constructor() {
    super();
    this.carts = [
      {
        name: 'Smashed Avo',
        quantity: 1,
        totalPrice: 25.0,
        image: item1,
      },
      {
        name: 'Yin & Yang',
        quantity: 1,
        totalPrice: 15.0,
        image: item2,
      },
    ];
  }

  getName() {
    return this.name;
  }
  getQuantity() {
    return this.quantity;
  }
  getTotalPrice() {
    return this.totalPrice;
  }
  getImage() {
    return this.image;
  }
}
