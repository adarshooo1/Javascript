//InnerHtml

//To see the Inner Html:
const InnerHtml = document.querySelector(".headline");
console.log(InnerHtml.innerHTML)//We et all the innerHtml code inside the headline class.
// [<h2 id="main-headline">Manage Your Task.</h2> <button class="btn btn-headline">Learn More</button>]

//To change the inner html To Text:
const InnerHtml2 = document.querySelector('.headline');
InnerHtml2.innerHTML = "<h1 id = \"main-headline\">Inner Html Example</h1>";
console.log(InnerHtml2)//Now Inner Html is changed and it is looking like this:
// <div class=​"headline">​<h1>​Inner Html Example​</h1>​</div>​


//To add a Botton inside the changed innerHtml:
const InnerHtml3 = document.querySelector('.headline');
InnerHtml3.innerHTML += "<Button class =\"btn\">Confirm</Button>";
console.log(InnerHtml3)

//To style:
const btnStyle = document.querySelector('.btn');
btnStyle.style.width = "5rem";
btnStyle.style.height = "2rem";
btnStyle.style.borderRadius = "3px";
btnStyle.style.backgroundColor = "#646565"
btnStyle.style.color = "pink"
btnStyle.style.fontWeight = "bold"
btnStyle.style.fontSize = "1rem"

//Dom Traversing:
const selected = document.querySelector("#main-headline")//Here we select the child item then move to the parent in the below line.
const parentnode  = selected.parentNode;
console.log(parentnode);//This will call the parent html.
     //<div class="headline"><h1 id="main-headline">Inner Html Example</h1><button class="btn" style="width: 5rem; height: 2rem; border-radius: 3px; background-color: rgb(100, 101, 101); color: pink; font-weight: bold; font-size: 1rem;">Confirm</button></div>

     //So now we can style it also as we want.
     parentnode.style.backgroundColor = "Orange"
     parentnode.style.height = "15vh"
     parentnode.style.fontSize = "12px"
     parentnode.style.paddingTop = "10px"
     parentnode.style.paddingLeft = "6px"
     parentnode.style.paddingRight = "6px"


// Toggle:

// In JavaScript, the toggle() method is used to add or remove a class from an element. If the element already has the class, toggle() removes it, otherwise, it adds the class to the element.

const contain = document.querySelector('.container');

console.log(contain.classList);

// This will check that is the contain which is pointing to the html .container class , is there any container class is present or not. and return the answer in Boolean.
const ans = contain.classList.contains("container")
console.log(ans)//True.

//So we can use toggle like this.

contain.classList.toggle("bg-red");//Now a .bg-red named class is added with container class also is .bg-red is not present , If present then it will remove the class..
contain.classList.toggle("bg-red");//Now it remove the bg-red class because in the previous line we used to toggle it , which add this class and we again toggle it so , it remive this class.