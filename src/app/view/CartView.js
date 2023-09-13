import Observer from './Observer';

import removeIcon from '../../asset/image/remove-icon.svg';
class CartView extends Observer {
  constructor(controllerCart) {
    super();
    this.controllerCart = controllerCart;
    this.controllerCart.modelCart.addObserver(this);

    this.cartContainer = document.querySelector('.list-cart');

    this.controllerCart.getProductsInCart();
    this.increaseAndDecreaseQuantity();
    this.removeProductFromCart();
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
              <input class="card-input" type="text" placeholder="enter promo code" />
              <button class="btn-secondary text-large font-family btn-apply">Apply</button>
            </section>
    `;

    const totalValue = productsInCart.reduce(
      (total, productsInCart) => total + productsInCart.totalPrice,
      0,
    );
    const subtotalElement = document.querySelector('.subtotal');
    subtotalElement.textContent = `$${totalValue}.00`;
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
    debugger;
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
  }
}

export { CartView };
