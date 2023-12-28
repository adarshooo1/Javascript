// Call
// They are often referred to as "function borrowing" or "function invocation" methods.

// Call Method:
// In the first argument of call, we will pass the first argument which has (this.value), string, function, or method
const person = {
  name: "Addy",
  greet: function (greeting) {
    console.log(`${greeting}, ${this.name}`);
  },
};

const person2 = {
  name: "Jenny",
};

person.greet.call(person2, "Hello");

// Example 1: Basic Usage
function greet2(args) {
  console.log(`${args} , ${this.name}`);
}

const p3 = {
  name: "Piggy",
};

greet2.call(p3, "Welcome");

// Example 2: Using call to Borrow Methods
const Adi = {
  name: "Adarsh",
  introduce: function () {
    console.log(
      `Adi this is ${this.name}. ${this.name} : Nice to meet you ${Adi.name} !`
    );
  },
};

const Alice = {
  name: "Alice",
};

Adi.introduce.call(Alice);

// Example 3: Passing Arguments with call
function displayInfo(age, city) {
  console.log(`${this.name} is ${age} years old and lives In ${city}`);
}

const person4 = {
  name: "John",
};

displayInfo.call(person4, 21, "Noida");

// Example 4: Changing this in Built-in Functions

const number = [1, 2, 3, 4, 5, 7, 11, 9, 10];
const maxNumber = Math.max.call(null, ...number); // As we know that we don't have any this.value argument, So we defined it null.

console.log(maxNumber);

// Example 5: Using call with Function Constructors
function person5(name, age) {
  this.name = name;
  this.age = age;
}

function info() {
  console.log(`${this.name} is ${this.age} years old`);
}

const people1 = new person5("Maya", 22);
info.call(people1);