//Getters and Setters

class person{
    constructor(fatherName, fatherAge, motherName, motherAge){
        this.fatherName = fatherName;
        this.fatherAge = fatherAge;
        this.motherName = motherName;
        this.motherAge = motherAge;
    }
    aboutFather(){
        return `Mr.${this.fatherName} age is ${this.fatherAge} years`
    }
    aboutMother(){
        return `Mrs.${this.motherName} age is ${this.motherAge} years`
    }
    aboutParent(){
        return `Mr.${this.fatherName} age is ${this.fatherAge} years & Mrs.${this.motherName} age is ${this.motherAge} years`
    }
    //This is the function of the getter method.
    get about2Father(){
        return `Mr.${this.fatherName} age is ${this.fatherAge} years`
    }

    //This is the function of the setter method.
    setFather(fatherName ,fatherAge){
        this.fatherName = fatherName;
        this.fatherAge = fatherAge;
    }

    //Here we do destructuring in the function and dynamic memory allocation using split method in the string.
    set about2Father(about2Father){
        const [fatherName , fatherAge] = about2Father.split(" ");
        this.fatherName = fatherName;
        this.fatherAge = fatherAge;
    }
}

const person1 = new person("Manoj Singh", 50, "Parvi Singh", 40);
console.log(person1.aboutFather())//Mr.Manoj Singh age is 50 years 
console.log(person1.aboutMother())//Mrs.Parvi Singh age is 40 years
console.log(person1.aboutParent())//Mr.Manoj Singh age is 50 years & Mrs.Parvi Singh age is 40 years

// if we use (get)keyword before any function then we ain't have need to call the function without parenthesis, Then it will treated as property.
console.log(person1.about2Father)//Mr.Manoj Singh age is 50 years

// Now after making the Object we want to change the father name and age;
person1.setFather("Adarsh" , 21)
console.log(person1.about2Father)//Mr.Adarsh age is 21 years, Now father name and age is changed.

person1.about2Father = "Mayank 12"
console.log(person1.about2Father)//Mr.Mayank age is 12 years