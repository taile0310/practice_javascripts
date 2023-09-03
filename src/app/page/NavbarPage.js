import { NavbarController } from '../controller/NavbarController';
import { Navbar } from '../model/Navbar';
import { NavbarView } from '../view/NavbarView';
import { renderProductTemplate } from './ProductPage';
import { renderCartTemplate } from './CartPage';

function renderNavbarTemplate() {
  const navbarModel = new Navbar();
  const navbarController = new NavbarController(
    navbarModel,
    renderProductTemplate, // Callback khi nhấp vào Menu
    renderCartTemplate, // Callback khi nhấp vào Cart
  );
  const navbarView = new NavbarView(navbarController);

  navbarView.renderNavbar(navbarModel.navbars);
}
renderNavbarTemplate();
