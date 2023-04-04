// If we pass anything then it will auto compare the value and print according to that.
function myfunc(a){
    console.log(a)
    console.log(typeof(a))
}

//This will print the value and its type:
myfunc("Adarsh")  //Adarsh , string

myfunc(12)  //12 , Number

myfunc([1,2,3,4,5,6,7,8])   //[1,2,3,4,5,6,7,8] , object

myfunc({name: "Adarsh"})    //{ name: 'Adarsh' } , object


//It is possible that value of (a) is a function.
function myfunc2(a){
    console.log(a)
    console.log(typeof(a))
}

myfunc2(myfunc2)    //[Function: myfunc2], function. So Yes, we can pass a function inside a function .

//Callback Function
function newFun2(){
    console.log("Inside the newFun2")
}

function newFun(funky){ //Here we passed funky as a parameter.
    console.log("We are inside a newfun") //Print this message.
    funky(); //Now i have passed funky as a function.
}

newFun(newFun2)
//First it is calling newFun, then we passing a name newfun2 then it called the newfun2() as a function and print the values of the newFun2 as well.
