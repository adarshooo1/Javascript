class student{
    constructor(RollNo, StudentName){
        this.roll = RollNo;
        this.StudentName = StudentName;
        student.count += 1;// And when ever this constructor is called then count will increase: Example: In the Earth or the class as the population increase it is not for the single student it is same for the everyone.Because Population is static, If it increase then it will increase for others as well,
    }
    static count = 0;//We globally initialize the count = 0 in this function.

    static classInfo(){
        return "This the the class of type Student"
    }
    
}

//Creating Object
const stud1 = new student(101 , "Adarsh")
const stud2 = new student(102 , "Aman")
const stud3 = new student(103 , "Payal")

console.log(student.count)//3

console.log(student.classInfo())//When we class static method of the class then It needs to be call with the class Name.