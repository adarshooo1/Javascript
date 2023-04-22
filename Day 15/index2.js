// Element.insertAdjacentHtml(where, html);

//beforebegin; This will add the html content before the .todo-list class start. No .todo-list class styling
const todoList1 = document.querySelector('.todo-list');
todoList1.insertAdjacentHTML("beforebegin" ,"<li>Teach Students1</li>")


//afterbegin; This will add the html content inside the .todo-list class start. Have .todo-list class styling
const todoList2 = document.querySelector('.todo-list');
todoList2.insertAdjacentHTML("afterbegin" ,"<li>Teach Students2</li>")

//beforeend; This will add the html content after the .todo-list class item end. Have .todo-list class styling
const todoList3 = document.querySelector('.todo-list');
todoList3.insertAdjacentHTML("beforeend" ,"<li>Teach Students3</li>")

//afterend; This will add the html content after the .todo-list class end. //No .todo-list class styling
const todoList4 = document.querySelector('.todo-list');
todoList4.insertAdjacentHTML("afterend" ,"<li>Teach Students4</li>")