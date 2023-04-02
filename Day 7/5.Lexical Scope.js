//Basically This is refers to scoping that if a variable is globally declared and also inside a funciton and both have the differenet print values ,, then both will execute with different assigned values.

const a = 12;
console.log(a)
{
    const a = 100;
    console.log(a)
}
console.log(a)

//Same as inside the function it will work if the inner function have the value and the variable is a const type then it will access that value from the outside function because that will work as a global variable inside that function.
//Ans If the sun function have the same referene value associated will the different value then it will print the different value.

//Example 2:
function MyApp(){
    const x = "Brave Boy"
    console.log(x)
    function MyGame(){
        // const x = "Foolish Boy"
        //If we comment the above line then it will point to the MyApp() instance.
        console.log(x)
    }
    MyGame();
}

MyApp();

//Before commenting
// output:12
// Brave Boy
// Foolish Boy

//After Commenting
// output
// Brave Boy
// Brave Boy

//NOTE:let and const are block scope and var is function scope. Information. given in Day 2/About.txt

