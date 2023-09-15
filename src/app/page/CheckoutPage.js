import { CheckoutController } from '../controller/CheckoutController';
import { Checkout } from '../model/Checkout';
import { CheckoutView } from '../view/CheckoutView';

// export function renderCheckoutTemplate() {
//   const checkoutModel = new Checkout();
//   const checkoutController = new CheckoutController(checkoutModel);
//   const checkouttView = new CheckoutView(checkoutController);
// }
class renderCheckoutTemplate {
  constructor() {
    this.checkoutModel = new Checkout();
    this.checkoutController = new CheckoutController(this.checkoutModel);
    this.checkouttView = new CheckoutView(this.checkoutController);
  }
}
export default new renderCheckoutTemplate();
