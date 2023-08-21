import Observer from './Observer';

class LoginView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.usernameInput = document.getElementById('username');
    this.passwordInput = document.getElementById('password');
    this.loginButton = document.getElementById('login-button');
    this.messageDiv = document.getElementById('message');
    this.controller.model.addObserver(this);

    this.usernameInput.addEventListener('input', (event) => {
      this.controller.setUsername(event.target.value);
    });

    this.passwordInput.addEventListener('input', (event) => {
      this.controller.setPassword(event.target.value);
    });

    this.loginButton.addEventListener('click', () => {
      this.controller.login();
    });

    this.controller.setView(this);
  }

  showMessage(message, isSuccess) {
    console.log(message);
    this.messageDiv.style.fontSize = '14px';
    this.messageDiv.textContent = message;

    if (!isSuccess) {
      this.messageDiv.style.color = 'red';
    } else {
      this.messageDiv.style.color = 'green';
    }
  }
}

export { LoginView };
