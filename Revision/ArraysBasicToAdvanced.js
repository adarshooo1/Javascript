// Arrays

// Push
let fruit = ["Apple", "Orange"];
fruit.push("Banana");
console.log(fruit);

// Pop
fruit.pop();
console.log(fruit);

// Shift
fruit.shift();
console.log(fruit);

// Unshift
fruit.unshift("Mango");
console.log(fruit);

// Concat
let cloth = ["shirt", "pants"];
let mixed = fruit.concat(cloth);
console.log(mixed);

// Slice
let sliced = mixed.slice(0, 3);
console.log(sliced);

let sliced2 = mixed.slice(2, 3);
console.log(sliced2);

mixed.splice(1, 2, "PineApple"); //Changes the existing array. This says (1,1 , "Apple"), Starting from index 1 and ending at index 1 will Place "Apple". instead of orange.
// Example 2: mixed.splice(1,mixed.length, "PineApple"); //['mango' , 'PineApple], Pine Apple take place till 1 to mixed.length.
console.log(mixed);

// For-Each
let numbers = [1, 2, 3, 4, 5];

// Loop and print all number
numbers.forEach(function (number) {
  console.log(number);
});

// Loop, Tell Index and print whole array
numbers.forEach(function (number, index, array) {
  console.log(`Index ${index}: ${number}`);
  console.log(`The whole array: ${array}`);
});

// Callback way to loop whole array
let numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach((number) => {
  console.log(number);
});

// Map
// Example 1:
const arr2 = [2, 4, 6, 8, 10];
let arr2Copy = arr2.map((num) => {
  return num * num;
});

console.log(arr2Copy);

// Example 2
const fruits = ["Apple", "Mango", "Banana", "Pine Apple"];
const fruitsCopy = fruits.map((str) => {
  return str.toUpperCase().split(""); //Return [['A', 'P', 'P', 'L', 'E'], [], [], []] for all.
});
console.log(fruitsCopy);

// Filter
// Example 1:
const arr3 = [2, 3, 4, 5, 6];
const evenArray = arr3.filter(function (number) {
  return number % 2 === 0;
});
console.log(evenArray);

// Example 2:
const fruitsCopy2 = fruits.filter((str) => {
  return str.length >= 6;
});

console.log(fruitsCopy2);

// Reduce

// Example 1:
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reduceExample = arr4.reduce((prevValue, currValue) => {
  // What reduce basically do, It takes 2 argument, 1 argument represent the prevValue which starts from 0 and 2nd Argument is currValue which represents very first item of the array, as the iteration proceed internally it will increase one by one add all.
  return prevValue + currValue;
}, 0); //Takes a initial value, or if not given then default 0; If Initial value is 0 then the sum is 55. otherwise if the initial is 10 then will add the 10 to 55 = 65.
console.log(reduceExample);

// Example 2:
const fruitList = ["Apple", "Banana", "Papaya", "Orange", "Apple"];
const fruitCount = fruitList.reduce((prevValue, currValue) => {
  prevValue[currValue] = (prevValue[currValue] || 0) + 1;
  return prevValue;
}, {});

console.log(fruitCount);

// Map with objects
let originalObject = { a: 1, b: 2, c: 3 };
let doubleObject = Object.fromEntries(
  Object.entries(originalObject).map(([key, value]) => [key, value * 2])
);
console.log(doubleObject);

// Filter with object
let originalObject2 = { a: 1, b: 2, c: 3, d: 4 };
let filteredObject2 = Object.fromEntries(
  Object.entries(originalObject2).filter(([key, value]) => value >= 3)
);
console.log(filteredObject2);

// Reduce with objects:
let originalObject3 = { a: 1, b: 2, c: 3 };
let sum = Object.values(originalObject3).reduce(
  (prevValue, currValue) => prevValue + currValue,
  0
);
console.log(sum);

// Transforming an object by concatenating all string values
let originalObject5 = { a: "Hello", b: " ", c: "world!" };
let concatenatedString = Object.values(originalObject5).reduce(
  (acc, value) => acc + value,
  ""
);
console.log(concatenatedString);
// Output: 'Hello world!'
