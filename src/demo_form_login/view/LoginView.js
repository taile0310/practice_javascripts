import Observer from './Observer';

class LoginView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.controller.model.addObserver(this);

    this.setupDOMElements();
    this.setupEventListeners();
    this.controller.setView(this);
  }

  //Set the required elements
  setupDOMElements() {
    this.usernameInput = document.getElementById('username');
    this.passwordInput = document.getElementById('password');
    this.loginButton = document.getElementById('login-button');
    this.messageDiv = document.getElementById('message');
  }

  //Set the required events
  setupEventListeners() {
    //Username input check event
    this.usernameInput.addEventListener('input', (event) => {
      const username = event.target.value;
      if (this.isValidEmail(username)) {
        this.clearErrorMessage();
      } else {
        this.showMessage('Invalid email format', false);
      }
    });

    //Password input check event
    this.passwordInput.addEventListener('input', (event) => {
      const password = event.target.value;
      if (this.isValidPassword(password)) {
        this.clearErrorMessage();
      } else {
        this.showMessage('Password must be at least 12 characters', false);
      }
    });

    //Login event
    this.loginButton.addEventListener('click', () => {
      const username = this.usernameInput.value;
      const password = this.passwordInput.value;

      this.controller.login(username, password);
    });
  }

  // Email regex
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Password regex
  isValidPassword(password) {
    // At least 12 characters long but 14 or more is better
    // A combination of uppercase letters, lowercase letters, numbers, and symbols
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?.&]{12,}$/;
    return passwordRegex.test(password);
  }

  //Clear the error message
  clearErrorMessage() {
    this.messageDiv.textContent = '';
    this.messageDiv.style.color = '';
  }

  //Show the message
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
