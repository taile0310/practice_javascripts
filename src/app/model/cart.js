class Cart {
  constructor(id, name, quantity, totalPrice) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.totalPrice = totalPrice;
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
}
