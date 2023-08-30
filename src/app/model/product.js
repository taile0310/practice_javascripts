class Product {
  constructor(id, name, describe, quantity, price, image) {
    this.id = id;
    this.name = name;
    this.describe = describe;
    this.quantity = quantity;
    this.price = price;
    this.image = image;

    this.product = [
      {
        name: 'Smashed Avo',
        describe: 'Smashed delicious',
        quantity: 10,
        totalPrice: 25.0,
        image: '/asset/image/item1.jpg',
      },
      {
        name: 'Yin & Yang',
        describe: 'Yin & Yang delicious',
        quantity: 10,
        totalPrice: 15.0,
        image: '/asset/image/item2.jpg',
      },
      {
        name: 'Pancakes',
        describe: 'Pancakes delicious',
        quantity: 10,
        totalPrice: 20.0,
        image: '/asset/image/item3.jpg',
      },
      {
        name: 'Huevos Rancheros',
        describe: 'Huevos Rancheros delicious',
        quantity: 10,
        totalPrice: 10.0,
        image: '/asset/image/item4.jpg',
      },
      {
        name: 'Rancheros (Tofu)',
        describe: 'Smashed delicious',
        quantity: 10,
        totalPrice: 30.0,
        image: '/asset/image/item5.jpg',
      },
      {
        name: 'Breakkie Roll',
        describe: 'Breakkie Roll delicious',
        quantity: 10,
        totalPrice: 18.0,
        image: '/asset/image/item6.jpg',
      },
      {
        name: 'Breakkie Roll',
        describe: 'Breakkie Roll delicious',
        quantity: 10,
        totalPrice: 25.0,
        image: '/asset/image/item7.jpg',
      },
      {
        name: 'Burrito',
        describe: 'Burrito delicious',
        quantity: 10,
        totalPrice: 15.0,
        image: '/asset/image/item8.jpg',
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
