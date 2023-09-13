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

    debugger;

    this.controller.loadInitialData();
    this.updateStatusButton();
    this.addToCart();
  }

  // menu
  renderProduct(products) {
    debugger;
    this.menuContainer.innerHTML = '';

    products.forEach((product) => {
      const elementLi = document.createElement('li');
      elementLi.className = 'menu-item';

      const elememntImage = document.createElement('img');
      elememntImage.className = 'img-rectangle';

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

      if (product.isSelected === true) {
        console.log('Selected', product.isSelected);
      }

      this.menuContainer.appendChild(elementLi);
    });
  }

  updateStatusButton() {
    const btnLoadMore = document.querySelector('.btn-load-more');
    if (this.controller.model.checkProductExists) {
      btnLoadMore.disabled = true;
    }
  }

  update(data) {
    this.renderProduct(data);
  }
}

export { ProductView };
