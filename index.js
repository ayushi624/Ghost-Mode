const toggleBtn = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const overlay = document.getElementById("menuOverlay");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  menu.classList.toggle("open");
  overlay.classList.toggle("active");

  const items = menu.querySelectorAll("li");
  items.forEach((item) => {
    item.style.animation = "none";
    item.offsetHeight;
    item.style.animation = "";
  });
});

overlay.addEventListener("click", () => {
  toggleBtn.classList.remove("active");
  menu.classList.remove("open");
  overlay.classList.remove("active");
});


const collectionLink = document.getElementById('collectionLink');
const collectionDropdown = document.getElementById('collectionDropdown');

// Show dropdown on hover
collectionLink.addEventListener('mouseenter', () => {
  collectionDropdown.style.display = 'block';
});

// Hide when not hovering on link or dropdown
collectionLink.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!collectionDropdown.matches(':hover')) {
      collectionDropdown.style.display = 'none';
    }
  }, 200);
});

collectionDropdown.addEventListener('mouseleave', () => {
  collectionDropdown.style.display = 'none';
});