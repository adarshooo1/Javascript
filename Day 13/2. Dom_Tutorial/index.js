// What is window: Window is a object in the webpage; every javascript has the window object and in every window object there is a document object. And with the help of this document object is responsible to show the webpage and what inside of our webpage.

//So the document is most important thing in the javascript because with help of this we can do anything in our webpage with the help of document object.

//This basic help in the DOM manipulation: DOM Refers to the Document Object Model and with the help of the document object we are able to change the object in the javascrit which is the part of the webpage and can able to manipulate DOM.

//So Let's practice the DOM with the webpage index.html.


// Lets Select a object in the html page with the help of document object:

// Select element using the get element by #id;


const h2tags1 = document.getElementById("main-headline")
// h2tags1.textContent = "Hello My dear Friend"
console.log(h2tags1)


//select element using query selector. This will work for classes and id both and it will return the very first item which has this class or id.. Work Better in Browser to run the code;

// For Id:
const h2tags2 = document.querySelector('#main-headline');
h2tags2.textContent = "Manage Todo and Task";
console.log(h2tags2.textContent);

// For class:
const myButton = document.querySelector('.btn');
myButton.addEventListener('click', () => {
  alert("Button clicked!");
});

// select elemetn using query selector all will show all the id and class.
const header = document.getElementById("main-headline");
console.log(header)



  
  