// Syncronous Callback Function 

function myFun(callback){
    console.log("Function is Doing Task 1");
    callback();
}

function fun2(){
    console.log("Done Done Done");
}


// Example of Callback;
myFun(fun2);

// Here we taking a function inside a function and calling it;
// Way 1:
myFun(function myFun2(){
    console.log("Work 2!")
});

//Way 2:
myFun(()=>{
    console.log("Work 3")
})


/////////////////////////////////////////////////////////////
function TakeNumbers (Number1 , Number2 , Callback){
    console.log(Number1 , Number2);

    //Inside the Callback we are taking the Number we have have passed in the argumnett to perform the opration we want;
    Callback(Number1 , Number2);
}


function Add2Number(Number1 , Number2){
    console.log(Number1 + Number2);
}

TakeNumbers(3 , 5 , Add2Number);

/////////////////////////////////////////////////////////////////////////////////////
function take2NumberAndAdd(Number1 , Number2 , onSuccessPerform , onFaliurePerform){
    if(typeof Number1 === "number" && typeof Number2 === "number"){
        onSuccessPerform(Number1 , Number2);
    }
    else{
        onFaliurePerform();
    }
}


take2NumberAndAdd(4 , 4 , (Number1, Number2)=>{
    console.log(Number1 + Number2);
} ,()=>{
    console.log("Enter a valid Input")
})



