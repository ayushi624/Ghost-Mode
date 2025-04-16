const products = [
  {
    id: 1,
    name: 'Floral Dress',
    price: 4099,
    image: 'images/dress1.jpg',
    sizes: ['S', 'M', 'L'],
    liked: false,
  },
  {
    id: 2,
    name: 'Denim Jacket',
    price: 6559.18,
    image: 'images/jacket1.jpg',
    sizes: ['M', 'L'],
    liked: false,
  },
  {
    id: 3,
    name: 'Summer Top',
    price: 2459.18,
    image: 'images/top1.jpg',
    sizes: ['S', 'M'],
    liked: false,
  },
  {
    id: 4,
    name: 'Boho Skirt',
    price: 3279.18,
    image: 'https://us.mingalondon.com/cdn/shop/files/occult-baby-tee_4.jpg?v=1741195163.jpg',
    sizes: ['XS', 'S', 'M'],
    liked: false,
  }
];

const productGrid = document.getElementById('product-grid');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartIcon = document.getElementById('cart-icon');
const closeCart = document.getElementById('close-cart');

let cart = [];

function renderProducts() {
  productGrid.innerHTML = '';
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    const sizesHTML = product.sizes.map(size => `<span>${size}</span>`).join('');

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="heart ${product.liked ? 'liked' : ''}" onclick="toggleLike(${product.id})">♥</div>
      <div class="hover-overlay">
        <button class="add-to-bag" onclick="addToCart(${product.id})">Add to Bag</button>
        <div class="sizes">${sizesHTML}</div>
      </div>
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-price">₹${product.price.toFixed(2)}</div>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

function toggleLike(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    product.liked = !product.liked;
    renderProducts();
  }
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    updateCartCount();
    showCart();
  }
}

function updateCartCount() {
  cartCount.textContent = cart.length;
}

function showCart() {
  cartModal.style.display = 'block';
  cartItems.innerHTML = cart.length === 0 ? '<li>Your cart is empty.</li>' : '';

  let total = 0;
  cart.forEach(item => {
    total += item.price;
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });

  if (cart.length) {
    const totalLi = document.createElement('li');
    totalLi.innerHTML = `<strong>Total: ₹${total.toFixed(2)}</strong>`;
    cartItems.appendChild(totalLi);
  }
}

cartIcon.addEventListener('click', () => {
  cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
});
closeCart.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

// Init
renderProducts();
updateCartCount();
