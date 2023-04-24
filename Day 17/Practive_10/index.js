// <!-- HTML Code -->
// <form class="form-todo">
//      <input type="text" name="" id="" placeholder="Add Todo" />
//      <input type="submit" value="Add Todo"class="btn" />
// </form>

// <ul class="todo-list">
//      <!-- Todo items will be added dynamically using JavaScript -->
// </ul>


// Selecting DOM elements
const todoform = document.querySelector(".form-todo"); // Selecting the form tag with class name 'form-todo'
const todoInput = document.querySelector(".form-todo input[type ='text']"); // Selecting the input tag where todo items will be entered
const todoList = document.querySelector(".todo-list"); // Selecting the unordered list where todo items will be displayed

// Adding an event listener for submitting the form
todoform.addEventListener("submit", (e) => {
     
     e.preventDefault(); // Prevents the page from refreshing when the submit button is clicked
     
     // Storing the value entered in the input field
     const newTodoText = todoInput.value;

     // Creating a new list item
     const newLi = document.createElement("li");

     // Creating the inner HTML of the new list item with the new todo item's text
     const newLiInnerHtml = `
         <span class="text">${newTodoText}</span>
         <div class="todo-buttons">
             <button class="todo-btn done">Done</button>
             <button class="todo-btn remove">Remove</button>
         </div>
     `;

     // Assigning the new list item's inner HTML
     newLi.innerHTML = newLiInnerHtml;

     // Appending the new list item to the unordered list
     todoList.append(newLi);

     // Clearing the input field
     todoInput.value = "";
});

// Adding an event listener for clicking on the todo list
todoList.addEventListener("click", (e) => {

     // Checking if the clicked element is the 'Done' button
     if(e.target.classList.contains("done")) {
          // Getting the span element that contains the todo text and marking it as done
          const liSpan = e.target.parentNode.previousElementSibling;
          liSpan.style.textDecoration = "line-through";
     }

     // Html:
     // <ul class="todo-list">
     //      <li>
     //       <span class="text">What you are going to add today!🤩</span>
     //           <div class="todo-buttons">
     //                <button class="todo-btn add">Done</button>
     //                <button class="todo-btn remove">Remove</button>
     //           </div>
     //      </li>
     // </ul>

     // Checking if the clicked element is the 'Remove' button
     if(e.target.classList.contains("remove")) {
          // Getting the list item that contains the clicked 'Remove' button and removing it from the DOM
          const targetLi = e.target.parentNode.parentNode;
          targetLi.remove();
     }
});



// //////////////////////////////////////////////////////////////////////////

// Explanation 1: const liSpan = e.target.parentNode.previousElementSibling;

// The given HTML code represents a basic form where a user can enter a task to be completed as a todo item.
// It consists of a form tag with a class name "form-todo", an input tag with type "text" and a placeholder
// "Add Todo" where the user can enter the task, and an input tag with type "submit" and a value "Add Todo"
// which will submit the entered task to the todo list.

// The JavaScript code provided will select the necessary elements from the HTML using DOM manipulation and
// add event listeners to handle the submission of the form and the click events of the "Done" and "Remove"
// buttons in the todo list.

// When the user submits the form, the event listener attached to the "submit" event of the form element will
// create a new list item (li) and append it to the unordered list (ul) with a class name "todo-list". The new list
// item will have the task entered by the user as its content and two buttons, "Done" and "Remove", which will be
// used to mark the task as completed and delete it from the todo list, respectively.

// When the user clicks on the "Done" button, the event listener attached to the "click" event of the unordered list
// element will check if the clicked element has a class name of "done". If it does, it will find the corresponding span
// element (which contains the task text) and apply a CSS style to it to mark it as completed.

// When the user clicks on the "Remove" button, the event listener will find the corresponding list item and remove it from the unordered list.

// Overall, this code creates a simple todo list where the user can enter tasks and mark them as completed or delete them from the list.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Explanation 2: const targetLi = e.target.parentNode.parentNode;

// e is the event object that is passed to the event listener function as a parameter. The e.target property refers to the HTML
// element that triggered the event, i.e., the button element that was clicked.

// e.target.parentNode refers to the parent element of the button element, which is the div element with the class "todo-buttons".

// e.target.parentNode.parentNode refers to the parent element of the div element, which is the li element that contains the todo item.
// Therefore, targetLi is a reference to the li element that needs to be removed.

// Once we have the reference to the target li element, we can use the remove() method to remove it from the DOM.