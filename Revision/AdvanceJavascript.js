const url = "https://api.github.com/users/QuincyLarson";

// Async await way to return the response;
const fetchData = async () => {
  const response = await fetch(url);
  return await response.json();
};

fetchData().then((val) => {
  console.log(val);
});

// Promisified way to return the promise;
const newPromise = () => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((data) => {
        if (!data.ok) {
          throw new Error("Failed to fetch");
        }
        return data.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

newPromise().then((val) => {
  console.log(val);
});