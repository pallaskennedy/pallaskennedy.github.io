const gradientDiv = document.querySelector(".gradient-background");
const header = document.getElementById("header");
const headerContent = document.querySelector(".header-content");

document.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event;
  const { width, height } = gradientDiv.getBoundingClientRect();

  // Calculate percentage position relative to the div size
  const xPercent = (clientX / width) * 100;
  const yPercent = (clientY / height) * 100;

  // Update the background gradient to follow the mouse
  gradientDiv.style.background = `radial-gradient(at ${xPercent}% ${yPercent}%, rgb(51, 102, 153), rgb(0, 0, 0))`;
});

// header.addEventListener("mousemove", (e) => {
//   const { clientX, clientY } = e;
//   const { offsetWidth, offsetHeight } = header;

//   // Calculate the center of the header
//   const x = (clientX / offsetWidth) * 100; // percentage of the width
//   const y = (clientY / offsetHeight) * 100; // percentage of the height

//   // Adjust the position of the header content based on mouse position
//   const moveX = 0; // No horizontal movement, keep it aligned to the right
//   const moveY = (y - 50) * 0.2; // Adjust multiplier for desired effect

//   headerContent.style.transform = `translateY(-50%) translate(${moveX}px, ${moveY}px)`;
// });

// header.addEventListener("mouseleave", () => {
//   headerContent.style.transform = "translateY(-50%)"; // Reset position when mouse leaves
// });
