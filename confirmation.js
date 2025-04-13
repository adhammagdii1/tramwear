function updateCartCounter() {
    const counter = document.querySelector(".cart-counter");
    if (!counter) return;
    counter.textContent = 0; // السلة أصبحت فارغة بعد تأكيد الطلب
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCounter();
});