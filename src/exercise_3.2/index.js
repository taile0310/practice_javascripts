const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirm');
const signUpButton = document.getElementById('sign-up');
const resetButton = document.getElementById('reset-form');
const successData = document.getElementById('success-data');

const emailErrorMessage = document.querySelector('#email + .error-message');
const usernameErrorMessage = document.querySelector('#username + .error-message');
const passwordErrorMessage = document.querySelector('#password + .error-message');
const confirmErrorMessage = document.querySelector('#confirm + .error-message');

signUpButton.addEventListener('click', () => {
  // Reset error messages
  emailErrorMessage.textContent = '';
  usernameErrorMessage.textContent = '';
  passwordErrorMessage.textContent = '';
  confirmErrorMessage.textContent = '';

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailErrorMessage.textContent = 'Invalid email format';
  }

  // Validate username
  const usernameRegex = /^\S+$/;
  if (usernameInput.value === '') {
    usernameErrorMessage.textContent = 'Username is required';
  } else if (!usernameRegex.test(usernameInput.value)) {
    usernameErrorMessage.textContent = 'Username cannot contain spaces';
  }

  // Validate password
  const passwordRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
  if (passwordInput.value.length < 8) {
    passwordErrorMessage.textContent = 'Password must be at least 8 characters';
  } else if (!passwordRegex.test(passwordInput.value)) {
    passwordErrorMessage.textContent = 'Password must contain at least one special character';
  }

  // Confirm password
  if (confirmInput.value !== passwordInput.value) {
    confirmErrorMessage.textContent = 'Passwords do not match';
  }

  // Check for errors before showing success data
  if (emailErrorMessage.textContent === '' && usernameErrorMessage.textContent === '' && passwordErrorMessage.textContent === '' && confirmErrorMessage.textContent === '') {
    successData.innerHTML = `
      <strong>Email:</strong> ${emailInput.value}<br>
      <strong>Username:</strong> ${usernameInput.value}<br>
      <strong>Password:</strong> ${passwordInput.value}
    `;
  } else {
    successData.textContent = '';
  }
});

resetButton.addEventListener('click', () => {
  // Remove value input
  emailInput.value = '';
  usernameInput.value = '';
  passwordInput.value = '';
  confirmInput.value = '';

  // Remove error message
  emailErrorMessage.textContent = '';
  usernameErrorMessage.textContent = '';
  passwordErrorMessage.textContent = '';
  confirmErrorMessage.textContent = '';

  // Remove data success
  successData.textContent = '';
});
