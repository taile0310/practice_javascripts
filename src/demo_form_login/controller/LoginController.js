class LoginController {
  constructor(model) {
    this.model = model;
  }

  setUsername(username) {
    this.model.setUsername(username);
  }

  setPassword(password) {
    this.model.setPassword(password);
  }

  login() {
    const username = this.model.getUsername();
    const password = this.model.getPassword();

    // Perform input validation
    if (username === '' || password === '') {
      this.model.notify('Username or password cannot be empty', false);
    } else {
      // Perform authentication logic here
      const users = [
        { username: 'admin', password: 'admin' },
        { username: 'admin1', password: 'admin1' },
        { username: 'admin2', password: 'admin2' },
        { username: 'admin3', password: 'admin3' },
        { username: 'admin4', password: 'admin4' },
      ];

      const authenticatedUser = users.find((user) => user.username === username && user.password === password);

      if (authenticatedUser) {
        this.model.notify('Login successful.', true);
      } else {
        this.model.notify('Invalid username or password.', false);
      }
    }
  }

  setView(view) {
    this.view = view;
  }
}

export { LoginController };
