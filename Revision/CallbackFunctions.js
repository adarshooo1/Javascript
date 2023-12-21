// What is a callback function, A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are a way to ensure that certain code doesn't execute until a specific asynchronous operation is finished.

// Basic Example:

// Synchronous callback functions
// Example 1:
function x(y) {
  console.log("X");
  y(); //Here we declare this, that it is a function.
}
x(function y() {
  console.log("Y");
});

// Example 2
function greet(fname) {
  console.log(`Hello, ${fname}!`);
}

function finalGreet(callback) {
  const fname = "Adarsh";
  callback(fname);
}

finalGreet(greet);

// Handling Asynchronous Operations

// Async Callback

// Example 1
function fetchData(callback) {
  setTimeout(() => {
    const data = "fetch some data";
    callback(data);
  }, 2000);
}

fetchData((result) => console.log(result));

// Example 2

function server(sorted, unsorted) {
  setTimeout(() => {
    const error = Math.random() < 0.5;

    if (error) {
      unsorted("This server is unsorted");
    } else {
      const data = "I am data of sorted server";
      sorted(data);
    }
  });
}

server(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
);

// Async function
setTimeout(function () {
  console.log("inside setTimeout");
}, 7000);

// or;

setTimeout(() => {
  console.log("inside setTimeout");
}, 8000);
