// Asynchronous Javascript:

// 1 Callback:
function runCallback(Callback) {
  Callback();
}

runCallback(() => {
  console.log("Callback is Executed");
});

// 2. Async Operation with callback;
function simulateAsyncOperation(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

simulateAsyncOperation(() => {
  console.log("Async Operation with callback");
});

// Promise:
function createPromise(callback) {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      console.log("Promise is resolved");
      if (typeof callback === "function") {
        callback();
      }
      resolve();
    }, 2000);
  });
}

createPromise(() => {
  console.log("Callback executed after the operation is complete!");
});

// Question 2:

function stepOne(callback) {
  return new Promise((resolve, reject) => {
    const isReject = Math.random() < 0.5;
    setTimeout(() => {
      if (isReject) {
        console.log("Step one is Rejected");
        reject(new Error("Something went wrong at Step 1"));
      } else {
        console.log("Promise is resoled at Step 1");
        resolve();
      }

      if (typeof callback === "function") {
        callback();
      }
    }, 2000);
  });
}
function stepTwo(callback) {
  return new Promise((resolve, reject) => {
    const isReject = Math.random() < 0.5;

    setTimeout(() => {
      if (isReject) {
        console.log("Step Two is Rejected");
        reject(new Error("Something went wrong at Step 2"));
      } else {
        console.log("Promise is resolved at step 2");
        resolve();
      }
      if (typeof callback === "function") {
        callback();
      }
    }, 4000);
  });
}
function stepThree(callback) {
  return new Promise((resolve, reject) => {
    const isReject = Math.random() < 0.5;

    setTimeout(() => {
      if (isReject) {
        console.log("Step three is Rejected");
        reject(new Error("Something is rejected at Step 3"));
      } else {
        console.log("Promise is Resolved at Step 3");
        resolve();
      }
      if (typeof callback === "function") {
        callback();
      }
    }, 3000);
  });
}

stepOne()
  .then(() => stepTwo())
  .then(() => stepThree())
  .then(() => {
    console.log("Program Executed");
  })
  .catch((error) => {
    console.error("An error occurred:", error.message);
  });

// setTimeout & setInterval

function delayed(message, delay) {
  setTimeout(() => {
    console.log(`${message} (Displayed after ${delay} milliseconds)`);
  }, delay);
}

delayed("SetTimeOut Function", 2000);

function startCounter(duration, interval) {
  let counter = 0;

  let intervalFunction = setInterval(() => {
    if (counter < duration / interval) {
      console.log(`Counter: ${counter + 1}`);
      counter++;
    } else {
      clearInterval(intervalFunction);
    }
  }, interval);
}

startCounter(5000, 1000);

// Async & Await

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetch Data");
      resolve({ id: 1, name: "Adarsh Singh" });
    }, 2000);
  });
}
fetchData().then((data) => {
  console.log("Data received:", data);
});
// or
const data = fetchData();
data.then(() => {
  console.log(data);
});

async function performStepsSequentially() {
  try {
    await stepOne();
    await stepTwo();
    await stepThree();
    console.log("All steps completed successfully");
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
performStepsSequentially();

// Fetching Data from API
async function fetchUserData() {
  try {
    const response = await fetch("https://dummyjson.com/carts/");
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
fetchUserData();

// Real Time Updates:
function startRealTimeUpdates() {
  setInterval(async () => {
    try {
      const response = await fetch("https://dummyjson.com/carts"); //response m server se data kb ayega nhi pata toh isse related cheej await m chali jayegi
      if (!response.ok) {
        throw new Error("Failed to fetch Data");
      }
      const data = await response.json();
      console.log(data);
    } catch {
      console.error("An error occurred:", error.message);
    }
  }, 5000);
}

startRealTimeUpdates();
