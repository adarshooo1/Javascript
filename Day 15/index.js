// Over All practice.
const header = document.querySelector(".header");
console.log(header.classList);

header.classList.add("bg-dark")//If the bg-dark class is after the header class then it will over ride the .header , But if the class .header is styled after bg-dark then .header will overlap the bg-dark, in the css.

console.log(header.classList);


//InnerHtml to add html element:
const todoList = document.querySelector('.todo-list');
console.log(todoList.innerHTML) //<li>todo 1</li>

//Old Ways:

// To add:
     // Way 1:
todoList.innerHTML = todoList.innerHTML + "<li>New todo</li>"
     // Way 2:
todoList.innerHTML +=  "<li>New todo 2</li>";
     // Way 3:
todoList.innerHTML +=  "<li>New todo 2</li>";

//////////////////////////////////////////////////////////////////////

// So We have some function to Append ,prepend and remove

// Append:

//New Ways:

// // Way 1:

const NewTodoList1 = document.createElement("li");
const newTodoItemText = document.createTextNode("Teach Student");
const todoList1 = document.querySelector(".todo-list");
NewTodoList1.append(newTodoItemText); //Here we add the text in the li tag:
todoList.append(NewTodoList1);//Here we append the newTodoList that we made in the previous with .todo-list: 
console.log(NewTodoList1)

// // Way 2:

const NewTodoList2 = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teach Student");
NewTodoList2.textContent = "Teach Boys"
const todoList2 = document.querySelector(".todo-list");
// NewTodoList2.append(newTodoItemText); //Here we add the text in the li tag:
todoList.append(NewTodoList2);//Here we append the newTodoList that we made in the previous with .todo-list: 
console.log(NewTodoList2)



// prepend : Prepend will add in the starting:

const NewTodoList3 = document.createElement("li");
NewTodoList3.textContent = "Teach Boys"
const todoList3 = document.querySelector(".todo-list");
todoList.prepend(NewTodoList3);//Here we append the newTodoList that we made in the previous with .todo-list: 
console.log(NewTodoList3)


// Remove:

const todoList4 = document.querySelector(".todo-list li");
todoList4.remove();
console.log(todoList4)


/////////////////////////////////////////////////////////////////////////////////
// Before
const newTodoList = document.querySelector('li');
newTodoList.textContent = "Adarsh Boy";
const todoList5 = document.querySelector(".todo-list");
todoList5.before(newTodoList)

// After
const newTodoList4 = document.querySelector('li');
newTodoList4.textContent = "Adarsh Toy";
const todoList6 = document.querySelector(".todo-list");
todoList3.after(newTodoList4)