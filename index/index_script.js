// Header gradient effect
const gradientDiv = document.querySelector(".gradient-background");
const header = document.getElementById("header");

document.addEventListener("mousemove", (event) => {
  if (!gradientDiv || !header) return;
  
  const headerRect = header.getBoundingClientRect();
  
  // Only apply effect when mouse is over the header
  if (
    event.clientX >= headerRect.left &&
    event.clientX <= headerRect.right &&
    event.clientY >= headerRect.top &&
    event.clientY <= headerRect.bottom
  ) {
    // Calculate percentage position relative to the header
    const xPercent = ((event.clientX - headerRect.left) / headerRect.width) * 100;
    const yPercent = ((event.clientY - headerRect.top) / headerRect.height) * 100;
    
    // Update the background gradient to follow the mouse
    gradientDiv.style.background = `radial-gradient(at ${xPercent}% ${yPercent}%, 
                                  rgba(51, 102, 153, 0.7), 
                                  rgba(0, 0, 0, 0.7))`;
  }
});

// Animated text box
(function() {
  let i = 0, j = 0;
  const letters = document.querySelectorAll(".color-change");
  
  if (letters.length === 0) return;
  
  // Initialize first letter
  letters[0].classList.add("magic");
  
  const animateLetters = () => {
    if (i >= letters.length) i = 0;
    
    // Add animation class to current letter
    letters[i].classList.add("magic");
    
    // Remove animation class from previous letter
    if (!(j === 0 && i === 0)) {
      letters[j].classList.remove("magic");
    }
    
    // Update indices
    j = i;
    i++;
  };
  
  // Set interval for animation
  const animationInterval = setInterval(animateLetters, 100);
  
  // Clean up on page unload
  window.addEventListener("unload", () => {
    clearInterval(animationInterval);
  });
})();

// Initialize Bootstrap tooltips
document.addEventListener("DOMContentLoaded", function() {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});