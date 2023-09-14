import Observer from './Observer';

export class CheckoutView extends Observer {
  constructor(controllerCheckout) {
    super();
    this.controllerCheckout = controllerCheckout;

    this.renderCheckout();
  }

  // Display the payment order interface
  renderCheckout() {
    const formCheckout = document.querySelector('.form-checkout');
    formCheckout.innerHTML = `
      <label class="text-medium" for="name">Full Name:</label>
      <input class="form-input" type="text" id="name" name="name" required />

      <label class="text-medium" for="email">Email:</label>
      <input class="form-input" type="email" id="email" name="email" required />

      <label class="text-medium" for="phone">Phone Number:</label>
      <input class="form-input" type="text" id="phone" name="phone" required />

      <label class="text-medium" for="address">Address:</label>
      <input class="form-input" type="text" id="address" name="address" required />

      <label class="text-medium" for="description">Description:</label>
      <textarea
          class="form-input textarea-size"
          name="description"
          id="description"></textarea>

      <label class="text-medium" for="payment-method"> Payment Method: </label>
      <select class="form-input" id="payment-method" name="payment-method" required>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bank-transfer">Bank Transfer</option>
      </select>
      `;

    const cardCheckout = document.querySelector('.card-checkout');
    cardCheckout.innerHTML = `
        <section class="card-primary">
            <h4 class="text-h4">Your total</h4>
            <div class="total-checkout">
              <span class="text-large">Total</span>
              <span class="text-large">$80.00</span>
            </div>
            <button class="btn-secondary text-large font-family btn-checkout">Checkout</button>
        </section>
      `;
  }
}
