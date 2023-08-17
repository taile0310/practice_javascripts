class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    const existingItem = this.items.find((item) => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ product, quantity: 1 });
    }
    console.log(`Added ${product.name} to cart.`);
    return this.items;
  }

  removeItem(productId) {
    const index = this.items.findIndex((item) => item.product.id === productId);
    if (index !== -1) {
      const removedItem = this.items.splice(index, 1)[0];
      console.log(`Removed ${removedItem.product.name} from cart.`, this.items);

      // Find the corresponding product in the products array and increase its quantity
      const productIndex = products.findIndex((product) => product.id === productId);
      if (productIndex !== -1) {
        products[productIndex].quantity += removedItem.quantity;
      }
    }
    return this.items;
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  // List of products in the cart and remove product event
  displayCart() {
    const cartTableBody = document.getElementById('cart-list');
    cartTableBody.innerHTML = '';

    this.items.forEach((item) => {
      const row = document.createElement('tr');

      const productNameCell = document.createElement('td');
      productNameCell.textContent = item.product.name;

      const priceCell = document.createElement('td');
      priceCell.textContent = `$${item.product.price}`;

      const quantityCell = document.createElement('td');
      quantityCell.textContent = item.quantity;

      const removeButtonCell = document.createElement('td');
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        this.removeItem(item.product.id);
        this.displayCart();
        updateProductList();
      });

      removeButtonCell.appendChild(removeButton);

      row.appendChild(productNameCell);
      row.appendChild(priceCell);
      row.appendChild(quantityCell);
      row.appendChild(removeButtonCell);

      cartTableBody.appendChild(row);
    });

    const totalPrice = document.getElementById('total-price');
    totalPrice.textContent = this.getTotalPrice();
  }
}

const products = [
  new Product(1, 'Laptop', 1000, 5),
  new Product(2, 'IPhone', 500, 10),
  new Product(3, 'Headphones', 100, 20),
  new Product(4, 'Samsung', 400, 15),
  new Product(5, 'Xiaomi', 300, 35),
  new Product(6, 'Oppo', 200, 50),
  new Product(7, 'Vivo', 200, 55),
];

const loadProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

const cart = new ShoppingCart();

// Add to cart event
const addToCart = () => {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  loadProducts().then((loadedProducts) => {
    loadedProducts.forEach((product) => {
      const tr = document.createElement('tr');
      tr.setAttribute('data-product-id', product.id);

      const productNameCell = document.createElement('td');
      productNameCell.textContent = product.name;

      const priceCell = document.createElement('td');
      priceCell.textContent = `$${product.price}`;

      const quantityCell = document.createElement('td');
      const quantitySpan = document.createElement('span');
      quantitySpan.textContent = product.quantity;
      quantitySpan.classList.add('product-quantity');
      quantityCell.appendChild(quantitySpan);

      const addButtonCell = document.createElement('td');
      const addButton = document.createElement('button');
      addButton.textContent = 'Add to Cart';
      addButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (product.quantity > 0) {
          const updatedCartItems = cart.addItem(product);
          product.quantity--;
          updateProductList();
          cart.displayCart();
          console.log(`Updated Cart Items:`, updatedCartItems);
        } else {
          alert('The number of products in stock is out of stock');
        }
      });

      addButtonCell.appendChild(addButton);

      tr.appendChild(productNameCell);
      tr.appendChild(priceCell);
      tr.appendChild(quantityCell);
      tr.appendChild(addButtonCell);

      productList.appendChild(tr);
    });
  });
};
addToCart();

// Update the number of products in the list after adding the cart successfully
const updateProductList = () => {
  const productList = document.getElementById('product-list');
  const productRows = productList.getElementsByTagName('tr');

  for (let i = 0; i < productRows.length; i++) {
    const quantitySpan = productRows[i].querySelector('.product-quantity');
    const productId = parseInt(productRows[i].getAttribute('data-product-id'));

    const productIndex = products.findIndex((product) => product.id === productId);
    if (productIndex !== -1) {
      quantitySpan.textContent = products[productIndex].quantity;
    }
  }
};

// Add event checkout
const checkout = document.getElementById('checkout');
checkout.addEventListener('click', () => {
  const successCheckout = document.getElementById('success-checkout');
  successCheckout.innerHTML = '';

  const totalPriceValue = cart.getTotalPrice();
  if (totalPriceValue === 0) {
    successCheckout.innerHTML = '<strong>Your cart is empty.</strong>';
  } else {
    successCheckout.innerHTML = `
      <strong>Thank you for your purchase!</strong><br>
      <strong>Product:</strong> ${cart.items.map((item) => item.product.name).join(', ')}<br>
      <strong>Total product:</strong> ${cart.items.reduce((totalQuantity, product) => totalQuantity + product.quantity, 0)}<br>
      <strong>Total price:</strong> $${totalPriceValue}<br>
    `;
  }

  // Clear cart and update display
  cart.items = [];
  cart.displayCart();
});
