// What is promise: Promise is a that value which we don't know in current but we will know that it future ; So promise refers to future value;

//Promises helps in solving repeated callback function, like callback hell and callback Pyramid-Doom;

// const bucket = ['coffee' , 'chips' , 'vegetable' , 'salt' , 'rice'];
// Scenario 1:, Here I promised to make fried rice , but the fried rice isn't there then we check for the item that we have , So we have vegies , salt and rice so we mix together then make a new product fried rice; So till we do not get fried rice till then we have 2 things 1.Status:pending, 2.Value:Undefined. But when we get te item then the 1.Status:fulfilled, 2.Value:Fried Rice;
// const bucket = ['coffee' , 'chips' , 'vegetable', 'rice'];
// Scenario 2:, Here I promised to make fried rice , but the fried rice isn't there then we check for the item that we have , So we have vegies and rice, which is not sufficient to make fried-rice in future so in this case: till we do not get fried rice till then we have 2 things 1.Status:pending, 2.Value:Undefined. But when we know that we have not sufficient item then the 1.Status:Rejected, 2.Value: Any mssg or anything that we are giving in case of item not get or found;


console.log("Script Start")

//This ia a Asycronous function;
const bucket = ['coffee' , 'chips' , 'vegetable' , 'salt' , 'rice'];

const FriedRicePromise = new Promise((reslove , reject)=>{
    if(bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")){
        reslove("fried Rice")
    }
    else{
        reject("Unable to make")
    }
})

FriedRicePromise
//If get all the items to make:
  .then((myFriedRiceDish) => {
    console.log("lets eat" , myFriedRiceDish);
  })
//If do not get all items to make:  
  .catch((error) => {
    console.error("Error: ", error);
  });


//Syncronous Function:
for(let i = 0 ; i < 100 ; i++){
  console.log(Math.floor(Math.random()* 100));
}

setTimeout(()=>{
  console.log("hello from inside time out")
},100);

console.log("Script End")

/////////// Output Console:
// Script Start
// prit 100 random number;
// Script End
// Lets eat fried rice  ----> This Promises task goes into microtask which has more importance than callback queue;
// print inside time-out; ----> This will go inosde the  callback Queue;
