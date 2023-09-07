import { CheckoutController } from '../controller/CheckoutController';
import { Checkout } from '../model/Checkout';
import { CheckoutView } from '../view/CheckoutView';

export function renderCheckoutTemplate() {
  const checkoutModel = new Checkout();
  const checkoutController = new CheckoutController(checkoutModel);
  const checkouttView = new CheckoutView(checkoutController);
}
