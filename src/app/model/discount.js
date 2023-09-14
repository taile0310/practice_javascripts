import Observable from './Observable';

class Discount extends Observable {
  constructor() {
    super();
    this.discounts = [];
  }

  /**
   * Get a list of discount codes
   * @param {Array} discounts - An array of discount objects.
   * @returns {Array} - Returns the list of discounts.
   */
  getListDiscounts(discounts) {
    this.discounts = discounts;
    console.log('list discout', this.discounts);
    return this.discounts;
  }

  /**
   * Check if the discount code exists
   * @param {string} promoCode - The promo code to check.
   * @returns {Object | undefined} Returns the discount object if found, or undefined if not found.
   */
  isAvailable(promoCode) {
    debugger;
    this.discountCode = this.discounts.find((discount) => discount.code === promoCode);
    return this.discountCode;
  }
}
export { Discount };
