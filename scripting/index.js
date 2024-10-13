const gradientDiv = document.querySelector(".gradient-background");

document.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event;
  const { width, height } = gradientDiv.getBoundingClientRect();

  // Calculate percentage position relative to the div size
  const xPercent = (clientX / width) * 100;
  const yPercent = (clientY / height) * 100;

  // Update the background gradient to follow the mouse
  gradientDiv.style.background = `radial-gradient(at ${xPercent}% ${yPercent}%, rgb(51, 102, 153), rgb(0, 0, 0))`;
});
