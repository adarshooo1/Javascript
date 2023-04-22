//Clone Nodes
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
// li.textContent = "new todo"
// ul.append(li);
// ul.prepend(li);

//So we can use any one at the same time: append or prepend, and if we want to do it then we have to clone the node.

li.textContent = "new todo";
const li2 = li.cloneNode(true)//Use for true and deep cloning in which it clone the insider clild and html element as well.
const li3 = li.cloneNode(true)//Use for true and deep cloning in which it clone the insider clild and html element as well.
const li4 = li.cloneNode(true)//Use for true and deep cloning in which it clone the insider clild and html element as well.
const li5= li.cloneNode(true)//Use for true and deep cloning in which it clone the insider clild and html element as well.

ul.append(li); //Here we are adding new todo (li) with the todo-list (ul)
ul.append(li2);
ul.append(li3);
ul.append(li4);
ul.prepend(li5);

// const ul2 = document.querySelector(".todo-list");
// const li6 = document.querySelector("li");

// li6.textContent = "Hello Master this is the final todo";
// ul2.append(li6)






