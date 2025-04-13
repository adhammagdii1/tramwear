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

document.addEventListener('DOMContentLoaded', () => {
    updateCartCounter();

    const form = document.getElementById('address-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const addressData = {
            fullName: document.getElementById('full-name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            paymentMethod: localStorage.getItem('paymentMethod')
        };

        localStorage.setItem('orderDetails', JSON.stringify(addressData));
        localStorage.removeItem('cart');
        window.location.href = 'confirmation.html';
    });
});