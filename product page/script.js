// Product Data
const productData = {
    id: 1,
    name: "RAW WASHED SWEATPANTS",
    price: 2850,
    description: "We bet these are in your moodboard.",
    composition: "70% cotton, 30% polyester",
    careInstructions: "Machine wash at 30°C, do not bleach, do not tumble dry",
    availableSizes: ["S", "M", "L", "XL"],
    availableColors: [
      { id: 1, name: "Black", hex: "#000000" },
      { id: 2, name: "Grey", hex: "#888888" },
      { id: 3, name: "Washed Black", hex: "#333333" }
    ],
    images: [
      { id: 1, url: "https://us.mingalondon.com/cdn/shop/files/gritty-sweat-shorts_1_720x.jpg?v=1742402507", alt: "RAW WASHED SWEATPANTS front view" },
      { id: 2, url: "https://us.mingalondon.com/cdn/shop/files/gritty-sweat-shorts_2_720x.jpg?v=1742402507", alt: "RAW WASHED SWEATPANTS side view" },
      { id: 3, url: "https://us.mingalondon.com/cdn/shop/files/gritty-sweat-shorts_9_720x.jpg?v=1742402507", alt: "RAW WASHED SWEATPANTS back view" },
      { id: 4, url: "https://us.mingalondon.com/cdn/shop/files/gritty-sweat-shorts_8_720x.jpg?v=1742551285", alt: "RAW WASHED SWEATPANTS detail" }
    ],
    reviews: [
      {
        id: 1,
        username: "StyleExplorer",
        rating: 5,
        title: "Perfect fit and super comfortable",
        content: "I've been looking for comfortable yet stylish sweatpants for a while, and these are exactly what I needed. The material is soft and durable, and they fit true to size.",
        date: "2025-02-15"
      },
      {
        id: 2,
        username: "AudioFashionista",
        rating: 4,
        title: "Great everyday pants",
        content: "Love these for casual wear. The material is thick enough for cooler weather but still breathable. Only reason for 4 stars is that they run slightly large.",
        date: "2025-01-20"
      },
      {
        id: 3,
        username: "PodcastDiva",
        rating: 5,
        title: "My new favorites",
        content: "I wear these constantly! The washed black color is perfect and goes with everything. They're comfortable for long recording sessions and look put-together enough for casual meetings.",
        additional: "I'm 5'7\" and the L fits perfectly",
        date: "2025-03-05"
      }
    ]
  };
  
  // Related Products
  const relatedProducts = [
    {
      id: 2,
      name: "Starlight Grey Raglan Baby Tee",
      price: 1450,
      imageUrl: "https://us.mingalondon.com/cdn/shop/files/StarlightGreyRaglanBabyTee10_720x.jpg?v=1715461295"
    },
    {
      id: 3,
      name: "Rae Washed Layered Hoodie",
      price: 7500,
      imageUrl: "https://us.mingalondon.com/cdn/shop/files/rae-black-wash-layered-hoodie_3_720x.jpg?v=1735920170"
    },
    {
      id: 4,
      name: "Patch Me Up Messenger Bag",
      price: 1050,
      imageUrl: "https://us.mingalondon.com/cdn/shop/files/patch-me-up-khaki-canvas-messenger-bag_8_720x.jpg?v=1730378092"
    },
    {
      id: 5,
      name: "Gig Black Creeper Shoes",
      price: 2600,
      imageUrl: "https://us.mingalondon.com/cdn/shop/files/RIP-grey-leg-warmers-_5_720x.jpg?v=1733498777"
    }
  ];
  
  // DOM Elements
  const themeToggleBtn = document.getElementById('themeToggle');
  const addToBagBtn = document.getElementById('addToBag');
  const sizeButtonsContainer = document.getElementById('sizeButtons');
  const colorButtonsContainer = document.getElementById('colorButtons');
  const thumbnailContainer = document.getElementById('thumbnailContainer');
  const mainImage = document.getElementById('mainImage');
  const relatedProductsContainer = document.getElementById('relatedProducts');
  const reviewsContainer = document.getElementById('reviewsList');
  
  // Variables to track selections
  let selectedSize = null;
  let selectedColor = null;
  
  // Theme Toggle Functionality
  function initializeTheme() {
    // Check for user preference
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Load saved theme or use system preference
    const savedTheme = localStorage.getItem('theme') || (prefersDarkMode ? 'dark' : 'light');
    
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
    
    // Update the theme text
    updateThemeText();
  }
  
  function toggleTheme() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateThemeText();
  }
  
  function updateThemeText() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggleBtn.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  }
  
  // Size Buttons
  function createSizeButtons() {
    sizeButtonsContainer.innerHTML = '';
    
    productData.availableSizes.forEach(size => {
      const button = document.createElement('button');
      button.className = 'size-button';
      button.textContent = size;
      button.addEventListener('click', () => selectSize(size, button));
      sizeButtonsContainer.appendChild(button);
    });
  }
  
  function selectSize(size, buttonElement) {
    // Reset previously selected
    const buttons = sizeButtonsContainer.querySelectorAll('.size-button');
    buttons.forEach(btn => btn.classList.remove('selected'));
    
    // Set new selection
    selectedSize = size;
    buttonElement.classList.add('selected');
  }
  
  // Color Buttons
  function createColorButtons() {
    colorButtonsContainer.innerHTML = '';
    
    productData.availableColors.forEach(color => {
      const button = document.createElement('button');
      button.className = 'color-button';
      button.style.backgroundColor = color.hex;
      button.setAttribute('data-color-id', color.id);
      button.setAttribute('title', color.name);
      button.addEventListener('click', () => selectColor(color, button));
      colorButtonsContainer.appendChild(button);
    });
  }
  
  function selectColor(color, buttonElement) {
    // Reset previously selected
    const buttons = colorButtonsContainer.querySelectorAll('.color-button');
    buttons.forEach(btn => btn.classList.remove('selected'));
    
    // Set new selection
    selectedColor = color;
    buttonElement.classList.add('selected');
  }
  
  // Product Gallery
  function createThumbnails() {
    thumbnailContainer.innerHTML = '';
    
    productData.images.forEach((image, index) => {
      const thumbnail = document.createElement('div');
      thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
      
      const img = document.createElement('img');
      img.src = image.url;
      img.alt = image.alt;
      
      thumbnail.appendChild(img);
      thumbnail.addEventListener('click', () => changeMainImage(image.url, thumbnail));
      thumbnailContainer.appendChild(thumbnail);
    });
    
    // Set initial main image
    mainImage.src = productData.images[0].url;
    mainImage.alt = productData.images[0].alt;
  }
  
  function changeMainImage(url, thumbnailElement) {
    mainImage.src = url;
    
    // Update active thumbnail
    const thumbnails = thumbnailContainer.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnailElement.classList.add('active');
  }
  
  // Related Products
  function createRelatedProducts() {
    relatedProductsContainer.innerHTML = '';
    
    relatedProducts.forEach(product => {
      const productElement = document.createElement('a');
      productElement.href = `#product-${product.id}`;
      productElement.className = 'related-product';
      
      const imageContainer = document.createElement('div');
      imageContainer.className = 'related-product-image';
      
      const img = document.createElement('img');
      img.src = product.imageUrl;
      img.alt = product.name;
      
      const name = document.createElement('h3');
      name.textContent = product.name;
      
      const price = document.createElement('p');
      price.textContent = `Rs. ${product.price.toLocaleString()}`;
      
      imageContainer.appendChild(img);
      productElement.appendChild(imageContainer);
      productElement.appendChild(name);
      productElement.appendChild(price);
      
      relatedProductsContainer.appendChild(productElement);
    });
  }
  
  // Reviews
  function createReviews() {
    reviewsContainer.innerHTML = '';
    
    productData.reviews.forEach(review => {
      const reviewElement = document.createElement('div');
      reviewElement.className = 'review';
      
      const header = document.createElement('div');
      header.className = 'review-header';
      
      const author = document.createElement('div');
      author.className = 'review-author';
      author.textContent = review.username;
      
      const date = document.createElement('div');
      date.className = 'review-date';
      date.textContent = formatDate(review.date);
      
      const stars = document.createElement('div');
      stars.className = 'review-stars';
      stars.textContent = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
      
      header.appendChild(author);
      header.appendChild(date);
      
      const title = document.createElement('div');
      title.className = 'review-title';
      title.textContent = review.title;
      
      const content = document.createElement('div');
      content.className = 'review-content';
      content.textContent = review.content;
      
      reviewElement.appendChild(header);
      reviewElement.appendChild(stars);
      
      if (review.title) {
        reviewElement.appendChild(title);
      }
      
      reviewElement.appendChild(content);
      
      if (review.additional) {
        const additional = document.createElement('div');
        additional.className = 'review-additional';
        additional.textContent = review.additional;
        reviewElement.appendChild(additional);
      }
      
      reviewsContainer.appendChild(reviewElement);
    });
  }
  
  // Tab functionality
  function toggleTab(tabId) {
    const tabContent = document.getElementById(tabId);
    const isHidden = tabContent.style.display === 'none';
    
    // Hide all tabs first
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => {
      tab.style.display = 'none';
    });
    
    // Remove active class from all tab buttons
    const allTabButtons = document.querySelectorAll('.tab-button');
    allTabButtons.forEach(button => {
      button.classList.remove('active');
    });
    
    // Show the clicked tab if it was hidden
    if (isHidden) {
      tabContent.style.display = 'block';
      document.querySelector(`button[onclick="toggleTab('${tabId}')"]`).classList.add('active');
    }
  }
  
  // Add to Cart Functionality
  function addToBag() {
    if (!selectedSize || !selectedColor) {
      alert('Please select both a size and color before adding to bag.');
      return;
    }
    
    const item = {
      productId: productData.id,
      name: productData.name,
      price: productData.price,
      size: selectedSize,
      colorId: selectedColor.id,
      colorName: selectedColor.name,
      imageUrl: productData.images[0].url,
      quantity: 1
    };
    
    // In a real application, you would send this to an API
    // For now, we'll just store it in localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    alert('Item added to bag successfully!');
  }
  
  // Helper Functions
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
  
  // Initialize the page
  function init() {
    initializeTheme();
    createSizeButtons();
    createColorButtons();
    createThumbnails();
    createRelatedProducts();
    createReviews();
    
    // Set initial tab
    document.getElementById('description').style.display = 'block';
    document.querySelector(`button[onclick="toggleTab('description')"]`).classList.add('active');
    
    // Event Listeners
    themeToggleBtn.addEventListener('click', toggleTheme);
    addToBagBtn.addEventListener('click', addToBag);
    document.getElementById('sizeGuide').addEventListener('click', () => alert('Size guide feature coming soon!'));
  }
  
  // Wait for the DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', init);