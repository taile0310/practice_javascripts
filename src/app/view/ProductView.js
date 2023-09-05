import Observer from './Observer';
class ProductView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.controller.model.addObserver(this);

    this.displayedListProduct = 8;
    this.productsNext = 4;
    this.btnLoadMore = document.querySelector('.btn-load-more');

    this.btnLoadMore.addEventListener(
      'click',
      (i, index) => {
        console.log('index: ' + index++);
        this.loadMore();
      },
      { once: true },
    );
  }

  renderProduct(products) {
    const menuContainer = document.querySelector('.list-menu');
    menuContainer.innerHTML = '';
    const productsToDisplay = products.slice(0, this.displayedListProduct);

    productsToDisplay.forEach((product) => {
      const elementLi = document.createElement('li');
      elementLi.className = 'menu-item';

      const elememntImage = document.createElement('img');
      elememntImage.className = 'img-rectangle';
      elememntImage.src = product.image;
      elememntImage.alt = product.name;

      const elementSpan = document.createElement('span');
      elementSpan.className = 'text-small';
      elementSpan.innerText = product.name;

      elementLi.appendChild(elememntImage);
      elementLi.appendChild(elementSpan);
      menuContainer.appendChild(elementLi);
    });
  }

  loadMore() {
    const products = this.controller.getListProductsController();
    console.log('hi:', JSON.stringify(products));
    const startIndex = this.displayedListProduct;
    const endIndex = startIndex + this.productsNext;
    const menuContainer = document.querySelector('.list-menu');

    const productsToDisplay = products.slice(startIndex, endIndex);

    productsToDisplay.forEach((product) => {
      const elementLi = document.createElement('li');
      elementLi.className = 'menu-item';

      const elememntImage = document.createElement('img');
      elememntImage.className = 'img-rectangle';
      elememntImage.src = product.image;
      elememntImage.alt = product.name;

      const elementSpan = document.createElement('span');
      elementSpan.className = 'text-small';
      elementSpan.innerText = product.name;

      elementLi.appendChild(elememntImage);
      elementLi.appendChild(elementSpan);
      menuContainer.appendChild(elementLi);
    });

    // this.displayedListProduct = endIndex;

    if (this.displayedListProduct >= products.length) {
      this.btnLoadMore.setAttribute('disabled', 'disabled');
    }
  }
}

export { ProductView };
