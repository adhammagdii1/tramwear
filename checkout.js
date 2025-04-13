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

function displayOrderSummary() {
  const orderItems = document.getElementById('orderItems');
  const cart = getCart();
  if (cart.length === 0) {
      orderItems.innerHTML = '<p>السلة فارغة</p>';
      updateSummary(0);
      return;
  }

  orderItems.innerHTML = cart.map(item => `
      <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          <div class="cart-item-details">
              <h3>${item.name}</h3>
              <p>اللون: ${item.color}</p>
              <p>المقاس: ${item.size}</p>
              <p>الكمية: ${item.quantity}</p>
              <p>السعر: ${item.price * item.quantity} EGP</p>
          </div>
      </div>
  `).join('');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  updateSummary(subtotal);
}

function updateSummary(subtotal) {
  const shipping = 50;
  const total = subtotal + shipping;
  document.getElementById('subtotal').textContent = `${subtotal} EGP`;
  document.getElementById('total').textContent = `${total} EGP`;
}

document.addEventListener('DOMContentLoaded', () => {
  displayOrderSummary();
  updateCartCounter();

  document.getElementById('proceed-to-address').addEventListener('click', () => {
      const paymentMethod = document.getElementById('payment-method').value;
      localStorage.setItem('paymentMethod', paymentMethod);
      window.location.href = './addres.html';
  });
});
