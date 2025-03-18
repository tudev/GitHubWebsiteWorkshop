// Add interactivity to the homepage button
document.getElementById("ctaButton").addEventListener("click", () => {
  alert("Thanks for clicking!");
});

// Handle form submission on the contact page
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting us!");
});
