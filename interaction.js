const navIcon = document.querySelector("#navIcon");
const navCloseButton = document.querySelector(".nav-close-btn");
const sideNavLinks = document.querySelectorAll(".sideNavLink");
const sideNavBar = document.querySelector(".side-navbar");

const closeNavBar = () => {
  sideNavBar.classList.add("hidden");
};
const openNavBar = () => {
  sideNavBar.classList.remove("hidden");
};

navIcon.addEventListener("click", openNavBar);

navCloseButton.addEventListener("click", closeNavBar);

sideNavLinks.forEach((link) => {
  link.addEventListener("click", closeNavBar);
});
