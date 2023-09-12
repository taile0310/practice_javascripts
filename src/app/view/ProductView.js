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
      // If pproduct dang nam trong cart 
      // thi ve them vong trong do
      const isAvaiableInCart = this.controller.isAvaiableInCart(productId)
      if(isAvaiableInCart) {
        elementLi.addd...Observer.apply.
      }
    
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

      const elementSpan = document.createElement('span');
      elementSpan.className = 'text-small';
      elementSpan.innerText = product.name;

      elementLi.appendChild(elememntImage);
      elementLi.appendChild(elementSpan);

      if (product.isSelected === true) {
        console.log('Selected', product.isSelected);
        elememntImage.classList.add('added-to-cart');
      }

      this.menuContainer.appendChild(elementLi);
    });
  }

  addToCart() {
    this.menuContainer.addEventListener('click', (event) => {
      debugger;
      const target = event.target;
      // if (target.classList.contains('img-rectangle')) {
      //   const productId = target.dataset.productId;
      //   const productName = target.dataset.productName;
      //   const productImage = target.dataset.productImage;
      //   const productPrice = target.dataset.productPrice;
      //   const quantity = 1;

      //   const productIsSelected = target.dataset.productIsSelected;

      //   if (target.classList.contains('added-to-cart')) {
      //     debugger;
      //     target.classList.remove('added-to-cart');
      //     this.controller.removeFromCart(productId);
      //     alert('Removed from cart');
      //   } else {
      //     target.classList.add('added-to-cart');
      //     this.controller.addToCart(
      //       productId,
      //       // productName,
      //       // productImage,
      //       // productPrice,
      //       // quantity,
      //       // productIsSelected,
      //     );
      //     alert('Added to cart');
      //   }
      // } else {
      //   // Remove
      // }

      // [0] - Lay product Id tu target
      const productId = target.dataset.productId;
      // [1] - Kiem tra Product Id co nam trong cart hay ko?\
      const isAddedToCart = this.controller.checkProductInCart(productId)
      // [1.1] Product nam trong cart => Remove khoi cart
      if(isAddToCart) {
        // [1.1.1] // Controler remove
        this.controller.removeOutCart(productId)
        // decorator 
      } else {
        // [1.2] Product se duoc them vao cart
      // [1.2.1] // controller.addtoCart
        this.controller.addToCart(productId)
        // decorator 
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
  }
}

export { ProductView };
