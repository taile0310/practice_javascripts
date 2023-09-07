import Observer from './Observer';

class ProductView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.controller.model.addObserver(this);

    this.btnLoadMore = document.querySelector('.btn-load-more');

    this.btnLoadMore.addEventListener('click', () => {
      this.controller.loadMore();
    });

    this.renderProduct(this.controller.getListProducts());
    this.updateStatusButton();

    const addToCartButtons = document.querySelectorAll('.img-rectangle');
    addToCartButtons.forEach((elementImage) => {
      elementImage.addEventListener('click', () => {
        const productId = elementImage.dataset.productId;
        const productName = elementImage.dataset.productName;
        const productImage = elementImage.dataset.productImage;
        const productPrice = elementImage.dataset.productPrice;
        const quantity = 1;

        if (elementImage.classList.contains('added-to-cart')) {
          elementImage.classList.remove('added-to-cart');

          this.controller.removeFromCart(productId);

          alert('Removed from cart');
        } else {
          elementImage.classList.add('added-to-cart');
          this.controller.addToCart(productId, productName, productImage, productPrice, quantity);

          alert('Added to cart');
        }
      });
    });
  }

  renderProduct(products) {
    const menuContainer = document.querySelector('.list-menu');
    menuContainer.innerHTML = '';

    products.forEach((product) => {
      const elementLi = document.createElement('li');
      elementLi.className = 'menu-item';

      const elememntImage = document.createElement('img');
      elememntImage.className = 'img-rectangle';
      elememntImage.src = product.image;
      elememntImage.alt = product.name;
      elememntImage.setAttribute('data-product-id', product.id);
      elememntImage.setAttribute('data-product-name', product.name);
      elememntImage.setAttribute('data-product-image', product.image);
      elememntImage.setAttribute('data-product-price', product.totalPrice);

      const elementSpan = document.createElement('span');
      elementSpan.className = 'text-small';
      elementSpan.innerText = product.name;

      elementLi.appendChild(elememntImage);
      elementLi.appendChild(elementSpan);
      menuContainer.appendChild(elementLi);
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
    this.updateStatusButton();
  }
}

export { ProductView };
