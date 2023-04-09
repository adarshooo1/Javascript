const create = require("prompt-sync");

class Animal{
    constructor(name , age){
        this.name = name;
        this.age = age;;
    }
    eat(){
        return `${this.name} is eating`
    }
    isInfantAnimal(){
        return this.age <= 3;
    }
    about(){
        console.log(`${this.name} is now ${this.age} years old`)
    }
}

const animal1 = new Animal("Cow" , 8);

console.log(animal1.name , animal1.age);
console.log(animal1.eat)//[Function: eat]
console.log(animal1.eat())//Cow is eating
animal1.about();//Cow is now 8 years old

//Like this we can make Dog class , Employee class, Student class.
//Which will help in to create object of the same qualities. Like we have 50 Student that has new admission, At the time of attendence they all don't have different student register for their attendance all are in one regiester will give all the details of the every student.

//How to create one class from other class. (Inheritance)
class Dog extends Animal{
    //It don't have any constuctor;
    //Dog is a subclass or Base Class.
}

const animal2 = new Dog("Bruno" , 4);
console.log(animal2.isInfantAnimal())
animal2.about()//This inherit the qualities of the parent class Animal.


class Horse extends Animal{
    constructor(name , age , speed){
    super(name , age);
    this.speed = speed;
    }
    eat(){//If this method is present in the current class then it will print this calss this method otherwise it will pint the other class method.
        return(`MODIFIED:The child class of Aminal:- {this.name} is eating grams`)
    }
    run(){
        return(`${this.name} is running at the speed of ${this.speed}kmph`)
    }
}

const animal3 = new Horse("Chetak" , "9" , 60);
animal3.about()
console.log(animal3.run())
console.log()
console.log(animal3.eat())
