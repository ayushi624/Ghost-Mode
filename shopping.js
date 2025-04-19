const products = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Product #${i + 1}`,
  price: Math.floor(Math.random() * 5000) + 1000,
  image: 'https://us.mingalondon.com/cdn/shop/files/occult-baby-tee_4.jpg?v=1741195163',
  sizes: ['S', 'M', 'L', 'XL'],
  liked: false,
}));

let cart = [];
let sortOption = '';
let loadedCount = 0;
const batchSize = 6;

const productGrid = document.getElementById('product-grid');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartIcon = document.getElementById('cart-icon');
const closeCart = document.getElementById('close-cart');
const sortSelect = document.getElementById('sort');
const loading = document.getElementById('loading');

function renderProductsBatch() {
  let sortedProducts = [...products];
  if (sortOption === 'asc') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'desc') {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  const nextBatch = sortedProducts.slice(loadedCount, loadedCount + batchSize);
  loadedCount += batchSize;

  nextBatch.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    const sizesHTML = product.sizes.map(size => `<span>${size}</span>`).join('');

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="heart ${product.liked ? 'liked' : ''}" data-id="${product.id}">♥</div>
      <div class="hover-overlay">
        <button class="add-to-bag" data-id="${product.id}">Add to Bag</button>
        <div class="sizes">${sizesHTML}</div>
      </div>
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-price">₹${product.price.toFixed(2)}</div>
      </div>
    `;
    productGrid.appendChild(card);
  });

  attachEventListeners();

  if (loadedCount >= sortedProducts.length) {
    loading.style.display = 'none';
  }
}

function attachEventListeners() {
  document.querySelectorAll('.add-to-bag').forEach(btn => {
    btn.onclick = () => {
      const id = parseInt(btn.getAttribute('data-id'));
      const product = products.find(p => p.id === id);
      cart.push(product);
      updateCartCount();
      showCart();
    };
  });

  document.querySelectorAll('.heart').forEach(heart => {
    heart.onclick = () => {
      const id = parseInt(heart.getAttribute('data-id'));
      const product = products.find(p => p.id === id);
      product.liked = !product.liked;
      reloadProducts();
    };
  });
}

function reloadProducts() {
  productGrid.innerHTML = '';
  loadedCount = 0;
  renderProductsBatch();
}

function updateCartCount() {
  cartCount.textContent = cart.length;
}

function showCart() {
  cartModal.style.display = 'block';
  cartItems.innerHTML = '';
  if (cart.length === 0) {
    cartItems.innerHTML = '<li>Your cart is empty.</li>';
    return;
  }
  let total = 0;
  cart.forEach(item => {
    total += item.price;
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });
  const totalLi = document.createElement('li');
  totalLi.innerHTML = `<strong>Total: ₹${total.toFixed(2)}</strong>`;
  cartItems.appendChild(totalLi);
}

window.addEventListener('scroll', () => {
  const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
  if (nearBottom && loadedCount < products.length) {
    renderProductsBatch();
  }
});

sortSelect.onchange = (e) => {
  sortOption = e.target.value;
  reloadProducts();
};

closeCart.onclick = () => {
  cartModal.style.display = 'none';
};

cartIcon.onclick = () => {
  cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
};

renderProductsBatch();
updateCartCount();
