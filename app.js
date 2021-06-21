const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
