const todoform = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type ='text']");
const todoList = document.querySelector(".todo-list");

todoform.addEventListener("submit", (e)=>{ //Here we have to use submit because here the main work in on buttons, Else using click will give different uotput;
     
     e.preventDefault();//This will help to prevent page referesh when we hit to any button;
     
     const newTodoText = todoInput.value;

     const newLi = document.createElement("li");

     const newLiInnerHtml = `<span class="text">${newTodoText}</span>
                             <div class="todo-buttons">
                             <button class="todo-btn done">Done</button>
                             <button class="todo-btn remove">Remove</button>
                         </div>`;

     newLi.innerHTML = newLiInnerHtml;

     todoList.append(newLi);

     todoInput.value = "";

});

todoList.addEventListener("click" ,(e)=>{
     

     if(e.target.classList.contains("done")){
          const liSpan = e.target.parentNode.previousElementSibling;
          liSpan.style.textDecoration = "line-through";
     }

     if(e.target.classList.contains("remove")){
          const targetLi = e.target.parentNode.parentNode;
          targetLi.remove();
     }

});