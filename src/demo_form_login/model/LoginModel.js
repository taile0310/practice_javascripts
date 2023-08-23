import Observable from './Observable';

class LoginModel extends Observable {
  constructor() {
    super();
    this.users = [
      { username: 'admin1@gmail.com', password: 'Admin1@gmail.com' },
      { username: 'admin2@gmail.com', password: 'Admin2@gmail.com' },
      { username: 'admin3@gmail.com', password: 'Admin3@gmail.com' },
      { username: 'admin4@gmail.com', password: 'Admin4@gmail.com' },
      { username: 'admin5@gmail.com', password: 'Admin5@gmail.com' },
    ];
  }

  getUsername() {
    return this.username;
  }

  getUsers() {
    return this.users;
  }

  authenticateUser(username, password) {
    const isAuthenticated = this.users.find((user) => user.username === username && user.password === password);

    if (isAuthenticated) {
      this.notify('Login successful.', true);
    } else {
      this.notify('Invalid username or password.', false);
    }
  }
}

export { LoginModel };
