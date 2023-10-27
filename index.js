
const container  = document.getElementById("todos");
const inputBar = document.getElementById("input");
function taskAdded(){
let newTask  = document.createElement("li");

let button = document.createElement("button");
button.innerText = "Delete";
newTask.innerHTML  = inputBar.value;
newTask.classList.add("border")
button.addEventListener('click', () => del(newTask));

let editBtn = document.createElement("button")
editBtn.innerText = "Edit"
editBtn.addEventListener('click', () => edit(newTask));
newTask.appendChild(editBtn);
newTask.appendChild(button);
container.appendChild(newTask);
inputBar.value=""

let Check = document.createElement("checkbox")
newTask.appendChild(Check)

}
function del(taskElement) {
    container.removeChild(taskElement);
}

function edit(taskElement){

let input1 = document.createElement("input")
taskElement.appendChild(input1)
input1.addEventListener('dblclick',()=>{let editedvalue = input1.value
    taskElement.innerText = editedvalue})
}