import Observer from './Observer';
import removeIcon from '../../asset/image/remove-icon.svg';
import { COPYRIGHT, formatNumber } from '../constant/MenuConstant';

class CartView extends Observer {
  constructor(cartController, navbarView) {
    super();
    this.cartController = cartController;
    this.cartController.cartModel.addObserver(this);
    this.navbarView = navbarView;

    this.cartContainer = document.querySelector('.list-cart');

    this.totalPrice = 0;
    this.renderCart(this.cartController.cartModel.productsInCart);
    this.cartController.getListDiscounts();
  }

  // Display the shopping cart on the user interface based on the product data in the shopping cart.
  renderCart(productsInCart) {
    this.cartContainer.innerHTML = '';
    // Get the length of the cart list
    this.lengths = productsInCart.length;

    if (this.lengths === 0) {
      // Display a notification if the cart is empty.
      this.cartContainer.innerHTML = '<p class="notify-empty">Your cart is empty.</p>';
    } else {
      // Display the list of products in the shopping cart.
      productsInCart.forEach((cartItem) => {
        const elementLi = document.createElement('li');
        elementLi.setAttribute('data-id', `${cartItem.id}`);
        elementLi.className = 'cart-item';
        elementLi.innerHTML = `
            <div>
              <img class="img-circle" src="${cartItem.image}" alt="${cartItem.name}" />
            </div>
            <div class="order-group">
              <div class="detail-dish">
                <span class="text-medium">${cartItem.name}</span>
                <span class="text-price">$${cartItem.total}.00</span>
              </div>
              <div class="quantity-input">
                <button class="btn-transparent text-price btn-minus" >-</button>
                <span class="quantity text-price">${cartItem.quantity}</span>
                <button class="btn-transparent text-price btn-plus" >+</button>
              </div>
              <button class="btn-transparent btn-remove">
                <img class="icon-remove" src="${removeIcon}" alt="Remove icon" />
              </button>
            </div>
          `;
        this.cartContainer.appendChild(elementLi);
      });
    }

    // Update cart total information.
    const cartGroup = document.querySelector('.card-group');
    cartGroup.innerHTML = `
            <section class="card-primary">
              <h4 class="text-h4">Your Subtotal</h4>
              <div class="detail-total">
                <span class="text-large">Subtotal</span>
                <span class="text-large subtotal">$${formatNumber(+this.totalPrice)}</span>
              </div>
              <button class="btn-secondary text-large font-family btn-confirm">
                Confirm Order
              </button>
            </section>
            <section class="card-secondary">
              <h4 class="text-h4">Promo Code</h4>
              <input class="card-input promo-code" type="text" placeholder="enter promo code" />
              <div class="message"></div>
              <button class="btn-secondary text-large font-family btn-apply">Apply</button>
            </section>
    `;

    const copyright = document.querySelector('.copyright-cart');
    copyright.textContent = `${COPYRIGHT.TEXT}`;

    this.navbarView.confirmOrder();
  }

  setupItemevent() {
    // Loop through the entire this.CartContainer
    const cartItems = this.cartContainer.querySelectorAll('.cart-item');
    cartItems.forEach((item) => {
      const itemId = item.getAttribute('data-id');
      const btnMinus = item.querySelector('.btn-minus');
      const btnPlus = item.querySelector('.btn-plus');
      const btnRemove = item.querySelector('.btn-remove');
      // Add btnMinus event
      btnMinus.addEventListener('click', () => {
        this.cartController.decreaseQuantity(itemId);
      });

      // Add btnPlus event
      btnPlus.addEventListener('click', () => {
        this.cartController.increaseQuantity(itemId);
      });

      // Add btnRemove event
      btnRemove.addEventListener('click', () => {
        this.cartController.removeOutCart(itemId);
      });
    });
  }

  // Method updates the total amount for the cart
  updateTotalPriceDisplay() {
    this.totalPrice = this.cartController.cartModel.totalValue;
    console.log(typeof this.totalPrice);
    const subtotalElement = document.querySelector('.subtotal');
    subtotalElement.textContent = `$${formatNumber(+this.totalPrice)}`;
    this.checkPromoCodeInput();
  }

  // Check the input promo code
  checkPromoCodeInput() {
    const promoCodeInput = document.querySelector('.promo-code');
    const btnApply = document.querySelector('.btn-apply');
    this.messageDiv = document.querySelector('.message');

    btnApply.addEventListener('click', () => {
      const promoCode = promoCodeInput.value;
      // Check the discount code
      const isExistCode = this.cartController.checkExistPromoCode(promoCode);
      // If it exists, return the message 'Valid discount code' and perform the calculation and update the subtotal again
      if (isExistCode) {
        this.messageDiv.textContent = 'Valid discount code';
      }
      // Otherwise, if it does not exist, return message 'Invalid discount code'
      else {
        this.messageDiv.textContent = 'Invalid discount code';
        this.messageDiv.style.color = 'red';
      }
    });
  }

  // formatNumber(number) {
  //   return number.toLocaleString(undefined, {
  //     minimumFractionDigits: 2,
  //   });
  // }

  /**
   * Update the user interface and calculate totals based on new data.
   * @param {*} data Data is provided from the model.
   */
  update(data) {
    // Call the renderCart method to update the cart appearance based on the new data
    this.renderCart(data);
    // setup item event
    this.setupItemevent();
    // Call the updateTotalPriceDisplay method to update the total value
    this.updateTotalPriceDisplay();
  }
}

export { CartView };
