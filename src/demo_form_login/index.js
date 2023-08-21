import { LoginModel } from './model/LoginModel';
import { LoginController } from './controller/LoginController';
import { LoginView } from './view/LoginView';

function main() {
  const model = new LoginModel();
  const controller = new LoginController(model);
  const view = new LoginView(controller);
}

main();
