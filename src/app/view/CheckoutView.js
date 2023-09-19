import Observer from './Observer';
import { COPYRIGHT, formatNumber } from '../constant/MenuConstant';

class CheckoutView extends Observer {
  constructor(checkoutController, cartController) {
    super();
    this.checkoutController = checkoutController;

    this.cartController = cartController;
    this.cartController.cartModel.addObserver(this);

    this.totalPrice = 0;
    this.renderCheckout();
    this.setupDOMElements();
    this.setupEventListeners();
  }

  // Display the payment order interface
  renderCheckout() {
    const formCheckout = document.querySelector('.form-checkout');
    formCheckout.innerHTML = `
      <label class="text-medium" for="name">Full Name:</label>
      <input class="form-input" type="text" id="name" name="name" required />
      <span class="message-name error"></span>

      <label class="text-medium" for="email">Email:</label>
      <input class="form-input" type="email" id="email" name="email" required />
      <span class="message-email error"></span>

      <label class="text-medium" for="phone">Phone Number:</label>
      <input class="form-input" type="text" id="phone" name="phone" required />
      <span class="message-phone error"></span>

      <label class="text-medium" for="address">Address:</label>
      <input class="form-input" type="text" id="address" name="address" required />
      <span class="message-address error"></span>

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
              <span class="text-large checkout">${formatNumber(+this.totalPrice)}</span>
            </div>
            <button class="btn-secondary text-large font-family btn-checkout">Checkout</button>
        </section>
      `;

    const copyright = document.querySelector('.copyright-checkout');
    copyright.textContent = `${COPYRIGHT.TEXT}`;
  }

  //Set the required elements
  setupDOMElements() {
    this.nameInput = document.getElementById('name');
    this.emailInput = document.getElementById('email');
    this.phoneInput = document.getElementById('phone');
    this.addressInput = document.getElementById('address');
    this.description = document.getElementById('description');
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
        this.messageName.textContent = 'Invalid name format, Ex: Le Van A';
      }
    });

    //Email input check event
    this.emailInput.addEventListener('input', (event) => {
      const email = event.target.value;
      if (this.isValidEmail(email)) {
        this.messageEmail.textContent = '';
      } else {
        this.messageEmail.textContent = 'Invalid email format, Ex: lht@gmail.com';
      }
    });

    //Phone input check event
    this.phoneInput.addEventListener('input', (event) => {
      const phone = event.target.value;
      if (this.isValidPhone(phone)) {
        this.messagePhone.textContent = '';
      } else {
        this.messagePhone.textContent = 'Invalid phone format, Ex: 0365 xxx xxx';
      }
    });

    //Address input check event
    this.messageAddress.addEventListener('input', (event) => {
      const address = event.target.value;
      if (this.isValidName(address)) {
        this.messageAddress.textContent = '';
      } else {
        this.messageAddress.textContent = 'Invalid name format, Ex: 10 Nguyen Van Linh';
      }
    });

    const checkoutButton = document.querySelector('.btn-checkout');
    checkoutButton.addEventListener('click', () => {
      this.isCheckoutSuccessful();
    });
  }

  /**
   * Method checks input for name
   * @param {string} name
   * @returns
   */
  isValidName(name) {
    const regexName = /^[a-zA-ZÀ-ỹ\s]*$/;
    return regexName.test(name);
  }

  /**
   * Method checks input for email
   * @param {string} email
   * @returns
   */
  isValidEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  }

  /**
   * Method checks input for phone
   * @param {string} phone
   * @returns
   */
  isValidPhone(phone) {
    const regexPhone = /^(0)+[3|5|7|8|9]+([0-9]{8})$/;
    return regexPhone.test(phone);
  }

  /**
   * Method checks input for address
   * @param {*} address
   * @returns
   */
  isValidAddress(address) {
    const regexAddress = /^[a-z0-ZÀ-ỹ\s-]*$/;
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
      this.clearFormInputs();
      alert('Checkout successful!');
      localStorage.clear();
      location.reload();
    } else {
      // If any field is invalid, show an error message
      alert('Checkout failed. Please check your information.');
    }
  }

  // Method to clear form inputs
  clearFormInputs() {
    this.nameInput.value = '';
    this.emailInput.value = '';
    this.phoneInput.value = '';
    this.addressInput.value = '';
    this.description.value = '';
  }

  // Method updates the total amount for the checkout
  updateTotalForCheckout() {
    this.totalPrice = this.cartController.cartModel.totalValue;
    const updateTotal = document.querySelector('.checkout');
    updateTotal.textContent = `$${formatNumber(+this.totalPrice)}`;
  }

  // formatNumber(number) {
  //   return number.toLocaleString(undefined, {
  //     minimumFractionDigits: 2,
  //   });
  // }

  /**
   * Update the user interface and calculate totals based on new data.
   */
  update() {
    // Call the updateTotalForCheckout method to update the total value
    this.updateTotalForCheckout();
  }
}
export { CheckoutView };
