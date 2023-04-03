function myfun(a, b, c){
    console.log(`Value of a is ${a}`)
    console.log(`Value of a is ${b}`)
    console.log(`Value of a is ${c}`)
}
myfun(1,2,3)
// output:-
// Value of a is 1
// Value of a is 2
// Value of a is 3

//What if we add more values inide this function;
myfun(1,2,3,4,5,6)
// output:-
// Value of a is 1
// Value of a is 2
// Value of a is 3

//This will still print the same but we can do like this so we can store left remaining values.

function myfun2(a , b , ...c){
    console.log(`Value of a is ${a}`)
    console.log(`Value of a is ${b}`)
    console.log(`Value of a is ${c}`)
}
myfun2(1 , 2,3,4,5,66,778)
//Output:
// Value of a is 1
// Value of a is 2
// Value of a is 3,4,5,66,778

//Left of 3 to 778 will store in c as a type of array and we can iterate also in this.


//This is the function which will add all the numebr passed in the parameter.
function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}

let a = addAll(1,2,3,4,5,6,7,8,9);
console.log(a)


