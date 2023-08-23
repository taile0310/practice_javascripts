class LoginController {
  constructor(model) {
    this.model = model;
  }

  login(username, password) {
    this.model.authenticateUser(username, password);
  }

  setView(view) {
    this.view = view;
  }
}

export { LoginController };
