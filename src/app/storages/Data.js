import item1 from '../../asset/image/item1.jpg';
import item2 from '../../asset/image/item2.jpg';
import item3 from '../../asset/image/item3.jpg';
import item4 from '../../asset/image/item4.jpg';
import item5 from '../../asset/image/item5.jpg';
import item6 from '../../asset/image/item6.jpg';
import item7 from '../../asset/image/item7.jpg';
import item8 from '../../asset/image/item8.jpg';

export class Data {
  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Smashed Avo',
        describe: 'Smashed delicious',
        quantity: 10,
        totalPrice: 25.0,
        image: item1,
        isSelected: false,
      },
      {
        id: 2,
        name: 'Yin & Yang',
        describe: 'Yin & Yang delicious',
        quantity: 10,
        totalPrice: 15.0,
        image: item2,
        isSelected: false,
      },
      {
        id: 3,
        name: 'Pancakes',
        describe: 'Pancakes delicious',
        quantity: 10,
        totalPrice: 20.0,
        image: item3,
        isSelected: false,
      },
      {
        id: 4,
        name: 'Huevos Rancheros',
        describe: 'Huevos Rancheros delicious',
        quantity: 10,
        totalPrice: 10.0,
        image: item4,
        isSelected: false,
      },
      {
        id: 5,
        name: 'Rancheros (Tofu)',
        describe: 'Smashed delicious',
        quantity: 10,
        totalPrice: 30.0,
        image: item5,
        isSelected: false,
      },
      {
        id: 6,
        name: 'Breakkie Roll',
        describe: 'Breakkie Roll delicious',
        quantity: 10,
        totalPrice: 18.0,
        image: item6,
        isSelected: false,
      },
      {
        id: 7,
        name: 'Breakkie Roll',
        describe: 'Breakkie Roll delicious',
        quantity: 10,
        totalPrice: 25.0,
        image: item7,
        isSelected: false,
      },
      {
        id: 8,
        name: 'Burrito',
        describe: 'Burrito delicious',
        quantity: 10,
        totalPrice: 15.0,
        image: item8,
        isSelected: false,
      },
      {
        id: 9,
        name: 'Breakkie Roll',
        describe: 'Breakkie Roll delicious',
        quantity: 10,
        totalPrice: 18.0,
        image: item1,
        isSelected: false,
      },
      {
        id: 10,
        name: 'Breakkie Roll',
        describe: 'Breakkie Roll delicious',
        quantity: 10,
        totalPrice: 25.0,
        image: item2,
        isSelected: false,
      },
      {
        id: 11,
        name: 'Burrito',
        describe: 'Burrito delicious',
        quantity: 10,
        totalPrice: 15.0,
        image: item3,
      },
      {
        id: 12,
        name: 'Yin & Yang',
        describe: 'Yin & Yang delicious',
        quantity: 10,
        totalPrice: 15.0,
        image: item2,
        isSelected: false,
      },
      {
        id: 13,
        name: 'Pancakes',
        describe: 'Pancakes delicious',
        quantity: 10,
        totalPrice: 20.0,
        image: item3,
        isSelected: false,
      },
      {
        id: 14,
        name: 'Huevos Rancheros',
        describe: 'Huevos Rancheros delicious',
        quantity: 10,
        totalPrice: 10.0,
        image: item4,
        isSelected: false,
      },
      {
        id: 15,
        name: 'Rancheros (Tofu)',
        describe: 'Smashed delicious',
        quantity: 10,
        totalPrice: 30.0,
        image: item5,
        isSelected: false,
      },
      {
        id: 16,
        name: 'Breakkie Roll',
        describe: 'Breakkie Roll delicious',
        quantity: 10,
        totalPrice: 18.0,
        image: item6,
        isSelected: false,
      },
      {
        id: 17,
        name: 'Breakkie Roll',
        describe: 'Breakkie Roll delicious',
        quantity: 10,
        totalPrice: 25.0,
        image: item7,
        isSelected: false,
      },
      {
        id: 18,
        name: 'Burrito',
        describe: 'Burrito delicious',
        quantity: 10,
        totalPrice: 15.0,
        image: item8,
        isSelected: false,
      },
      {
        id: 19,
        name: 'Breakkie Roll',
        describe: 'Breakkie Roll delicious',
        quantity: 10,
        totalPrice: 18.0,
        image: item1,
        isSelected: false,
      },
      {
        id: 20,
        name: 'Breakkie Roll',
        describe: 'Breakkie Roll delicious',
        quantity: 10,
        totalPrice: 25.0,
        image: item2,
        isSelected: false,
      },
      {
        id: 21,
        name: 'Burrito',
        describe: 'Burrito delicious',
        quantity: 10,
        totalPrice: 15.0,
        image: item3,
        isSelected: false,
      },
    ];
  }

  saveListProductsToStorage() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  getListProducts() {
    return JSON.parse(localStorage.getItem('products')) || [];
  }
}
const productData = new Data();

productData.saveListProductsToStorage();
