//Example 1:
const str = ["A" , "X" , "B" , "Y" , "Z" , "G" , "F" , "M"] ;
str.sort();
console.log(str)
//Expected output:["A" , "X" , "B" , "Y" , "Z" , "G" , "F" , "M"]
//Given output:["A" , "X" , "B" , "Y" , "Z" , "G" , "F" , "M"]

//Example 2:
const num = [100 , 200 , 500 , 2 , 50 , 400 , 23 , 34 , 54];
num.sort();
console.log(num)
//Expected output:[ 2 , 23 , 34 , 50, 54 , 100 , 200 ,400 , 500 ]
//Given output:[100, 2 , 200,  23, 34, 400,  50, 500, 54], So It is happening because this sort method takes this array as a string that why we cannot get the proper order of the array as we expected.

//Example 3:
const product = [
    {product_id:1 , productName: "p1", price:300},
    {product_id:2 , productName: "p2" , price:3000},
    {product_id:3 , productName: "p3" , price:432},
    {product_id:4 , productName: "p4" , price:5323},
    {product_id:5 , productName: "p5" , price:1999}
]

const LowToHigh = product.slice(0) .sort((a, b) => {
    return a.price - b.price;
})
console.log(LowToHigh)


const HighToLow = product.slice(0) .sort((a, b) => {
    return  b.price - a.price;
})
console.log(HighToLow)