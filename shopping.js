// Toggle dropdowns
document.querySelectorAll('.dropdown-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const dropdown = button.parentElement;
    dropdown.classList.toggle('active');
  });
});

// Example static product data (20 products)
const products = [
  {
    name: "Raw Washed Hoodie",
    price: "Rs. 7,800.00",
    sizes: ["S", "M", "L", "XL"],
    img: "https://source.unsplash.com/400x500/?hoodie&sig=1"
  },
  {
    name: "Flame Print Pants",
    price: "Rs. 6,500.00",
    sizes: ["S", "M", "L"],
    img: "https://source.unsplash.com/400x500/?pants&sig=2"
  },
  {
    name: "Gothic Crop Top",
    price: "Rs. 3,200.00",
    sizes: ["XS", "S", "M"],
    img: "https://source.unsplash.com/400x500/?top&sig=3"
  },
  {
    name: "Checkered Skirt",
    price: "Rs. 4,000.00",
    sizes: ["S", "M", "L", "XL"],
    img: "https://source.unsplash.com/400x500/?skirt&sig=4"
  },
  {
    name: "Retro Jacket",
    price: "Rs. 8,600.00",
    sizes: ["M", "L", "XL"],
    img: "https://source.unsplash.com/400x500/?jacket&sig=5"
  },
  {
    name: "Striped Knitwear",
    price: "Rs. 5,900.00",
    sizes: ["S", "M", "L"],
    img: "https://source.unsplash.com/400x500/?knitwear&sig=6"
  },
  {
    name: "Oversized Tee",
    price: "Rs. 2,800.00",
    sizes: ["S", "M", "L", "XL", "XXL"],
    img: "https://source.unsplash.com/400x500/?tshirt&sig=7"
  },
  {
    name: "Baggy Jeans",
    price: "Rs. 7,100.00",
    sizes: ["S", "M", "L", "XL"],
    img: "https://source.unsplash.com/400x500/?jeans&sig=8"
  },
  {
    name: "Plaid Shirt",
    price: "Rs. 3,900.00",
    sizes: ["XS", "S", "M", "L"],
    img: "https://source.unsplash.com/400x500/?shirt&sig=9"
  },
  {
    name: "Punk Dress",
    price: "Rs. 6,300.00",
    sizes: ["S", "M", "L"],
    img: "https://source.unsplash.com/400x500/?dress&sig=10"
  },
  {
    name: "Fuzzy Cardigan",
    price: "Rs. 5,200.00",
    sizes: ["S", "M"],
    img: "https://source.unsplash.com/400x500/?cardigan&sig=11"
  },
  {
    name: "Graphic Tee",
    price: "Rs. 2,500.00",
    sizes: ["M", "L", "XL"],
    img: "https://source.unsplash.com/400x500/?graphic,tee&sig=12"
  },
  {
    name: "Studded Belt",
    price: "Rs. 1,700.00",
    sizes: ["One Size"],
    img: "https://source.unsplash.com/400x500/?belt&sig=13"
  },
  {
    name: "Patchwork Hoodie",
    price: "Rs. 7,600.00",
    sizes: ["S", "M", "L"],
    img: "https://source.unsplash.com/400x500/?patch,hoodie&sig=14"
  },
  {
    name: "Slit Pants",
    price: "Rs. 5,800.00",
    sizes: ["S", "M", "L", "XL"],
    img: "https://source.unsplash.com/400x500/?trousers&sig=15"
  },
  {
    name: "Cropped Vest",
    price: "Rs. 3,100.00",
    sizes: ["S", "M", "L"],
    img: "https://source.unsplash.com/400x500/?vest&sig=16"
  },
  {
    name: "Denim Jacket",
    price: "Rs. 9,000.00",
    sizes: ["M", "L", "XL"],
    img: "https://source.unsplash.com/400x500/?denim,jacket&sig=17"
  },
  {
    name: "Mesh Top",
    price: "Rs. 3,400.00",
    sizes: ["XS", "S", "M"],
    img: "https://source.unsplash.com/400x500/?mesh,top&sig=18"
  },
  {
    name: "Bomber Jacket",
    price: "Rs. 9,400.00",
    sizes: ["S", "M", "L", "XL"],
    img: "https://source.unsplash.com/400x500/?bomber,jacket&sig=19"
  },
  {
    name: "Chain Necklace",
    price: "Rs. 1,300.00",
    sizes: ["One Size"],
    img: "https://source.unsplash.com/400x500/?necklace&sig=20"
  }
];

// Render product cards
const grid = document.getElementById('product-grid');

products.forEach(p => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <span class="heart">♡</span>
    <img src="${p.img}" alt="${p.name}" />
    <div class="product-details">
      <div>${p.name}</div>
      <div class="price">${p.price}</div>
      <div class="sizes">
        ${p.sizes.map(size => `<button>${size}</button>`).join("")}
      </div>
      <button style="margin-top: 10px; padding: 5px 10px;">ADD TO BAG</button>
    </div>
  `;
  grid.appendChild(card);
});
