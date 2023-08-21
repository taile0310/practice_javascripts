import Observable from './Observable';

class LoginModel extends Observable {
  constructor() {
    super();
    this.username = '';
    this.password = '';
    this.users = [
      { username: 'admin', password: 'admin' },
      { username: 'admin1', password: 'admin1' },
      { username: 'admin2', password: 'admin2' },
      { username: 'admin3', password: 'admin3' },
      { username: 'admin4', password: 'admin4' },
    ];
  }

  setUsername(username) {
    this.username = username;
    this.notify(`Login name changed to ${username}`, true);
  }

  setPassword(password) {
    this.password = password;
    this.notify('Password changed', true);
  }

  getUsername() {
    return this.username;
  }

  getPassword() {
    return this.password;
  }

  getUsers() {
    return this.users;
  }

  authenticateUser(username, password) {
    const isAuthenticated = this.users.find((user) => user.username === username && user.password === password);

    if (username === '' || password === '') {
      this.notify('Username or password cannot be empty', false);
    } else {
      if (isAuthenticated) {
        this.notify('Login successful.', true);
      } else {
        this.notify('Invalid username or password.', false);
      }
    }
  }
}

export { LoginModel };
