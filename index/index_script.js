// ------- Mouseover gradient effect in the header  --------------------
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
// ----------------------------------------------------------------------
//
//
// -------------------- Animated Text Box  --------------------
let i = 0,
  j = 0;
const letters = document.querySelectorAll(".color-change");
setInterval(() => {
  if (i >= 25) i = 0;
  letters[i].classList.add("magic");
  if (!(j == 0 && i == 0)) {
    letters[j].classList.remove("magic");
  }
  j = i;
  i++;
}, 80);

// ----------------------------------------------------------------------
//
//
