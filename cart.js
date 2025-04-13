function getCart() {
  try {
      return JSON.parse(localStorage.getItem("cart")) || [];
  } catch (error) {
      console.error("Error reading cart:", error);
      return [];
  }
}

function saveCart(cart) {
  try {
      localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
      console.error("Error saving cart:", error);
  }
}

function showNotification(message, type = "success") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
      notification.classList.add("show");
  }, 10);

  setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => notification.remove(), 300);
  }, 3000);
}

function updateCartCounter() {
  const counter = document.querySelector(".cart-counter");
  if (!counter) return;
  const cart = getCart();
  counter.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

function displayCart() {
  const cartItems = document.getElementById('cartItems');
  const cart = getCart();
  if (cart.length === 0) {
      cartItems.innerHTML = '<p>السلة فارغة</p>';
      updateSummary(0);
      return;
  }

  cartItems.innerHTML = cart.map((item, index) => `
      <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          <div class="cart-item-details">
              <h3>${item.name}</h3>
              <p>اللون: ${item.color}</p>
              <p>المقاس: ${item.size}</p>
              <p>السعر: ${item.price} EGP</p>
              <div class="quantity-controls">
                  <button onclick="updateQuantity(${index}, -1)">-</button>
                  <span>${item.quantity}</span>
                  <button onclick="updateQuantity(${index}, 1)">+</button>
              </div>
              <button onclick="removeFromCart(${index})" class="remove-btn">إزالة</button>
          </div>
      </div>
  `).join('');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  updateSummary(subtotal);
}

function updateQuantity(index, change) {
  let cart = getCart();
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
  }
  saveCart(cart);
  displayCart();
  updateCartCounter();
}

function removeFromCart(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  displayCart();
  updateCartCounter();
  showNotification('تمت إزالة المنتج من السلة', 'warning');
}

function updateSummary(subtotal) {
  const shipping = 50;
  const total = subtotal + shipping;
  document.getElementById('subtotal').textContent = `${subtotal} EGP`;
  document.getElementById('total').textContent = `${total} EGP`;
}

document.addEventListener('DOMContentLoaded', () => {
  displayCart();
  updateCartCounter();
});