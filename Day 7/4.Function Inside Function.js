const app = () =>{

    console.log("This is the outer function.")

    //This is function 1;
    const myFunc = () =>{
        console.log("This is the inner function")
    }
    myFunc();

    //This is Function 2:
    const addwo = (num1, num2) => num1 + num2;
    console.log(addwo(2 , 4))

    //This is Function 3;
    const Multiply = (num1, num2) => num1 * num2;
    console.log(Multiply(10 ,10))
}

app();
