// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Initialize theme
  initializeTheme();
  
  // Handle form submission
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the default form submission
    
    // Get form values
    const firstName = document.getElementById("firstName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Simple validation
    if (!firstName || !email || !message) {
      showStatusMessage("Please fill in all fields", "error");
      return;
    }
    
    // In a real app, you would send this to your backend
    // For now, we'll just simulate successful submission
    
    // Show success message
    showStatusMessage("Message sent successfully! (Local testing mode)", "success");
    
    // Clear form fields
    document.getElementById("firstName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    
    // Log the form data to console (for debugging)
    console.log("Form submitted with values:", { firstName, email, message });
  });
  
  // Handle newsletter form submission if it exists
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("emailInput").value;
      
      if (email) {
        alert(`Thank you for subscribing with ${email}! Your 15% discount code is WELCOME15`);
        document.getElementById('emailInput').value = '';
      }
    });
  }

  // Theme Toggle Functionality
  const themeToggleBtn = document.getElementById('themeToggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }
});

// Function to show status message
function showStatusMessage(message, type) {
  const statusMsg = document.getElementById("statusMsg");
  statusMsg.textContent = message;
  
  if (type === "success") {
    statusMsg.style.color = "green";
  } else if (type === "error") {
    statusMsg.style.color = "red";
  } else {
    statusMsg.style.color = "blue"; // For info messages
  }
  
  statusMsg.style.display = "block";
  
  // Hide message after 5 seconds
  setTimeout(() => {
    statusMsg.style.display = "none";
  }, 5000);
}