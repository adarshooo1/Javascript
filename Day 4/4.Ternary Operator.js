//Without Ternnary Operator

let age = 6
let drink;

if(age > 5){
    drink = "Coffee"
}
else{
    drink = "Milk"
}
console.log(drink)

//With ternary Operator /Conditional operator

let Age = 12
let Drive = Age >= 18 ? "You can Drive" :`You can drive after ${18 - Age} Later.`;
console.log(Drive)
