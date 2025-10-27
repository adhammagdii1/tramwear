// بيانات المنتجات (الهوديز فقط)
const products = [
  {
      id: 1,
      name: "هودي كلاسيك",
      price: 450,
      image: "red.jpeg",
      description: "هودي شتوي دافئ مع جيب أمامي، مثالي للطقس البارد.",
      colors: [
          { name: "أسود", code: "#000000", image: "black.webp" },
          { name: "رمادي", code: "#808080", image: "grey.jpeg" },
          { name: "أزرق", code: "#0000FF", image: "blue.jpeg" },
          { name: "أحمر", code: "#FF0000", image: "red.jpeg" }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
      id: 2,
      name: "هودي رياضي",
      price: 500,
      image: "white.jpeg",
      description: "هودي رياضي خفيف الوزن، مثالي للتمارين أو الخروجات الكاجوال.",
      colors: [
          { name: "أخضر", code: "#28A745", image: "green.jpeg" },
          { name: "أبيض", code: "#FFFFFF", image: "white.jpeg" },
          { name: "برتقالي", code: "#FF6F61", image: "orange.jpeg" }
      ],
      sizes: ["S", "M", "L", "XL"]
  },
  {
      id: 3,
      name: "هودي مطبوع",
      price: 480,
      image: "yellow.jpeg",
      description: "هودي بتصميم مطبوع مميز، يناسب الأسلوب العصري.",
      colors: [
          { name: "أسود", code: "#000000", image: "black.webp" },
          { name: "أصفر", code: "#FFD700", image: "yellow.jpeg" }
      ],
      sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: 4,
    name: "هودي مطبوع",
    price: 480,
     image: "yellow.jpeg",
      description: "هودي بتصميم مطبوع مميز، يناسب الأسلوب العصري.",
      colors: [
          { name: "أسود", code: "#000000", image: "black.webp" },
          { name: "أصفر", code: "#FFD700", image: "yellow.jpeg" }
      ],
    sizes: ["M", "L", "XL", "XXL"]
},
{
  id: 5,
  name: "هودي مطبوع",
  price: 480,
    image: "yellow.jpeg",
      description: "هودي بتصميم مطبوع مميز، يناسب الأسلوب العصري.",
      colors: [
          { name: "أسود", code: "#000000", image: "black.webp" },
          { name: "أصفر", code: "#FFD700", image: "yellow.jpeg" }
      ],
  sizes: ["M", "L", "XL", "XXL"]
},
{
  id: 6,
  name: "هودي مطبوع",
  price: 480,
    image: "yellow.jpeg",
      description: "هودي بتصميم مطبوع مميز، يناسب الأسلوب العصري.",
      colors: [
          { name: "أسود", code: "#000000", image: "black.webp" },
          { name: "أصفر", code: "#FFD700", image: "yellow.jpeg" }
      ],
  sizes: ["M", "L", "XL", "XXL"]
},
{
  id: 7,
  name: "هودي مطبوع",
  price: 480,
     image: "yellow.jpeg",
      description: "هودي بتصميم مطبوع مميز، يناسب الأسلوب العصري.",
      colors: [
          { name: "أسود", code: "#000000", image: "black.webp" },
          { name: "أصفر", code: "#FFD700", image: "yellow.jpeg" }
      ],
  sizes: ["M", "L", "XL", "XXL"]
},
{
  id: 8,
  name: "هودي مطبوع",
  price: 480,
     image: "yellow.jpeg",
      description: "هودي بتصميم مطبوع مميز، يناسب الأسلوب العصري.",
      colors: [
          { name: "أسود", code: "#000000", image: "black.webp" },
          { name: "أصفر", code: "#FFD700", image: "yellow.jpeg" }
      ],
  sizes: ["M", "L", "XL", "XXL"]
},
{
  id: 9,
  name: "هودي مطبوع",
  price: 480,
    image: "yellow.jpeg",
      description: "هودي بتصميم مطبوع مميز، يناسب الأسلوب العصري.",
      colors: [
          { name: "أسود", code: "#000000", image: "black.webp" },
          { name: "أصفر", code: "#FFD700", image: "yellow.jpeg" }
      ],
  sizes: ["M", "L", "XL", "XXL"]
},
{
  id: 10,
  name: "هودي مطبوع",
  price: 480,
     image: "yellow.jpeg",
      description: "هودي بتصميم مطبوع مميز، يناسب الأسلوب العصري.",
      colors: [
          { name: "أسود", code: "#000000", image: "black.webp" },
          { name: "أصفر", code: "#FFD700", image: "yellow.jpeg" }
      ],
  sizes: ["M", "L", "XL", "XXL"]
},
{
  id: 11,
  name: "هودي مطبوع",
  price: 480,
  image: "images/hoodie-printed.jpg",
  description: "هودي بتصميم مطبوع مميز، يناسب الأسلوب العصري.",
  colors: [
      { name: "أسود", code: "#000000", image: "images/hoodie-printed-black.jpg" },
      { name: "أصفر", code: "#FFD700", image: "images/hoodie-printed-yellow.jpg" }
  ],
  sizes: ["M", "L", "XL", "XXL"]
},
{
  id: 12,
  image: "images/hoodie-printed.jpg",
  description: "هودي بتصميم مطبوع مميز، يناسب الأسلوب العصري.",
  colors: [
      { name: "أسود", code: "#000000", image: "images/hoodie-printed-black.jpg" },
      { name: "أصفر", code: "#FFD700", image: "images/hoodie-printed-yellow.jpg" }
  ],
  sizes: ["M", "L", "XL", "XXL"]
},
{
  id: 13,
  name: "هودي مطبوع",
  price: 480,
  image: "images/hoodie-printed.jpg",
  description: "هودي بتصميم مطبوع مميز، يناسب الأسلوب العصري.",
  colors: [
      { name: "أسود", code: "#000000", image: "images/hoodie-printed-black.jpg" },
      { name: "أصفر", code: "#FFD700", image: "images/hoodie-printed-yellow.jpg" }
  ],
  sizes: ["M", "L", "XL", "XXL"]
},
{
  id: 14,
  name: "هودي مطبوع",
  price: 480,
  image: "images/hoodie-printed.jpg",
  description: "هودي بتصميم مطبوع مميز، يناسب الأسلوب العصري.",
  colors: [
      { name: "أسود", code: "#000000", image: "images/hoodie-printed-black.jpg" },
      { name: "أصفر", code: "#FFD700", image: "images/hoodie-printed-yellow.jpg" }
  ],
  sizes: ["M", "L", "XL", "XXL"]
},
{
  id: 15,
  name: "هودي مطبوع",
  price: 480,
  image: "images/hoodie-printed.jpg",
  description: "هودي بتصميم مطبوع مميز، يناسب الأسلوب العصري.",
  colors: [
      { name: "أسود", code: "#000000", image: "images/hoodie-printed-black.jpg" },
      { name: "أصفر", code: "#FFD700", image: "images/hoodie-printed-yellow.jpg" }
  ],
  sizes: ["M", "L", "XL", "XXL"]
}

];

// سلة المشتريات
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// وظيفة لإظهار الإشعارات
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

// تحديث عداد السلة
function updateCartCounter() {
  const counter = document.querySelector('.cart-counter');
  if (counter) {
      counter.textContent = cart.reduce((total, item) => total + item.quantity, 0);
  }
}

// عرض المنتجات
function displayProducts(filteredProducts = products) {
  const container = document.getElementById('productContainer');
  if (!container) return;

  container.innerHTML = filteredProducts.map(product => `
      <div class="product" data-id="${product.id}">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <div class="product-info">
              <h2>${product.name}</h2>
              <p>${product.price} EGP</p>
          </div>
      </div>
  `).join('');

  // إضافة حدث النقر للمنتجات
  document.querySelectorAll('.product').forEach(product => {
      product.addEventListener('click', () => {
          const productId = parseInt(product.getAttribute('data-id'));
          const selectedProduct = products.find(p => p.id === productId);
          if (selectedProduct) {
              showProductModal(selectedProduct);
          }
      });
  });
}

// عرض نافذة المنتج
function showProductModal(product) {
  const modalContent = document.getElementById('modalContent');
  if (!modalContent) return;

  modalContent.innerHTML = `
      <div class="modal-product">
          <img src="${product.image}" alt="${product.name}" id="modalProductImage">
          <div class="modal-details">
              <h2>${product.name}</h2>
              <p class="price">${product.price} EGP</p>
              <p class="description">${product.description}</p>
              
              <div class="color-options">
                  <h3>اختر اللون:</h3>
                  <div class="colors">
                      ${product.colors.map(color => `
                          <button class="color-btn ${color.name === product.colors[0].name ? 'selected' : ''}" 
                                  style="background-color: ${color.code};"
                                  data-image="${color.image}"
                                  title="${color.name}"></button>
                      `).join('')}
                  </div>
              </div>
              
              <div class="size-options">
                  <h3>اختر المقاس:</h3>
                  <div class="sizes">
                      ${product.sizes.map(size => `
                          <button class="size-btn ${size === product.sizes[0] ? 'selected' : ''}" 
                                  data-size="${size}">${size}</button>
                      `).join('')}
                  </div>
              </div>
              
              <button class="add-to-cart">إضافة إلى السلة</button>
          </div>
      </div>
  `;

  // أحداث تغيير اللون
  document.querySelectorAll('.color-btn').forEach(btn => {
      btn.addEventListener('click', function() {
          document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('selected'));
          this.classList.add('selected');
          const newImage = this.getAttribute('data-image');
          document.getElementById('modalProductImage').src = newImage;
      });
  });

  // أحداث تغيير المقاس
  document.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', function() {
          document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
          this.classList.add('selected');
      });
  });

  // حدث إضافة إلى السلة
  document.querySelector('.add-to-cart').addEventListener('click', function() {
      const selectedColor = document.querySelector('.color-btn.selected');
      const selectedSize = document.querySelector('.size-btn.selected');
      
      if (!selectedColor || !selectedSize) {
          showNotification('الرجاء اختيار اللون والمقاس', 'warning');
          return;
      }

      const colorName = selectedColor.getAttribute('title');
      const size = selectedSize.getAttribute('data-size');
      const productImage = document.getElementById('modalProductImage').src;

      const existingItem = cart.find(item => 
          item.id === product.id && 
          item.color === colorName && 
          item.size === size
      );

      if (existingItem) {
          existingItem.quantity += 1;
      } else {
          cart.push({
              id: product.id,
              name: product.name,
              price: product.price,
              image: productImage,
              color: colorName,
              size: size,
              quantity: 1
          });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCounter();
      showNotification('تمت إضافة المنتج إلى السلة');
      setTimeout(closeModal, 1000);
  });

  document.getElementById('overlay').classList.add('show');
  document.getElementById('productModal').classList.add('show');
}

// إغلاق النافذة
function closeModal() {
  document.getElementById('overlay').classList.remove('show');
  document.getElementById('productModal').classList.remove('show');
}

// وظيفة البحث
function searchProducts() {
  const input = document.getElementById('searchInput');
  if (!input) return;

  input.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      const filteredProducts = products.filter(product => 
          product.name.toLowerCase().includes(searchTerm)
      );
      displayProducts(filteredProducts);
  });
}

// وظيفة التصفية
function filterProducts() {
  const color = document.getElementById('colorFilter')?.value;
  const price = document.getElementById('priceFilter')?.value;
  let filteredProducts = products;

  if (color !== 'all') {
      filteredProducts = filteredProducts.filter(product => 
          product.colors.some(c => c.name === color)
      );
  }

  if (price !== 'all') {
      if (price === '0-400') filteredProducts = filteredProducts.filter(p => p.price <= 400);
      else if (price === '400-500') filteredProducts = filteredProducts.filter(p => p.price > 400 && p.price <= 500);
      else filteredProducts = filteredProducts.filter(p => p.price > 500);
  }

  displayProducts(filteredProducts);
}

// زر العودة للأعلى
function handleBackToTop() {
  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
          backToTop.classList.add('show');
      } else {
          backToTop.classList.remove('show');
      }
  });

  backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
  displayProducts();
  updateCartCounter();
  searchProducts();
  filterProducts();
  handleBackToTop();

  document.getElementById('colorFilter')?.addEventListener('change', filterProducts);
  document.getElementById('priceFilter')?.addEventListener('change', filterProducts);
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('overlay').addEventListener('click', closeModal);
  document.getElementById('productModal').addEventListener('click', function(e) {
      e.stopPropagation();
  });
});
