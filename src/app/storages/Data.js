import item1 from '../../asset/image/item1.jpg';
import item2 from '../../asset/image/item2.jpg';
import item3 from '../../asset/image/item3.jpg';
import item4 from '../../asset/image/item4.jpg';
import item5 from '../../asset/image/item5.jpg';
import item6 from '../../asset/image/item6.jpg';
import item7 from '../../asset/image/item7.jpg';
import item8 from '../../asset/image/item8.jpg';
import { LocalStoreageService } from '../service/LocalStoreageService';

export class Data {
  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Smashed Avo',
        describe: 'Smashed delicious',
        totalPrice: 25.0,
        image: item1,
        isSelected: false,
      },
      {
        id: 2,
        name: 'Yin & Yang',
        describe: 'Yin & Yang delicious',
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
    ];

    this.discountCode = [
      {
        id: 1,
        code: 'SSR01',
        percentReduction: 10,
      },
      {
        id: 2,
        code: 'SSR02',
        percentReduction: 15,
      },
      {
        id: 3,
        code: 'SSR03',
        percentReduction: 20,
      },
    ];
    this.localStorageService = new LocalStoreageService();
  }
}

const productData = new Data();
productData.localStorageService.saveListProductsToStorage(productData.products);
productData.localStorageService.saveListDiscountToStorage(productData.discountCode);
