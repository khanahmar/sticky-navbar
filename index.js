const navbar = document.querySelector(".nav");
const bottomContainer = document.querySelector(".bottom-container");

console.log(bottomContainer.offsetTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > bottomContainer.offsetTop - navbar.offsetTop - 50) {
    navbar.classList.add("active");
  } else {
    navbar.classList.add("active");
  }
});
