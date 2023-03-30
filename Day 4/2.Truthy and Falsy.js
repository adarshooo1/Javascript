//Truthy and falsy Values.

//False values
// false
// ""
// null
// undefined
// 0

//Truthy Values
//Else everything except Falsy values.

let firstName = ""

if(firstName){
    console.log(firstName)//If the firstName is Initialzed then it will return this. 
}
else{
    console.log("This ia a kind of empty and false values")//Here If we use anything which belongs to the falsy values then this statement will run.
}