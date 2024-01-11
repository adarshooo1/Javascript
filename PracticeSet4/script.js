const toggledNavbar = document.querySelector(".toggled_navbar");
const hamburger = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");
let isMenuOpen = false;

const toggleButton = document.querySelector(".toggleButton");

toggleButton.addEventListener("click", function () {
  if (!isMenuOpen) {
    // Menu is closed, open it
    hamburger.style.display = "none";
    cross.style.display = "block";
    toggledNavbar.style.display = "block";
    // Additional logic to display the menu items or perform other actions
  } else {
    // Menu is open, close it
    cross.style.display = "none";
    hamburger.style.display = "block";
    toggledNavbar.style.display = "none";

    // Additional logic to hide the menu items or perform other actions
  }

  // Toggle the menu state
  isMenuOpen = !isMenuOpen;
});

function handleResize() {
  const viewportWidth = window.innerWidth;

  if (viewportWidth >= 519 && isMenuOpen) {
    toggledNavbar.style.display = "block";
  }
  if (viewportWidth < 520 && !isMenuOpen) {
    toggledNavbar.style.display = none;
  }
  if (viewportWidth < 520 && cross.style.display === "block") {
    cross.style.display = "none";
    hamburger.style.display = "block";
  } else {
    toggledNavbar.style.display = "none";
  }
}

handleResize();

window.addEventListener("resize", handleResize);
