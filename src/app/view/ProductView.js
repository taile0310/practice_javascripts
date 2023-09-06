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

      const elementSpan = document.createElement('span');
      elementSpan.className = 'text-small';
      elementSpan.innerText = product.name;

      elementLi.appendChild(elememntImage);
      elementLi.appendChild(elementSpan);
      menuContainer.appendChild(elementLi);
    });
  }
}

export { ProductView };
