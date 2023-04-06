//Foreach
const number = [10 , 9 , 8  , 7 , 6 , 5 , 4 , 3 , 2, 1]


function myltiply(num,index){
    console.log(`Your Index: ${index}`);
    console.log(`${num} X 2 = ${num*2}`)
}

//Way 1:
for(let i = 0; i < number.length; i++){
    myltiply(number[i] , i)
}

//Way 2:
number.forEach(myltiply) //Foreach is a callback function which will call multiply function 

//Way 3:
number.forEach(function multiply2(index , num){
    console.log(`Your Index: ${index}`);
    console.log(`${num} X 2 = ${num*2}`)
})

//Exmaple 2:
const users = [
    {firstName: "Adarsh" , age: 21},
    {firstName: "Kumkum" , age: 19},
    {firstName: "Deepanshu" , age: 21},
    {firstName: "Payal" , age: 16}
];

//Way 1:Using for-of loop.
for(let user of users){
    console.log(user.firstName)
};

//Way 2:Using for-each loop.
users.forEach(function(user){
    console.log(user.firstName);
});

//Way 3: using arrow function.
users.forEach(user =>{
    console.log(user.firstName)
})

users.forEach((user , index) => {
    console.log(`User name is ${user.firstName} and his age is ${user.age} `);
})




////////////////////////////////////////////////////////////////////////////////////
//Map
//NOTE: When we use map function than it is required to create only that funciton which has a return type. Example:-square() function. Then it will able to return the new array, Else if the function has not return type, then when use use map method then it will give error of undefined.
// The map() method creates a new array by calling a function on each element of the original array. The function can transform each element and the transformed value will be added to the new array.
const array1 = [10, 9, 8, 6, 1, 2, 3, 4, 5]
 
//Function with return type.
function square(number){
    return number * number
}

//Way 1:
const squaredArray = array1.map(square);
console.log(squaredArray);

//Way 2:
const squaredArray2 = array1.map(function(number2){
    return number2 * number2
});
console.log(squaredArray2);

//Way 3:
const squaredArray3 = array1.map(number3 => {
    return number3 * number3;
})
console.log(squaredArray3)

const squaredArray4 = array1.map((number4 , index) => {
    return(`Index : ${index}, Value is ${number4 * number4}`)
})
console.log(squaredArray4)

//Example 2:
const nameArray = users.map(Employee => {
    return Employee.firstName;
})
console.log(nameArray)
//Output:[ 'Adarsh', 'Kumkum', 'Deepanshu', 'Payal' ]




/////////////////////////////////////////////////////////////////
//Filter Method
const Array2 = [10 , 2 , 5 , 3 , 9 , 1 , 7] 

//Way 1:
const isEven = function(nums){
    return nums % 2 === 0;
};
const EvenNumberArray1 = Array2.filter(isEven);
console.log(EvenNumberArray1)
//Output:[ 10, 2 ]


//Way 2:
const oddNumberArray2 = Array2.filter(function(ArrayNums){
    return(ArrayNums%2 === 1)
})
console.log(oddNumberArray2)
//Output:[ 5, 3, 9, 1, 7 ]

//Way 3:
const EvenNumberArray3 = Array2.filter(num =>{
    return(num%2 === 0)
})
console.log(EvenNumberArray3)
//Output:[ 10, 2 ]

//In case if we use map method then it will return the complete array, with this comparision and retun a NewArray of Boolean
const EvenNumberArray4 = Array2.map(num =>{
    return(num%2 === 0)
})
console.log(EvenNumberArray4)
//Output:[true, true, false, false, false, false, false ]




////////////////////////////////////////////////////////////////////////////////////
//Reduce
// The reduce() method reduces an array to a single value by calling a function on each element and accumulating the result.

//Example 1:
const Array3 = [8 , 10 , 14 , 51 , 2];

const sum = Array3.reduce((Accumulator, currentValue) => {
    return Accumulator + currentValue;
},0)
console.log(sum)


//Example 2:
const userCart = [
    {product_id:1, product_Name:"Mobile", price:10000},
    {product_id:2, product_Name:"Mobile", price:12000},
    {product_id:3, product_Name:"Mobile", price:14000}
]

const Total = userCart.reduce((totalprice , currentProduct)=> {
    return totalprice + currentProduct.price
},0) //Here we set 0, so we can mark the inital amount to be 0.

console.log(Total);
//Vizualization:
//totalprice        currentProduct.price      return
//    0                     {}                10,000
//  10,000                12,000              22,000
//  22,000                14,000              36,000