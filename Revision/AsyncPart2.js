// // What is Promises?
// // Promises are the syntactical sugar over the callback, which means a pretty way to write callback;
// // Callback
// function findSum(n) {
//   let ans = 0;
//   for (let i = 0; i < n; i++) {
//     ans += i;
//   }
//   return ans;
// }

// function findSumTillN() {
//   console.log(findSum(100));
// }

// setTimeout(findSumTillN, 4000);
// console.log("Hello World");

// // Callback way to readFile;
// const fs = require("fs");

// // My own async function:
// function adarshReadFile(cb) {
//   fs.readFile("demo.txt", "utf-8", function (err, data) {
//     if (err) {
//       throw new Error("Error Message :", err);
//     } else {
//       cb(data);
//     }
//   });
// }

// function onDone(data) {
//   console.log(data);
// }

// adarshReadFile(onDone);

// // Promise way to ReadFile:
// function adarshReadFile2() {
//   return new Promise(function (resolve, reject) {
//     fs.readFile("demo.txt", "utf-8", function (error, data) {
//       if (error) {
//         reject(new Error(error));
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

// adarshReadFile2().then(onDone);

// let p = new Promise(function (resolve) {
//   setTimeout(function () {
//     resolve("foo");
//   }, 2000);
// });

// function callback() {
//   console.log(p);
// }

// console.log(p);
// p.then(callback);

// let d = new Promise(function (resolve) {
//   resolve("<resolved>");
// });

// d.then(function () {
//   console.log(d);
// });

// function adarshAsyncFunction() {
//   let p = new Promise(function (resolve) {
//     resolve("Hi there");
//   });
//   return p;
// }

// function main() {
//   adarshAsyncFunction().then(function (value) {
//     console.log(value);
//   });
// }
// main();

// // // ============================================================
// // Async and Await
// function adarshAsyncFunction2() {
//   const func = new Promise(function (resolve, reject) {
//     resolve("Async and Await Example");
//   });
//   return func;
// }

// async function main() {
//   let value = await adarshAsyncFunction2();
//   console.log(value);
// }
// main();

// Questions:
function fetchUser() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((data) => {
        if (!data.ok) {
          throw new Error("Failed to fetch");
        }
        return data.json();
      })
      .then((user) => {
        resolve(user);
      })
      .catch((error) => reject(error));
  });
}

fetchUser().then((val) => {
  console.log(val);
});
