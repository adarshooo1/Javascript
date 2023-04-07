//Fill Method :
    //fill(Value , start , end )


const myArray = new Array(10).fill(-1)
console.log(myArray) //[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]


const myArray2 = [1,2,3,4,5,7,8,9]
myArray2.fill(100 , 2 , 6)
console.log(myArray2)

// NOTE:This will change the original array;
