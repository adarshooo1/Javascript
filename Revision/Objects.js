// Objects
// objects are a fundamental data type that allows you to store and organize data using
// key-value pairs

// 1. Object Literal:
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// ---------------------------------------------------------------
// 2. Object Constructor:
const person2 = new Object();
person2.name = "John";
person2.age = 30;
person2.city = "New York";

// ---------------------------------------------------------------
// 3. Accessing Object Properties:
console.log(person.name); // Output: 'John'
console.log(person["age"]); // Output: 30

// ---------------------------------------------------------------
// 4. Object Methods:
const person3 = {
  name: "John",
  age: 30,
  city: "New York",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

person3?.sayHello(); // Output: 'Hello, my name is John.' || using optional chaining.

// or

const person5 = {
  name: "John",
  age: 30,
  city: "New York",
  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

person5?.sayHello(); // Output: 'Hello, my name is John.'

// ---------------------------------------------------------------
const p1 = {
  name: "adarsh",
  age: 21,
};

// Adding a new property to object
p1.job = "Engineer;";

// Deleting a property
delete p1.age;
console.log(p1);

// ---------------------------------------------------------------
// Iteration
for (let key in p1) {
  console.log(`${key} : ${p1[key]}`);
}

// ---------------------------------------------------------------
// Object Methods and Properties:
const key = Object.keys(p1);
const values = Object.values(p1);
const entries = Object.entries(p1);
console.log(key, values, entries);

// ---------------------------------------------------------------
// Object Prototypes and Classes:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const people = new Person("Adarsh", 30);
people.sayHello();
