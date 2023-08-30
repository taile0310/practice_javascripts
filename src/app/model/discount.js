class Discount {
  constructor(id, discountCode, percentReduction) {
    this.id = id;
    this.discountCode = discountCode;
    this.percentReduction = percentReduction;
  }

  getDiscountCode() {
    return this.discountCode;
  }
  getPercentReduction() {
    return this.percentReduction;
  }
}
