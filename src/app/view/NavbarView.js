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
      elememntImage.src = link.image;
      elememntImage.alt = link.name;

      elementA.appendChild(elememntImage);
      navbarContainer.appendChild(elementA);
    });
  }
}
export { NavbarView };
