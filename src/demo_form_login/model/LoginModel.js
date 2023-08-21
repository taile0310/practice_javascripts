import Observable from './Observable';

class LoginModel extends Observable {
  constructor() {
    super();
    this.username = '';
    this.password = '';
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
}

export { LoginModel };
