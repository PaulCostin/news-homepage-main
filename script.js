let navMenu = document.getElementById("navigationMenu");

function toggleMenu() {
  if (navMenu.classList.contains("hidden")) {
    navMenu.classList.remove("hidden");
    navMenu.classList.add("shown");
    document.body.style.setProperty("overflow", "hidden");
    document.body.classList.add("overlay");
  } else {
    navMenu.classList.add("hidden");
    navMenu.classList.remove("shown");
    document.body.style.removeProperty("overflow", "hidden");
    document.body.classList.remove("overlay");
  }
}
