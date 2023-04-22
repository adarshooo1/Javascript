//Static list vs Live List;
 

// querySelectorAll will give static list;Like Node List.
// getElementby...... will give the live list.Like HTML collection.

const ul2 = document.querySelector(".todo-list")
const listItem = ul.getElementsByTagName("li")


const seventhLi = document.createElement('li');
seventhLi.textContent = "Seventh Todo";

ul2.append(seventhLi);
console.log(listItem)









