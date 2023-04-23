//Static list vs Live List;
 

// querySelectorAll will give static list;Like Node List.
// getElementby...... will give the live list.Like HTML collection.


// HTML COllection for the live list:
const ul2 = document.querySelector(".todo-list");//Here We selecting the class name of the ul tag in which we have to add the new-todo li;
const seventhLi = document.createElement('li');//Then we will create the li item by createElement;
seventhLi.textContent = "Seventh Todo";//Then will will write the li item what is should like or what content should be inside the list item.
ul2.append(seventhLi);//Here we add the seventhLi with the ul tag with all the text content and changes;

const listItem = ul2.getElementsByTagName("li");//Here we select the ul Tag with all the list item inside the todo-list.
console.log(listItem);//print all the li item.




// Node List for the static list:
const ul3 = document.querySelectorAll(".todo-list li");
const eighthLi = document.createElement("li");
eighthLi.textContent = "Eight Todo";
const ul = document.querySelector(".todo-list");
ul.append(eighthLi);

console.log(ul3);









