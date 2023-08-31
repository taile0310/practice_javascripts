import { NavbarController } from '../controller/NavbarController';
import { Navbar } from '../model/Navbar';
import { NavbarView } from '../view/NavbarView';

function renderNavbarTemplate() {
  const navbarModel = new Navbar();
  const navbarController = new NavbarController(navbarModel);
  const navbarView = new NavbarView(navbarController);

  navbarView.renderNavbar(navbarModel.navbars);
}

renderNavbarTemplate();
