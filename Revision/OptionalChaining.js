// Optional chaining (?.) is a feature in JavaScript that simplifies the process of accessing nested properties or
// calling methods of an object when you're not sure if those properties or methods exist. It helps to avoid errors
// that might occur if you try to access properties or methods of null or undefined.

// Basic Usage
const user = {
  name: "Adarsh",
  address: {
    city: "Noida",
    address: "201304",
  },
};

const PostalCode = user?.address?.address;
console.log(PostalCode);

const houseNumber = user?.address?.houseNumber; //Here house number in not present, But instead of passing error, It return undefined. Which is good, Because it help app to crash.
console.log(houseNumber);

const user2 = [
  { name: "Addy", age: "21" },
  { name: "Maddy", age: "21" },
  { name: "Eddy", age: "21" },
];

console.log(user2[2]?.name);
console.log(user2[4]?.name); //Not Present so return undefined.

function calculation(logic, a, b) {
  return logic(a, b);
}

function sum(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a + b;
}

console.log(calculation(sum, 12, 21));
