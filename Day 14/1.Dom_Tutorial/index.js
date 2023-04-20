//Get Attribute and Set Attribute;


//Get Attribute
const link = document.querySelector('a');
console.log(link);//<a href="Home">Home</a>
console.log(link.getAttribute('href'));//print #home, Because first anchor tag anchor tag value is #home

const link2 = document.querySelector('.nav-items .TodoClass a')
console.log(link2)//<a href="Todo">Todo</a>

const link3 = document.querySelector('.nav-items .TodoClass a')
console.log(link3.getAttribute('href'))//<a href="Todo">Todo</a>

//Set Attribute:
const todoLink = document.querySelector('.TodoClass a');
todoLink.setAttribute('href', 'https://google.com');//We can set attribute like this.


const link4 = document.querySelector('.nav-items .TodoClass a')
console.log(link4.getAttribute('href'))//https://google.com
