const products = [
  {
    img: "https://us.mingalondon.com/cdn/shop/files/Gig_Leopard_Creeper_Shoes2_c8d64c7d-6eb6-4a82-9a17-895d6c997d3d_720x.jpg?v=1721231306",
    category: "Gig Leopard Creeper Shoes",
    size: "S",
    color: "Black",
    price: "₹1,200"
  },
  {
    img: "https://us.mingalondon.com/cdn/shop/files/Gig_Leopard_Creeper_Shoes3_120x.jpg?v=1721231304",
    category: "Mystic Mary Janes",
    size: "S",
    color: "Black",
    price: "₹1,250"
  },
  {
    img: "https://us.mingalondon.com/cdn/shop/files/minga-london-lana-mary-janes-2_120x.jpg?v=1715508410",
    category: "Lana Mary-Janes",
    size: "M",
    color: "Black",
    price: "₹1,100"
  },
  {
    img: "https://us.mingalondon.com/cdn/shop/files/RIP-grey-leg-warmers-_5.jpg?v=1733498777",
    category: "Dark Daze Mary Janes",
    size: "M",
    color: "Black",
    price: "₹700"
  },
  {
    img: "https://us.mingalondon.com/cdn/shop/files/EcomSleazeOct240741.jpg?v=1728052238",
    category: "STwinkle Tread Bootss",
    size: "L",
    color: "Black",
    price: "₹750"
  },
  {
    img: "https://us.mingalondon.com/cdn/shop/files/corset-love-tights2.jpg?v=1738928970",
    category: "Sugar Rush Soles",
    size: "L",
    color: "Black",
    price: "₹700"
  },
  {
    img: "https://us.mingalondon.com/cdn/shop/files/obscure-black-leg-warmers_4.jpg?v=1731688839",
    category: "Luna Lace-Ups",
    size: "M",
    color: "Black",
    price: "₹750"
  }
];

const productGrid = document.getElementById("productGrid");
const typeFilter = document.getElementById("typeFilter");
const sizeFilter = document.getElementById("sizeFilter");
const colorFilter = document.getElementById("colorFilter");
const categoryLinks = document.querySelectorAll(".category-bar a");
let selectedCategory = "All";

function displayProducts(filtered) {
  productGrid.innerHTML = "";
  filtered.forEach(p => {
    productGrid.innerHTML += `
      <div class="product">
        <img src="${p.img}" alt="product">
        <p>${p.category}</p>
        <p>${p.price}</p>
      </div>`;
  });
}

function filterProducts() {
  const type = typeFilter.value;
  const size = sizeFilter.value;
  const color = colorFilter.value;

  const filtered = products.filter(p => {
    const matchType = type === "All" || p.category === type;
    const matchSize = size === "All" || p.size === size;
    const matchColor = color === "All" || p.color === color;
    const matchCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchType && matchSize && matchColor && matchCategory;
  });

  displayProducts(filtered);
}

typeFilter.addEventListener("change", filterProducts);
sizeFilter.addEventListener("change", filterProducts);
colorFilter.addEventListener("change", filterProducts);

categoryLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    selectedCategory = link.dataset.category;
    categoryLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    filterProducts();
  });
});

displayProducts(products);
