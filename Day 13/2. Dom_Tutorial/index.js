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
const headline = document.querySelector("#main-headline");
headline.textContent = "Manage Your Grip"
console.log(headline)

// For class:
const myButton2 = document.querySelector('.btn');
myButton2.addEventListener('click', () => {
  alert("Button clicked!");
});

// select elemetn using query selector all will show all the id and class.
const header = document.querySelectorAll("#main-headline");
console.log(header)//This will show all id in the form of array but not actual array.

// As like textContent we have innerText which will show the innertext of the particular id, class or tag not other in the webpage. And Text content will show all the content present inside the tag weather the css of the particular class or div is display none.
const inner = document.querySelector("main-headline");
console.log(inner.innerText)

//Chang the style of elements with javascript:
const linen = document.querySelector('div.headline h2');
console.log(linen.style)//This will show all the css property applied to this class, id or tag.
linen.style.background = "Black";//This will give give the background color of the element.
linen.style.borderBottom = "2px solid Red"//This will give border bottom to the element.


  
  