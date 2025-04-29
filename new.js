const productGrid = document.getElementById("product-grid");
const cart = [];
const cartPanel = document.getElementById("cartPanel");
const cartItemsEl = document.getElementById("cartItems");

const products = [
{
  title: "Cursed Zip Up Hoodie",
  price: "₹10,100.00",
  priceValue: 10100,
  image: "https://us.mingalondon.com/cdn/shop/files/cursed-khaki-zip-up-hoodie_1_540x.jpg?v=1744901151",
  type: "Hoodies",
  color: "Black",
  sizes: ["S", "M", "L"]
},
{
  title: "Guardian Angel Baby Tee",
  price: "₹3,700.00",
  priceValue: 3700,
  image: "https://us.mingalondon.com/cdn/shop/files/guardian-angel-cross-white-baby-tee_1.jpg?v=1744901201",
  type: "Tops",
  color: "White",
  sizes: ["S", "M", "L", "XL"]
},
{
  title: "Savage Denim Hot Pants",
  price: "₹6,100.00",
  priceValue: 6100,
  image: "https://us.mingalondon.com/cdn/shop/files/savage-denim-hot-pants_3.jpg?v=1744908247",
  type: "Pants",
  color: "Black",
  sizes: ["S", "M", "L", "XL"]
},
{
  title: "Grime Baby Tee",
  price: "₹4,200.00",
  priceValue: 4200,
  image: "https://us.mingalondon.com/cdn/shop/files/grime-baby-tee_4.jpg?v=1744901142",
  type: "Tops",
  color: "Black",
  sizes: ["S", "M", "XL"]
},
{
  title: "Divine Soul Off-Shoulder Top",
  price: "₹4,900.00",
  priceValue: 4900,
  image: "https://us.mingalondon.com/cdn/shop/files/divine-soul-off-shoulder-top_5_706c6e93-568f-4ede-b2c4-850a2b52d356.jpg?v=1744901186",
  type: "Tops",
  color: "Black",
  sizes: ["M", "L", "XL"]
},
{
  title: "Winged Dagger Asymmetric Top",
  price: "₹4,800.00",
  priceValue: 4800,
  image: "https://us.mingalondon.com/cdn/shop/files/winged-dagger-asymmetric-top_1.jpg?v=1744901079",
  type: "Tops",
  color: "White",
  sizes: ["S", "M", "L"]
},
{
  title: "Elsie Black Flared Jeans",
  price: "₹9,200.00",
  priceValue: 9200,
  image: "https://us.mingalondon.com/cdn/shop/files/elsie-black-washed-flared-jeans_5.jpg?v=1744901062",
  type: "Pants",
  color: "Black",
  sizes: ["S", "M", "L"]
},
{
  title: "Crucifix Zip Up Hoodie",
  price: "₹10,100.00",
  priceValue: 10100,
  image: "https://us.mingalondon.com/cdn/shop/files/iron-grey-wash-zip-up-hoodie_1.jpg?v=1742402454",
  type: "Hoodies",
  color: "Grey",
  sizes: ["M", "L", "XL"]
},
{
  title: "Nightmare Washed T-shirt",
  price: "₹4,800.00",
  priceValue: 4800,
  image: "https://us.mingalondon.com/cdn/shop/files/nightmare-washed-t-shirt_1.jpg?v=1744901108",
  type: "Tops",
  color: "Brown",
  sizes: ["S", "M", "L", "XL"]
},
{
  title: "Dystopian Vest Top",
  price: "₹3,700.00",
  priceValue: 3700,
  image: "https://us.mingalondon.com/cdn/shop/files/Dystopian_Vest_Top1.jpg?v=1743603910",
  type: "Tops",
  color: "White",
  sizes: ["S", "M", "L"]
},
{
  title: "Rave Graphic Baggy Jeans",
  price: "₹9,200.00",
  priceValue: 9200,
  image: "https://us.mingalondon.com/cdn/shop/files/rave-graphic-baggy-jeans_5.jpg?v=1743765593",
  type: "Jeans",
  color: "Black",
  sizes: ["S","M"]
},
{
  title: "Aryana Black Cut-Out Top",
  price: "₹4,800.00",
  priceValue: 4800,
  image: "https://cdn.shopify.com/s/files/1/0530/0577/9130/files/Aryana_Black_Cut-Out_Top3_540x.jpg?v=1743603481",
  type: "Tops",
  color: "Black",
  sizes: ["S","M","L"]
},
{
  title: "Venom Zip Up Hoodie",
  price: "₹8,700.00",
  priceValue: 8700,
  image: "https://us.mingalondon.com/cdn/shop/files/Venom_Zip_Up_Hoodie1.jpg?v=1743603747",
  type: "Hoodies",
  color: "Black",
  sizes: ["S", "M"]
},
{
  title: "Kiara Baby Tee",
  price: "₹4,800.00",
  priceValue: 4800,
  image: "https://us.mingalondon.com/cdn/shop/files/Kiara_Baby_Tee2.jpg?v=1743603822",
  type: "Tops",
  color: "White",
  sizes: ["S", "M", "L"]
},
{
  title: "Viper Tube Top",
  price: "₹3,700.00",
  priceValue: 3700,
  image: "https://us.mingalondon.com/cdn/shop/files/Viper_Tube_Top4.jpg?v=1743609637",
  type: "Tops",
  color: "Black",
  sizes: ["M", "L"]
},
{
  title: "Lex Grey Washed Sweat Shorts",
  price: "₹7,000.00",
  priceValue: 7000,
  image: "https://us.mingalondon.com/cdn/shop/files/lloyd-wash-sweat-shorts_1.jpg?v=1742402478",
  type: "Jeans",
  color: "Grey",
  sizes: ["S", "M", "L"]
},
{
  title: "Gritty Zip-Up Hoodie",
  price: "₹7,800.00",
  priceValue: 7800,
  image: "https://us.mingalondon.com/cdn/shop/files/gritty-zip-up-hoodie_1.jpg?v=1742402491",
  type: "Hoodies",
  color: "Black",
  sizes: ["S", "M", "L"]
},
{
  title: "Grime Baby Tee",
  price: "₹4,200.00",
  priceValue: 4200,
  image: "https://us.mingalondon.com/cdn/shop/files/grime-baby-tee_4.jpg?v=1744901142",
  type: "Tops",
  color: "Black",
  sizes: ["S", "M", "L"]
},
{
  title: "Insane Zip Up Hoodie",
  price: "₹7,800.00",
  priceValue: 7800,
  image: "https://us.mingalondon.com/cdn/shop/files/insane-zip-up-hoodie_4.jpg?v=1741195145",
  type: "Hoodies",
  color: "Black",
  sizes: ["S", "M", "L", "XL"]
},
{
  title: "Kai Taupe Knitted Zip Up Hoodie",
  price: "₹7,000.00",
  priceValue: 7000,
  image: "https://us.mingalondon.com/cdn/shop/files/kai-taupe-knitted-zip-up-hoodie_5.jpg?v=1741194991",
  type: "Hoodies",
  color: "Brown",
  sizes: ["M", "L"]
}
];


let selectedType = null;
let selectedColor = null;
let selectedSize = null;
let selectedSort = null;

function renderProducts() {
  productGrid.innerHTML = "";

  let filtered = products.filter(p => {
    const typeMatch = !selectedType || p.type === selectedType;
    const colorMatch = !selectedColor || p.color === selectedColor;
    const sizeMatch = !selectedSize || p.sizes.includes(selectedSize);
    return typeMatch && colorMatch && sizeMatch;
  });

  if (selectedSort === "Price: Low to High") {
    filtered.sort((a, b) => a.priceValue - b.priceValue);
  } else if (selectedSort === "Price: High to Low") {
    filtered.sort((a, b) => b.priceValue - a.priceValue);
  }

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <div class="product-image">
        <img src="${p.image}" alt="${p.title}" />
      </div>
      <div class="heart">♡</div>
      <div class="overlay">
        <button class="add-to-bag">ADD TO BAG</button>
        <div class="sizes">
          ${p.sizes.map(s => `<button>${s}</button>`).join("")}
        </div>
      </div>
      <div class="product-info">
        <p class="product-title">${p.title}</p>
        <p class="product-price">${p.price}</p>
      </div>
    `;

    card.querySelector(".add-to-bag").addEventListener("click", () => {
      const selectedSizeBtn = card.querySelector(".sizes .selected");
      if (!selectedSizeBtn) {
        alert("Please select a size!");
      } else {
        const item = {
          title: p.title,
          price: p.price,
          size: selectedSizeBtn.textContent,
          image: p.image
        };
        cart.push(item);
        updateCart();
        cartPanel.classList.add("active");
      }
    });

    card.querySelectorAll(".sizes button").forEach(btn => {
      btn.addEventListener("click", () => {
        card.querySelectorAll(".sizes button").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
      });
    });

    productGrid.appendChild(card);
  });
}

function updateCart() {
  cartItemsEl.innerHTML = "";
  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <img src="${item.image}" />
      <div class="cart-item-details">
        <div>${item.title}</div>
        <div>Size: ${item.size}</div>
        <div>${item.price}</div>
      </div>
      <div class="remove-btn" data-index="${index}">✖</div>
    `;
    cartItemsEl.appendChild(cartItem);
  });

  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.getAttribute("data-index");
      cart.splice(index, 1);
      updateCart();
    });
  });
}

document.getElementById("cart-icon").addEventListener("click", () => {
  cartPanel.classList.toggle("active");
});

document.getElementById("closeCart").addEventListener("click", () => {
  cartPanel.classList.remove("active");
});

document.querySelectorAll('.dropdown-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const dropdown = button.parentElement;
    dropdown.classList.toggle('active');
  });
});

document.querySelectorAll('.dropdown-menu li').forEach(li => {
  li.addEventListener("click", () => {
    const label = li.textContent.trim();

    if (["Tops", "Hoodies", "Pants", "Dresses"].includes(label)) {
      selectedType = label;
    } else if (["Black", "White", "Red", "Green"].includes(label)) {
      selectedColor = label;
    } else if (["XS", "S", "M", "L", "XL"].includes(label)) {
      selectedSize = label;
    } else if (["Newest", "Price: Low to High", "Price: High to Low"].includes(label)) {
      selectedSort = label;
    }

    renderProducts();
  });
});

renderProducts();
