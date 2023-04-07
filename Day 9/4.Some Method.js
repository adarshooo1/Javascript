//Some Method:

//Example 1:
const number = [3 , 5 , 6, 7]

//Now is there any single number in the array which is even;

const ans  = number.some(number => number % 2 ===0);
console.log(ans)//True, Because there is 6 in the number array which is even.


//Example 2:
const product = [
    {product_id:1 , productName: "p1", price:300},
    {product_id:2 , productName: "p2" , price:3000},
    {product_id:3 , productName: "p3" , price:432},
    {product_id:4 , productName: "p4" , price:300000},
    {product_id:5 , productName: "p5" , price:1999}
]

const ans2 = product.some(userCart => userCart.price > 290000)
console.log(ans2)//True, Because yes there is a product p4 whose price is more than 290000.So return true.


