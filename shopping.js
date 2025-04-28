const productGrid = document.getElementById("product-grid");
const cart = [];
const cartPanel = document.getElementById("cartPanel");
const cartItemsEl = document.getElementById("cartItems");

const products = [
{
  id: "101",
  title: "Occult Baby Tee",
  price: "₹3,700.00",
  priceValue: 3700,
  image: "https://us.mingalondon.com/cdn/shop/files/occult-baby-tee_2_540x.jpg?v=1742402582",
  type: "Tops",
  color: "White",
  sizes: ["S", "M", "L"]
},
{
  id: "102",
  title: "Raw Washed Hoodie",
  price: "₹7,800.00",
  priceValue: 7800,
  image: "https://us.mingalondon.com/cdn/shop/files/raw-wash-hoodie_3_540x.jpg?v=1742402347",
  type: "Hoodies",
  color: "Black",
  sizes: ["S", "M", "L", "XL"]
},
{
  id: "103",
  title: "Raw Washed Sweatpants",
  price: "₹7,800.00",
  priceValue: 7800,
  image: "https://us.mingalondon.com/cdn/shop/files/raw-wash-sweatpants_3_540x.jpg?v=1742402367",
  type: "Pants",
  color: "Black",
  sizes: ["S", "M", "L", "XL"]
},
{
  id: "104",
  title: "Mia Black Zip Up Hoodie",
  price: "₹10,100.00",
  priceValue: 10100,
  image: "https://us.mingalondon.com/cdn/shop/files/Mia-black-zip-up-hoodie-minga3.jpg?v=1738853190",
  type: "Hoodies",
  color: "Black",
  sizes: ["S", "M", "XL"]
},
{
  id: "105",
  title: "Savage Denim Hot Pants",
  price: "₹6,100.00",
  priceValue: 6100,
  image: "https://us.mingalondon.com/cdn/shop/files/savage-denim-hot-pants_3.jpg?v=1744908247",
  type: "Pants",
  color: "Green",
  sizes: ["M", "L", "XL"]
},
{
  id: "106",
  title: "Mia Pink Zip Up Hoodie",
  price: "₹10,100.00",
  priceValue: 10100,
  image: "https://us.mingalondon.com/cdn/shop/files/Purrfection-zip-up-hoodie1.jpg?v=1738853250",
  type: "Hoodies",
  color: "Purple",
  sizes: ["S", "M", "L"]
},
{
  id: "107",
  title: "Purrfection Zip Up Hoodie",
  price: "₹7,800.00",
  priceValue: 7800,
  image: "https://us.mingalondon.com/cdn/shop/files/Purrfection-zip-up-hoodie1_ee5d42de-9576-4021-8a33-13ab4d65f8ce.jpg?v=1738853318",
  type: "Hoodies",
  color: "Black",
  sizes: ["S", "M", "L"]
},
{
  id: "108",
  title: "Iron Washed Zip Up Hoodie",
  price: "₹8,700.00",
  priceValue: 8700,
  image: "https://us.mingalondon.com/cdn/shop/files/iron-grey-wash-zip-up-hoodie_1.jpg?v=1742402454",
  type: "Hoodies",
  color: "Grey",
  sizes: ["M", "L", "XL"]
},
{
  id: "109",
  title: "Thorn Black Sweater",
  price: "₹7,800.00",
  priceValue: 7800,
  image: "https://us.mingalondon.com/cdn/shop/files/thorns-black-knit-sweater_5.jpg?v=1741195199",
  type: "Knitwear",
  color: "Black",
  sizes: ["S", "M", "L", "XL"]
},
{
  id: "110",
  title: "Crush Black Baggy Flare Jeans",
  price: "₹10,100.00",
  priceValue: 10100,
  image: "https://us.mingalondon.com/cdn/shop/files/crush-black-baggy-flare-jeans_3.jpg?v=1741195066",
  type: "Jeans",
  color: "Black",
  sizes: ["S", "M", "L"]
},
{
  id: "111",
  title: "Lex Black Washed Sweat Shorts",
  price: "₹7,000.00",
  priceValue: 7000,
  image: "https://us.mingalondon.com/cdn/shop/files/lex-black-washed-sweat-shorts_1.jpg?v=1742987429",
  type: "Jeans",
  color: "Black",
  sizes: ["One Size"]
},
{
  id: "112",
  title: "Venom Zip Hoodie",
  price: "₹8,700.00",
  priceValue: 8700,
  image: "https://us.mingalondon.com/cdn/shop/files/Venom_Zip_Up_Hoodie1.jpg?v=1743603747",
  type: "Hoodies",
  color: "Black",
  sizes: ["S","M","L"]
},
{
  id: "113",
  title: "Guardian Angel Baby Tee",
  price: "₹3,700.00",
  priceValue: 3700,
  image: "https://us.mingalondon.com/cdn/shop/files/guardian-angel-cross-white-baby-tee_1.jpg?v=1744901201",
  type: "Tops",
  color: "White",
  sizes: ["S", "M"]
},
{
  id: "114",
  title: "Kiara Baby Tee",
  price: "₹4,800.00",
  priceValue: 4800,
  image: "https://us.mingalondon.com/cdn/shop/files/Kiara_Baby_Tee2.jpg?v=1743603822",
  type: "Tops",
  color: "White",
  sizes: ["S", "M", "L"]
},
{
  id: "115",
  title: "Dystopian Vest Top",
  price: "₹3,700.00",
  priceValue: 3700,
  image: "https://us.mingalondon.com/cdn/shop/files/Dystopian_Vest_Top1.jpg?v=1743603910",
  type: "Tops",
  color: "White",
  sizes: ["M", "L"]
},
{
  id: "116",
  title: "Lex Grey Washed Sweat Shorts",
  price: "₹7,000.00",
  priceValue: 7000,
  image: "https://us.mingalondon.com/cdn/shop/files/lloyd-wash-sweat-shorts_1.jpg?v=1742402478",
  type: "Jeans",
  color: "Grey",
  sizes: ["S", "M", "L"]
},
{
  id: "117",
  title: "Storm Knitted Zip-Up Hoodie",
  price: "₹8,700.00",
  priceValue: 8700,
  image: "https://us.mingalondon.com/cdn/shop/files/storm-knitted-zip-up-hoodie-cardigan_1.jpg?v=1742402394",
  type: "Hoodies",
  color: "Black",
  sizes: ["S", "M", "L"]
},
{
  id: "118",
  title: "Grime Baby Tee",
  price: "₹4,200.00",
  priceValue: 4200,
  image: "https://us.mingalondon.com/cdn/shop/files/grime-baby-tee_4.jpg?v=1744901142",
  type: "Tops",
  color: "Black",
  sizes: ["S", "M", "L"]
},
{
  id: "119",
  title: "Insane Zip Up Hoodie",
  price: "₹7,800.00",
  priceValue: 7800,
  image: "https://us.mingalondon.com/cdn/shop/files/insane-zip-up-hoodie_4.jpg?v=1741195145",
  type: "Hoodies",
  color: "Black",
  sizes: ["S", "M", "L", "XL"]
},
{
  id: "120",
  title: "Viber Tube Top",
  price: "₹3,700.00",
  priceValue: 3700,
  image: "https://us.mingalondon.com/cdn/shop/files/Viper_Tube_Top4.jpg?v=1743609637",
  type: "Tops",
  color: "Black",
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
