// Define constants for menus in the application
export const NAVBAR = {
  LOGO: '0',
  HOME: '1',
  MENU: '2',
  CART: '3',
  CHECKOUT: '4',
  LOGOUT: '5',
};

// Define constants for copyright text
export const COPYRIGHT = {
  TEXT: 'Copyright &copy 2021 Sushi Restaurant',
};

// Define constants for function format number
export const formatNumber = (number) => {
  return number.toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });
};
