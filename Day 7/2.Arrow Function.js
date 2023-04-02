const HappyBirthday = () =>{
    console.log("Happy birthday")
}
HappyBirthday();

//How to make a arrow fuction which will add three numbers.
const sumThree = (num1 , num2, num3) =>{
    return num1 + num2 + num3;
}

const ans1 = (sumThree(1 ,2,3))
console.log(ans1)

//How to make a isEven number check function.(Two ways)

//Way 1:
// const isEven = (num) =>{
//     return num % 2 === 0;
// }

//Way 2:
const isEven = num => num % 2 === 0;
console.log(isEven(3))

//How to make return string first character .

//Way 1:
// const character = (string) =>{
//     return string[0];
// }

//Way 2:
const character = string => string[0];
console.log(character("Mango"))

//How to find the target element in the array.If found then return the index else -1.

const findTarget = (array , target) => {
    for(let i = 0; i < array.length ; i++){
        if(array[i] === target){
            return (i)
        }
    }
    return -1
}

const arr = [10 , 9 , 8 , 7 , 6 , 5];
console.log(findTarget(arr , 8))