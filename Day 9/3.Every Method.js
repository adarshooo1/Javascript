//Every Method: This is a callback function which will return the boolean. And Callback function will always return the boolean.

const number = [2,4,6,8];

const num = number.every((number) => number%2 === 0)
console.log(num) //True, Because the number inside the array are all even.


//Example 2:
const product = [
    {product_id:1 , productName: "p1", price:300},
    {product_id:2 , productName: "p2" , price:3000},
    {product_id:3 , productName: "p3" , price:432},
    {product_id:4 , productName: "p4" , price:5323},
    {product_id:5 , productName: "p5" , price:1999}
]

//This isCheck function will check that price of every item inside the product object is less than 31000 or not.
const isCheck = product.every((cartItem) => cartItem.price < 31000);
console.log(isCheck) //True, So yes every item price is less than 31000. 