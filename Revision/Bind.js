// Bind
// The bind method in JavaScript is used to create a new function with a fixed this value,
// and optionally, some initial arguments. Unlike call and apply, bind does not invoke the function immediately but returns a new function that can be invoked later.

// Example 1: Basic Usage
const person = {
  name: "John",
  greet: function (message) {
    console.log(`${message} , ${this.name}`);
  },
};

const greetJohn = person.greet.bind(person, "Hello");
greetJohn();

// Example 2:

function multiply(x, y) {
  return x * y;
}

const double = multiply.bind(null, 5);
console.log(double(5)); // Output: 10

// Example 3: Using bind with Event Listeners
const button = document.getElementById("myButton");

function handleClick(message) {
  console.log(`${message} , Button Clicked!`);
}

button.addEventListener("click", handleClick.bind(null, "Hello"));

// Example 4: Preserving this in Callbacks

const obj = {
  value: 24,
  getValue: function () {
    return this.value;
  },
};

const getValue = obj.getValue;
const boundGetValue = getValue.bind(obj);

console.log(getValue()); // Output: undefined (this is not defined)
console.log(boundGetValue()); // Output: 42 (this is bound to the object)

// Example 5 : Delaying Execution with bind:
function logMessage(message) {
  console.log(message);
}

const delayedLog = logMessage.bind(null, "Superb we completed");

setTimeout(delayedLog, 2000);
