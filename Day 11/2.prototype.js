function hello(){
    console.log("Hello World")
}

hello.call()//Hello World
hello();//Hello World

hello.EstateEmpire = "PLOTS : COMMERCIAL : RESIDENTIAL"
console.log(hello.EstateEmpire) //PLOTS : COMMERCIAL : RESIDENTIAL


//So when we create a function then function gives some free space that space is called prototype.

console.log(hello.prototype) //Output: {}, Which means it gives us space to create obj which is called prototype. And Only function provied prototype property

hello.prototype.abc = "abc"
hello.prototype.xyz = "xyz"
hello.prototype.sing = function()  {
    return "lalallaall";
}
console.log(hello.prototype.anc)
console.log(hello.prototype.abc)
console.log(hello.prototype.xyz)
console.log(hello.prototype.sing())