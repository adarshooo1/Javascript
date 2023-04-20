//Get Multiple elements using getElement by class name:
const navItems = document.getElementsByClassName('nav-item')
console.log(navItems)//This will give html collection which is array like object but not array.We can index Iterate over these items only.
console.log(navItems[0]);
console.log(navItems[1]);
console.log(navItems[2]);

//Looping in getElementByClassName(): Type of HTML Collection,
for(i = 0 ; i < navItems.length; i++){
    navItems[i].style.background = "White";
}

//Looping in getElementByTagName():
// We can use 2 types of loop in this:

// simple for loop:
const navItems2 = document.getElementsByTagName('a')
console.log(navItems)
for(i= 0; i < navItems2.length; i++){
    navItems2[i].style.color = "green"
    navItems2[i].style.fontWeight = "bold"
    //Here we do not apply text color to the anchor tag item,So thats why we use method of getElementByTagName(); 
}

// for-of-loop 
for(let item of navItems2){
    item.style.color = "black"
    item.style.fontSize = "2rem"
}//This will also work


//Get multiple elements using querySelectorAll:
const navItems3 = document.querySelectorAll(".nav-item");//This will give the nodelist which is like array but not array.
console.log(navItems3)
console.log(navItems3[0]);
console.log(navItems3[1]);
console.log(navItems3[2]);

//Looping in querySelectorAll(): Type of NodeList:
// we can use all type of loops in NodeList:

// simple for loop 
for(i= 0; i < navItems3.length; i++){
    navItems3[i].style.backgroundColor = "red"
    navItems3[i].style.fontWeight = "bold"
    //Here we do not apply text color to the anchor tag item,So thats why we use method of getElementByTagName(); 
}

// for of loop
for(let item of navItems3){
    item.style.backGroundColour = "white"
    item.style.fontSize = "2rem"
}

// for each loop
navItems3.forEach(item =>{
    item.style.backgroundColor = "purple"
    item.style.fontSize = "1.3rem"
})