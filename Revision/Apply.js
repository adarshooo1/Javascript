// Apply :
// Apply method in JavaScript , which is similar to the "call" method but accept arguments as an array;

// Example 1: Basic Usage
function greet(message) {
  console.log(`${message}, ${this.name}`);
}

const person6 = {
  name: "John",
};

greet.apply(person6, ["Foolish"]);

// Example 2: Using apply to Borrow Methods
const goddy = {
  name: "goddy",
  introduce: function () {
    console.log(`Hi, I'm ${this.name}`);
  },
};
const jane = {
  name: "Jane",
};

goddy.introduce.apply(jane);

// Example 3: Passing Arguments with apply
function displayInfo(age, city) {
  console.log(`${this.name} is ${age} years old and lives in ${city}`);
}

const person1 = {
  name: "Adarsh",
};

displayInfo.apply(person1, [21, "America"]);

// Example 4: Using apply with Built-in Functions
const arr = [1, 2, 4, 9, 10, 11, 22, 5];
const maxInArray = Math.max.apply(null, arr);

console.log(maxInArray);

// Example 5: Using apply with Function Constructors
function Person(name, age) {
  this.name = name;
  this.age = age;
}

function displayInfo() {
  console.log(`${this.name} is ${this.age} years old`);
}

const john = new Person("John", 25);
displayInfo.apply(john); // Output: John is 25 years old
