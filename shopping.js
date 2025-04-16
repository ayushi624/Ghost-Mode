const products = [
  {
    id: 1,
    name: 'Occult Baby Tee',
    price: 4099,
    image: 'https://us.mingalondon.com/cdn/shop/files/occult-baby-tee_4.jpg?v=1741195163',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    liked: false,
  },
  {
    id: 2,
    name: 'Mia Black Zip Up Hoodie',
    price: 6559.18,
    image: 'https://us.mingalondon.com/cdn/shop/files/Mia-black-zip-up-hoodie-minga3.jpg?v=1738853190',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    liked: false,
  },
  {
    id: 3,
    name: 'Raw Washed Hoodie',
    price: 2459.18,
    image: 'https://us.mingalondon.com/cdn/shop/files/raw-wash-hoodie_2.jpg?v=1742402383',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    liked: false,
  },
  {
    id: 4,
    name: 'Raw Washed Sweatpants',
    price: 3279.18,
    image: 'https://us.mingalondon.com/cdn/shop/files/raw-wash-sweatpants_2.jpg?v=1742402367',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    liked: false,
  },
  {
    id: 5,
    name: 'Luna Oversized Tee',
    price: 4299.00,
    image: 'https://us.mingalondon.com/cdn/shop/files/luna-oversized-tee.jpg?v=1742400000',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    liked: false,
  },
  {
    id: 6,
    name: 'Grunge Girl Hoodie',
    price: 6129.99,
    image: 'https://us.mingalondon.com/cdn/shop/files/grunge-hoodie.jpg?v=1742300000',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    liked: false,
  },
  {
    id: 7,
    name: 'Distressed Black Jeans',
    price: 3799.50,
    image: 'https://us.mingalondon.com/cdn/shop/files/distressed-jeans.jpg?v=1742200000',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    liked: false,
  },
  {
    id: 8,
    name: 'Urban Cargo Pants',
    price: 3489.00,
    image: 'https://us.mingalondon.com/cdn/shop/files/cargo-pants.jpg?v=1742100000',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    liked: false,
  },
  {
    id: 9,
    name: 'Skater Girl Tee',
    price: 3999,
    image: 'https://us.mingalondon.com/cdn/shop/files/skater-tee.jpg?v=1741195100',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    liked: false,
  },
  {
    id: 10,
    name: 'Velvet Crop Hoodie',
    price: 5659.00,
    image: 'https://us.mingalondon.com/cdn/shop/files/velvet-hoodie.jpg?v=1738853100',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    liked: false,
  },
  {
    id: 11,
    name: 'Graphic Street Hoodie',
    price: 2999.99,
    image: 'https://us.mingalondon.com/cdn/shop/files/street-hoodie.jpg?v=1742402300',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    liked: false,
  },
  {
    id: 12,
    name: 'Baggy Joggers',
    price: 3199.18,
    image: 'https://us.mingalondon.com/cdn/shop/files/baggy-joggers.jpg?v=1742402301',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    liked: false,
  },
  {
    id: 13,
    name: 'Moonchild Baby Tee',
    price: 4149,
    image: 'https://us.mingalondon.com/cdn/shop/files/moonchild-tee.jpg?v=1741195199',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    liked: false,
  },
  {
    id: 14,
    name: 'Fleece Lined Hoodie',
    price: 6859.18,
    image: 'https://us.mingalondon.com/cdn/shop/files/fleece-hoodie.jpg?v=1738853290',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    liked: false,
  },
  {
    id: 15,
    name: 'Cloud Wash Hoodie',
    price: 2659.18,
    image: 'https://us.mingalondon.com/cdn/shop/files/cloud-wash-hoodie.jpg?v=1742402388',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    liked: false,
  },
  {
    id: 16,
    name: 'Bleach Washed Sweatpants',
    price: 3579.18,
    image: 'https://us.mingalondon.com/cdn/shop/files/bleach-sweatpants.jpg?v=1742402369',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    liked: false,
  }
];

let cart = [];
let sortOption = ''; // Keep track of current sort

const productGrid = document.getElementById('product-grid');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartIcon = document.getElementById('cart-icon');
const closeCart = document.getElementById('close-cart');
const sortSelect = document.getElementById('sort');

// 🧠 Render Products
function renderProducts() {
  // Apply sort
  let sortedProducts = [...products];
  if (sortOption === 'asc') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'desc') {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  productGrid.innerHTML = '';
  sortedProducts.forEach(product => {
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
}

// 🛒 Add to Cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    updateCartCount();
    showCart();
  }
}

// ❤️ Toggle Like
function toggleLike(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    product.liked = !product.liked;
    renderProducts();
  }
}

// 🛍️ Show Cart
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

// 🧮 Update Cart Count
function updateCartCount() {
  cartCount.textContent = cart.length;
}

// 🧷 Attach Listeners After Rendering
function attachEventListeners() {
  document.querySelectorAll('.add-to-bag').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.getAttribute('data-id'));
      addToCart(id);
    });
  });

  document.querySelectorAll('.heart').forEach(heart => {
    heart.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(heart.getAttribute('data-id'));
      toggleLike(id);
    });
  });
}

// 📤 Sorting
sortSelect.addEventListener('change', (e) => {
  sortOption = e.target.value;
  renderProducts();
});

// 🛑 Close Cart
closeCart.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

// 🛒 Toggle Cart Modal
cartIcon.addEventListener('click', () => {
  cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
});

// 🚀 Initialize
renderProducts();
updateCartCount();
