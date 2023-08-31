import Observable from './Observable';

import item1 from '../../asset/image/item1.jpg';
import item2 from '../../asset/image/item2.jpg';
import item3 from '../../asset/image/item3.jpg';
import item4 from '../../asset/image/item4.jpg';
import item5 from '../../asset/image/item5.jpg';
import item6 from '../../asset/image/item6.jpg';
import item7 from '../../asset/image/item7.jpg';
import item8 from '../../asset/image/item8.jpg';

class Product extends Observable {
  constructor() {
    super();
    this.products = [
      {
        name: 'Smashed Avo',
        describe: 'Smashed delicious',
        quantity: 10,
        totalPrice: 25.0,
        image: item1,
      },
      {
        name: 'Yin & Yang',
        describe: 'Yin & Yang delicious',
        quantity: 10,
        totalPrice: 15.0,
        image: item2,
      },
      {
        name: 'Pancakes',
        describe: 'Pancakes delicious',
        quantity: 10,
        totalPrice: 20.0,
        image: item3,
      },
      {
        name: 'Huevos Rancheros',
        describe: 'Huevos Rancheros delicious',
        quantity: 10,
        totalPrice: 10.0,
        image: item4,
      },
      {
        name: 'Rancheros (Tofu)',
        describe: 'Smashed delicious',
        quantity: 10,
        totalPrice: 30.0,
        image: item5,
      },
      {
        name: 'Breakkie Roll',
        describe: 'Breakkie Roll delicious',
        quantity: 10,
        totalPrice: 18.0,
        image: item6,
      },
      {
        name: 'Breakkie Roll',
        describe: 'Breakkie Roll delicious',
        quantity: 10,
        totalPrice: 25.0,
        image: item7,
      },
      {
        name: 'Burrito',
        describe: 'Burrito delicious',
        quantity: 10,
        totalPrice: 15.0,
        image: item8,
      },
    ];
  }

  getName() {
    return this.name;
  }

  getDescribe() {
    return this.describe;
  }

  getQuantity() {
    return this.quantity;
  }

  getPrice() {
    return this.price;
  }

  getImage() {
    return this.image;
  }
}

export { Product };
