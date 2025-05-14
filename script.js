document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");
  
    menuIcon.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  
    //  Simple cart logic placeholder
    const buttons = document.querySelectorAll(".product-card button");
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        alert("Added to cart!");
      });
    });
  });

  // Image Slider
  const slides = document.querySelector(".slides");
  const images = document.querySelectorAll(".slides img");
  let index = 0;

  setInterval(() => {
    index = (index + 1) % images.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
}, 3000); 

// Zoom effect on Send Message button
const contactBtn = document.querySelector(".contact button[type='submit']");
contactBtn.addEventListener("click", () => {
  contactBtn.classList.add("zoom-out");
  setTimeout(() => {
    contactBtn.classList.remove("zoom-out");
  }, 300); 
});
