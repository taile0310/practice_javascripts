import Observer from './Observer';

export class CheckoutView extends Observer {
  constructor(controllerCheckout, totalValue) {
    super();
    this.controllerCheckout = controllerCheckout;

    this.renderCheckout();
    this.setupDOMElements();
    this.setupEventListeners();

    this.totalValue = totalValue; // Lưu giá trị totalValue
  }

  // Display the payment order interface
  renderCheckout() {
    const formCheckout = document.querySelector('.form-checkout');
    formCheckout.innerHTML = `
      <label class="text-medium" for="name">Full Name:</label>
      <input class="form-input" type="text" id="name" name="name" required />
      <div class="message-name error"></div>

      <label class="text-medium" for="email">Email:</label>
      <input class="form-input" type="email" id="email" name="email" required />
      <div class="message-email error"></div>

      <label class="text-medium" for="phone">Phone Number:</label>
      <input class="form-input" type="text" id="phone" name="phone" required />
      <div class="message-phone error"></div>

      <label class="text-medium" for="address">Address:</label>
      <input class="form-input" type="text" id="address" name="address" required />
      <div class="message-address error"></div>

      <label class="text-medium" for="description">Description:</label>
      <textarea
          class="form-input textarea-size"
          name="description"
          id="description"></textarea>

      <label class="text-medium" for="payment-method"> Payment Method: </label>
      <select class="form-input" id="payment-method" name="payment-method">
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
              <span class="text-large subtotal">${this.subtotalElement}</span>
            </div>
            <button class="btn-secondary text-large font-family btn-checkout">Checkout</button>
        </section>
      `;
  }

  //Set the required elements
  setupDOMElements() {
    this.nameInput = document.getElementById('name');
    this.emailInput = document.getElementById('email');
    this.phoneInput = document.getElementById('phone');
    this.addressInput = document.getElementById('address');
    this.messageName = document.querySelector('.message-name');
    this.messageEmail = document.querySelector('.message-email');
    this.messagePhone = document.querySelector('.message-phone');
    this.messageAddress = document.querySelector('.message-address');
  }

  //Set the required events
  setupEventListeners() {
    //Name input check event
    this.nameInput.addEventListener('input', (event) => {
      const name = event.target.value;

      if (this.isValidName(name)) {
        this.messageName.textContent = '';
      } else {
        this.messageName.textContent = 'Invalid name format';
      }
    });

    this.emailInput.addEventListener('input', (event) => {
      const email = event.target.value;

      if (this.isValidEmail(email)) {
        this.messageEmail.textContent = '';
      } else {
        this.messageEmail.textContent = 'Invalid email format';
      }
    });

    this.phoneInput.addEventListener('input', (event) => {
      const phone = event.target.value;

      if (this.isValidPhone(phone)) {
        this.messagePhone.textContent = '';
      } else {
        this.messagePhone.textContent = 'Invalid phone format';
      }
    });

    this.messageAddress.addEventListener('input', (event) => {
      const address = event.target.value;
      if (this.isValidName(address)) {
        this.messageAddress.textContent = '';
      } else {
        this.messageAddress.textContent = 'Invalid name format';
      }
    });

    const checkoutButton = document.querySelector('.btn-checkout');
    checkoutButton.addEventListener('click', () => {
      this.isCheckoutSuccessful();
    });
  }

  isValidName(name) {
    const regexName = /^[a-zA-ZÀ-ỹ\s]*$/;
    return regexName.test(name);
  }
  isValidEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  }

  isValidPhone(phone) {
    const regexPhone = /^(0)+[3|5|7|8|9]+([0-9]{8})$/;
    return regexPhone.test(phone);
  }

  isValidAddress(address) {
    const regexAddress = /^[0-9]+[a-z0-ZÀ-ỹ\s]+[a-zA-ZÀ-ỹ\s-]*$/;
    return regexAddress.test(address);
  }

  // Add this method to check if all required fields are valid
  isCheckoutSuccessful() {
    const name = this.nameInput.value;
    const email = this.emailInput.value;
    const phone = this.phoneInput.value;
    const address = this.addressInput.value;
    // Check if any of the fields are empty
    if (!name || !email || !phone || !address) {
      alert('Please fill in all required fields.');
      return; // Exit the function early if any field is empty
    }
    // Check if all fields are valid
    if (
      this.isValidName(name) &&
      this.isValidEmail(email) &&
      this.isValidPhone(phone) &&
      this.isValidAddress(address)
    ) {
      // If all fields are valid, show a success alert
      alert('Checkout successful!');
    } else {
      // If any field is invalid, show an error message
      alert('Checkout failed. Please check your information.');
    }
  }
}
