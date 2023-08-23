const addTodo = document.getElementById("addTodo");
const output = document.querySelector("output");
const tasks = document.getElementById("tasks");


//to add task in array

addTodo.addEventListener("click",addTask)

let tasksArray = [];
//addTask function
function addTask(){
    localStorage.setItem('Tasks',tasks.value)
    tasksArray.push(tasks.value)
    console.log('clicked')
}