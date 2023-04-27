// Promise.resolve $$ Promise chaining;

const prom = Promise.resolve(5);

prom.then(value =>{
    console.log(value)
})

//Then method will always return promise;
// If any thing is returning the value then we can create chain of that;

function myPromise(){
    return new Promise((resolve , reject)=>{
        resolve("foo");
    })
}

myPromise()
    .then((value)=>{
        console.log(value);
        value += "bar"
        return value; //If here we will not return then it will retun automatically but problem is it will return undefined;
    })
    .then((value)=>{
        console.log(value);
    })