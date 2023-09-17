import Observer from './Observer';

class ProductView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.controller.model.addObserver(this);

    this.btnLoadMore = document.querySelector('.btn-load-more');

    this.btnLoadMore.addEventListener('click', () => {
      this.controller.loadMoreData();
    });

    this.menuContainer = document.querySelector('.list-menu');

    // debugger;

    // this.controller.loadInitialData();
    // this.updateStatusButton();
    // this.addToCart();
  }
  // Display product list on the user interface.
  renderProduct(products) {
    // debugger;
    this.menuContainer.innerHTML = '';

    products.forEach((product) => {
      const elementLi = document.createElement('li');
      elementLi.className = 'menu-item';

      const elememntImage = document.createElement('img');
      elememntImage.className = 'img-rectangle';

      // // Check if the product is available in the cart and add the 'added-to-cart' class if so.
      const productId = product.id;
      const isAvaiableInCart = this.controller.checkProductInCart(productId);
      if (isAvaiableInCart) {
        elememntImage.classList.add('added-to-cart');
      }

      elememntImage.src = product.image;
      elememntImage.alt = product.name;
      elememntImage.setAttribute('data-product-id', product.id);
      elememntImage.setAttribute('data-product-name', product.name);
      elememntImage.setAttribute('data-product-image', product.image);
      elememntImage.setAttribute('data-product-price', product.totalPrice);
      elememntImage.setAttribute('data-product-isSelected', product.isSelected);

      const elementSpan = document.createElement('span');
      elementSpan.className = 'text-small';
      elementSpan.innerText = product.name;

      elementLi.appendChild(elememntImage);
      elementLi.appendChild(elementSpan);

      this.menuContainer.appendChild(elementLi);
    });
  }

  // Method to add products to cart
  addToCart() {
    this.menuContainer.addEventListener('click', (event) => {
      const target = event.target;
      if (target.classList.contains('img-rectangle')) {
        // Get input values
        const productId = target.dataset.productId;
        const productName = target.dataset.productName;
        const productImage = target.dataset.productImage;
        const productPrice = target.dataset.productPrice;

        const isAddedToCart = this.controller.checkProductInCart(productId);
        // If the product does not exist in the cart, can add it
        if (!isAddedToCart) {
          this.controller.addToCart(productId, productName, productImage, productPrice);
          target.classList.add('added-to-cart');
          alert('Added to cart');
        }
        // And vice versa, if the product already exists in the cart, when clicked it will be removed from the cart
        else {
          this.controller.removeOutCart(productId);
          target.classList.remove('added-to-cart');
          alert('Removed from cart');
        }
      }
    });
  }

  updateStatusButton() {
    const btnLoadMore = document.querySelector('.btn-load-more');
    if (this.controller.model.checkProductExists) {
      btnLoadMore.disabled = true;
    }
  }

  /**
   * Update the user interface and calculate totals based on new data.
   * @param {*} data Data is provided from the model.
   */
  update(data) {
    console.log('ProductView - update', data);
    // Call the renderProduct method to update the menu appearance
    this.renderProduct(data);
  }
}

export { ProductView };
