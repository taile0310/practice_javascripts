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

    this.renderProduct(this.controller.getListProducts());
    this.updateStatusButton();
    this.addToCart();
  }

  renderProduct(products) {
    const menuContainer = document.querySelector('.list-menu');
    menuContainer.innerHTML = '';

    products.forEach((product, index) => {
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
      elememntImage.setAttribute('data-product-isSelected', product.isSelected);
      elememntImage.setAttribute('data-product-index', index);

      const elementSpan = document.createElement('span');
      elementSpan.className = 'text-small';
      elementSpan.innerText = product.name;

      elementLi.appendChild(elememntImage);
      elementLi.appendChild(elementSpan);

      if (product.isSelected === true) {
        console.log('Selected', product.isSelected);
        elememntImage.classList.add('added-to-cart');
      }

      menuContainer.appendChild(elementLi);
    });
  }

  addToCart() {
    this.menuContainer.addEventListener('click', (event) => {
      debugger;
      const target = event.target;
      if (target.classList.contains('img-rectangle')) {
        const productId = target.dataset.productId;
        const productName = target.dataset.productName;
        const productImage = target.dataset.productImage;
        const productPrice = target.dataset.productPrice;
        const productIsSelected = target.dataset.productIsSelected;

        const quantity = 1;

        if (target.classList.contains('added-to-cart')) {
          debugger;
          target.classList.remove('added-to-cart');
          this.controller.removeFromCart(productId);
          alert('Removed from cart');
        } else {
          target.classList.add('added-to-cart');
          this.controller.addToCart(
            productId,
            productName,
            productImage,
            productPrice,
            productIsSelected,
            quantity,
          );
          alert('Added to cart');
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

  update(data) {
    this.renderProduct(data);
    this.updateStatusButton();
  }
}

export { ProductView };
