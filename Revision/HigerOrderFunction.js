// Higher Order Function
// When a function taking other function as argument or returns from it called higher order function.

// Higher-order function
function higherOrderFunction(callback) {
  console.log("Doing something before calling the callback");
  // Call the callback function
  callback();
}

// Callback function
function myCallback() {
  console.log("Executing the callback function");
}

// Using the higher-order function with the callback
higherOrderFunction(myCallback);

// we can say a function Callback, when any other function is having that function as argument Like this: higherOrderFunction(myCallback);
// so for function higherOrderFunction , myCallback in the callback function and the function which is having other function as argument that will be called higher order function

const arr = [1, 2, 3, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const calculateCircle = function (arr, methods) {
  //Higher order function
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(methods(arr[i]));
  }
  return output;
};

console.log(calculateCircle(arr, area));
console.log(calculateCircle(arr, circumference));

// or
// Map itself a higher order function;
console.log(arr.map(area));
console.log(arr.map(circumference));

// Or If we want to implement own method so,

let arr2 = [5, 6, 7, 8];
Array.prototype.calculateCircle = function (logic) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(arr2.calculateCircle(area));
