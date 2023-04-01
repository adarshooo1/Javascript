//Object Destructuring
const fruit = {
    red : "Apple",
    Yellow : "Lemon",
    Orange : "Orange",
    Black : "Grapes",
    pink : "Litchi"
}

//Way 1:
const fru1 =  fruit.red
const fru2 = fruit.Black
console.log(fru1 , fru2)
//Apple Grapes

//Way 2:
const {Yellow , red ,...restfru} = fruit;
console.log(Yellow , red , restfru)
//Lemon Apple { Orange: 'Orange', Black: 'Grapes', pink: 'Litchi' }



