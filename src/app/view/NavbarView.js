import Observer from './Observer';

class NavbarView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
  }

  renderNavbar(navbars) {
    const navbarContainer = document.querySelector('.nav-menu');
    navbarContainer.innerHTML = '';

    navbars.forEach((link) => {
      const elementA = document.createElement('a');
      elementA.className = 'nav-item';
      elementA.href = link.path;

      const elememntImage = document.createElement('img');
      elememntImage.className = 'icon';
      elememntImage.src = link.imageNavbar;
      elememntImage.alt = link.name;

      elementA.addEventListener('click', (event) => {
        event.preventDefault(); // Ngăn chặn trình duyệt điều hướng đến URL

        // Kiểm tra nút đang được nhấp và thực hiện hành động tương ứng
        if (link.name === 'Menu') {
          // Xử lý khi nhấp vào Menu
          console.log('Bạn đã nhấp vào Menu.');
          // Gọi hàm hoặc thực hiện hành động liên quan đến Menu
        } else if (link.name === 'Cart') {
          // Xử lý khi nhấp vào Cart
          console.log('Bạn đã nhấp vào Cart.');
          // Gọi hàm hoặc thực hiện hành động liên quan đến Cart
        }
      });

      elementA.appendChild(elememntImage);
      navbarContainer.appendChild(elementA);
    });
  }
}

export { NavbarView };
