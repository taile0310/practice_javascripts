import Observer from './Observer';

import removeIcon from '../../asset/image/remove-icon.svg';
class CartView extends Observer {
  constructor(controllerCart) {
    super();
    this.controllerCart = controllerCart;
    this.controllerCart.modelCart.addObserver(this);

    this.cartContainer = document.querySelector('.list-cart');

    this.controllerCart.getProductsInCart();
    this.controllerCart.getListDiscounts();
    this.removeProductFromCart();
    this.getValueInput();
  }

  renderCart(productsInCart) {
    debugger;
    this.cartContainer.innerHTML = '';

    if (productsInCart.length === 0) {
      this.cartContainer.innerHTML = '<p class="notify-empty">Your cart is empty.</p>';
    } else {
      productsInCart.forEach((cartItem, index) => {
        const elementLi = document.createElement('li');
        elementLi.className = 'cart-item';
        elementLi.innerHTML = `
            <img class="img-circle" src="${cartItem.image}" alt="${cartItem.name}" />
            <div class="order-group">
              <div class="detail-dish">
                <span class="text-medium">${cartItem.name}</span>
                <span class="text-price">$${cartItem.totalPrice}.00</span>
              </div>
              <div class="quantity-input">
                <button class="btn-transparent text-price btn-minus" data-id="${cartItem.id}" >-</button>
                <span class="quantity text-price">${cartItem.quantity}</span>
                <button class="btn-transparent text-price btn-plus" data-id="${cartItem.id}" >+</button>
              </div>
              <button class="btn-transparent btn-remove"  index="${index}">
                <img class="icon-remove" src="${removeIcon}" alt="Remove icon" data-id="${cartItem.id}" />
              </button>
            </div>
          `;
        this.cartContainer.appendChild(elementLi);
      });
    }

    const cartGroup = document.querySelector('.card-group');
    cartGroup.innerHTML = `
            <section class="card-primary">
              <h4 class="text-h4">Your Subtotal</h4>
              <div class="detail-total">
                <span class="text-large">Subtotal</span>
                <span class="text-large subtotal">${this.subtotalElement}</span>
              </div>
              <button class="btn-secondary text-large font-family btn-confirm">
                Confirm Order
              </button>
            </section>
            <section class="card-secondary">
              <h4 class="text-h4">Promo Code</h4>
              <input class="card-input promo-code" type="text" placeholder="enter promo code" />
              <div id="message"></div>
              <button class="btn-secondary text-large font-family btn-apply">Apply</button>
            </section>
    `;
  }

  /**
   * Calculates and updates the total value of products in the cart and displays it on the subtotal element.
   * @param {Array} productsInCart - An array of products in the cart.
   */
  calculateTotalValue(productsInCart) {
    this.totalValue = productsInCart.reduce(
      (total, productsInCart) => total + productsInCart.totalPrice,
      0,
    );
    const subtotalElement = document.querySelector('.subtotal');
    subtotalElement.textContent = `$${this.totalValue}.00`;
  }

  // Method get value in input
  getValueInput() {
    debugger;
    const promoCodeInput = document.querySelector('.promo-code');
    const btnApply = document.querySelector('.btn-apply');
    this.messageDiv = document.getElementById('message');

    btnApply.addEventListener('click', () => {
      const promoCode = promoCodeInput.value;
      // Check the discount code
      const isExistCode = this.controllerCart.checkExistPromoCode(promoCode);
      console.log(isExistCode, ' trnagj thai ');
      // If it exists, return the message 'Valid discount code' and perform the calculation and update the subtotal again
      if (isExistCode) {
        this.messageDiv.textContent = 'Valid discount code';
        const discountPercent = isExistCode.percentReduction;
        // Update this.totalValue by recalculating after applying the discount code
        this.totalValue = this.totalValue - (this.totalValue * discountPercent) / 100;
        // Updates displayed on the website
        const subtotalElement = document.querySelector('.subtotal');
        subtotalElement.textContent = `$${this.totalValue}.00`;
      }
      // Otherwise, if it does not exist, return message 'Invalid discount code'
      else {
        this.messageDiv.textContent = 'Invalid discount code';
      }
    });
  }

  //  Method increase or decreasr quantity
  increaseAndDecreaseQuantity() {
    this.btnMinus = document.querySelectorAll('.btn-minus');
    this.btnPlus = document.querySelectorAll('.btn-plus');

    this.cartContainer.addEventListener('click', (event) => {
      const target = event.target;
      if (target.classList.contains('btn-minus')) {
        const productId = target.getAttribute('data-id');
        this.controllerCart.decreaseQuantity(productId);
      } else if (target.classList.contains('btn-plus')) {
        const productId = target.getAttribute('data-id');
        this.controllerCart.increaseQuantity(productId);
      }
    });
  }

  // Method remove product from cart
  removeProductFromCart() {
    this.cartContainer.addEventListener('click', (event) => {
      const target = event.target;
      if (target.classList.contains('icon-remove')) {
        const productId = target.getAttribute('data-id');
        this.controllerCart.removeProductFromCart(productId);
      }
    });
  }

  update(data) {
    this.renderCart(data);
    this.calculateTotalValue(data);
  }
}

export { CartView };
