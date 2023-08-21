class LoginController {
  constructor(model) {
    this.model = model;
  }

  login() {
    const username = this.model.getUsername();
    const password = this.model.getPassword();

    this.model.authenticateUser(username, password);
  }

  setView(view) {
    this.view = view;
  }
}

export { LoginController };
