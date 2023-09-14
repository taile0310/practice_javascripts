import { Data } from '../storages/Data';

class DiscountService {
  constructor() {
    this.discountData = new Data();
    this.allDiscount = this.discountData.localStorageService.getListDiscounts();
  }

  // Method retrieves a list of discount codes
  getListDiscounts() {
    return this.allDiscount;
  }
}

export default DiscountService;
