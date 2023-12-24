// Basic Concepts:
// Attaching Event Listeners:

// Example 1: Click event
document.getElementById("myButton").addEventListener("click", () => {
  let fname = document.getElementById("name").value;
  alert(`Hello ${fname}`);
  console.log(fname);
  fname = ""; //Now here we assign that the value of input field is "";
  document.getElementById("name").value = fname; // Clear the input field with assign fname;
}); //Just select the button by Id and when someone hit the button it will show alert

// Example 2: Mouseover event
document
  .getElementsByClassName("hoverDiv")[0]
  .addEventListener("mouseover", () => {
    console.log("Mouseover Event");
  });

// Example 3: Keydown event
document.addEventListener("keydown", function (event) {
  console.log("Key Pressed", event.key);
});

// =================================================================
// Event Object:
// Simple Way:
document.getElementById("name").addEventListener("input", (e) => {
  console.log(e.target.value);
});

// debounce function way : //Efficient way.
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Using debounce for the input event
document.getElementById("name").addEventListener(
  "input",
  debounce((e) => {
    console.log(e.target.value);
  }, 100)
);

// ---------------------------------------------------------------------
// Remove Event Listeners:
function myHandler() {
  console.log("Handler executed");
}
//Add Event Listeners
document.getElementById("myElement").addEventListener("click", myHandler);

document.getElementById("myElement").removeEventListener("click", myHandler);

// 2. Intermediate Concepts:
// 2.1 Event Delegation:
// Event delegation allows you to listen for events on a parent element and respond to them for child elements.
document.getElementById("myList").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    alert("List Item Clicked");
  }
});

// 2.2 Event Bubbling:
// Events in JavaScript propagate in two phases: capturing and bubbling. You can use the third parameter in addEventListener to specify the phase.
document.getElementById("parent").addEventListener("click", function () {
  console.log("I am Parent");
});

document.getElementById("child").addEventListener(
  "click",
  function () {
    console.log("Child Clicked!");
  }
  // false
); // Default is false (bubbling)

// 2.3 Event Capturing:
document.getElementById("parent").addEventListener(
  "click",
  function () {
    console.log("I am Parent");
  },
  true
);

// =======================================================================
// Creating custom event:
var customEvent = new Event("myCustomEvent");

// Dispatching the event;
document.dispatchEvent(customEvent);

// Listening the custom event
document.addEventListener("myCustomEvent", function () {
  console.log("Custom event fired!");
});

// ========================================================================
// 3: Advance Concepts
const input = document.getElementById("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

// // // Not Recommended so better is to comment of
// // // input.addEventListener("input", (e) => {
// // //   //Personal Views : When we enter any value and it makes a brand new request to server for each word word we type which makes the server heavy, So we want that we need something which makes request when we stop typing or in a gap of time Ex: 200ms. So debouncing and throttling helps in that:
// // //   defaultText.textContent = e.target.value;
// // // });

// Example 3.1: Debouncing
input.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value;
  updateDebounce(e.target.value);
  updateThrottle(e.target.value);
});
const updateDebounce = debounce((text) => {
  debounceText.textContent = text;
});

function debounce(callback, delay = 500) {
  let intervalId;
  return (...args) => {
    clearTimeout(intervalId);
    intervalId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

// Example 3.2: Throttling
const updateThrottle = throttle((texts) => {
  throttleText.textContent = texts;
});

function throttle(callback, delay = 500) {
  let isWaiting = false;
  let waitingArgs;
  const TimeoutFunction = () => {
    if (waitingArgs == null) {
      isWaiting = false;
    } else {
      callback(...waitingArgs);
      waitingArgs = null;
      setTimeout(TimeoutFunction, delay);
    }
  };
  return (...args) => {
    if (isWaiting) {
      waitingArgs = args;
      return;
    }

    callback(...args);
    isWaiting = true;
    setTimeout(TimeoutFunction, delay);
  };
}

// =====================================================================================
// Increment Function for mousemove
function incrementCount(element) {
  element.textContent = (parseInt(element.textContent) || 0) + 1;
}
// Default Mouse Move
document.addEventListener("mousemove", (e) => {
  incrementCount(defaultText);
  updateMousemoveDebounce();
  updateMousemoveThrottle();
});

// Debounce Mouse Move
document.addEventListener("mousemove", () => {
  updateMousemoveDebounce();
});

const updateMousemoveDebounce = debounceMove(() => {
  incrementCount(debounceText);
});

const updateMousemoveThrottle = throttleMove(() => {
  incrementCount(throttleText);
});

function debounceMove(callback, delay = 500) {
  let intervalId;
  return (...args) => {
    clearInterval(intervalId);
    intervalId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

function throttleMove(callback, delay = 1000) {
  let isWaiting = false;
  let waitingArgs;
  const TimeoutFunction = () => {
    if (waitingArgs == null) {
      isWaiting = false;
    } else {
      callback(...waitingArgs);
      waitingArgs = null;
      setTimeout(TimeoutFunction, delay);
    }
  };
  return (...args) => {
    if (isWaiting) {
      waitingArgs = args;
      return;
    }

    callback(...args);
    isWaiting = true;
    setTimeout(TimeoutFunction, delay);
  };
}

// ==========================================================================
function handleCounter() {
  let val = document.getElementById("counterField").value;
  val = parseInt(val) + 1;
  document.getElementById("counterField").value = val;
  console.log(val);
}
