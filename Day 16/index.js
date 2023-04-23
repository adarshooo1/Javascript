// How to get the dimension of element
// Height and Width: 

const sectionTodo =  document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();//This will give all the display properties of the item in the webpage; Like its height, width , x-axis , y-axis , top , bottom etc;
console.log(info)

// Output:-

// DOMRect {x: 45.16666793823242, y: 401.59375, width: 813, height: 151.8541717529297, top: 401.59375, …}
// bottom : 553.4479217529297
// height : 151.8541717529297
// left : 45.16666793823242
// right : 858.1666679382324
// top : 401.59375
// width : 813
// x : 45.16666793823242
// y : 401.59375

const info2 = sectionTodo.getBoundingClientRect().bottom;
console.log(info2)//553.4479217529297

const info3 = sectionTodo.getBoundingClientRect().width;
console.log(info3)//813

const info4 = sectionTodo.getBoundingClientRect().x;
console.log(info4)//45.16666793823242

const info5 = sectionTodo.getBoundingClientRect().right;
console.log(info5)//858.1666679382324


