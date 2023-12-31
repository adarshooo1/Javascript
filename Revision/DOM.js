// // DOM : Document Object Model

// // file used for Practice : dom.html

// // 4 Pillars of DOM

// // a). Selection of an Element
// // Selecting Tag
// let text1 = document.querySelector("h1");
// console.log(text1);

// // b). Changing HTML
// text1.textContent = "DOM DOOM DOMINATING";
// text1.innerText = "DOM MOON DOMINATING";
// text1.innerHTML = "Happy New Year";

// // c). Changing CSS
// text1.style.color = "white";
// text1.style.textTransform = "uppercase";
// text1.style.background = "linear-gradient(125deg,cyan ,red, blue)";

// // 4). Event Listeners
// text1.addEventListener("mousemove", function () {
//   console.log("Mouse if over the text1 ");
// });

// text1.addEventListener("click", function () {
//   text1.textContent = "Hey, this is the practice session of DOM";
//   text1.style.background = "Black";
//   text1.style.color = "yellow";
// });

const bulb = document.getElementById("bulb");
const switchButton = document.getElementById("switch");

let isLight = false;

switchButton.addEventListener("click", function () {
  isLight = !isLight;

  // Update the UI based on the state
  if (isLight) {
    bulb.style.background = "yellow";
    switchButton.textContent = "Off";
  } else {
    bulb.style.background = "#c9c9c9";
    switchButton.textContent = "On";
  }
});
