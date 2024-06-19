import './style.css';
import getTodoList from './todo-list/default-list';
import generateProjectSidebar from './interface/sidebar';
import generateAddTaskDialog from './interface/add-task-dialog';
import displayTodoList from './interface/display-list';
import save from './storage/save';
import load from './storage/load';

let todoList;
if (!localStorage.getItem("todoList")) {
    todoList = getTodoList();
} else {
    todoList = load();
}

const addTask = document.querySelector(".addTask");
const inbox = document.querySelector(".inbox");
const today = document.querySelector(".today");
const urgent = document.querySelector(".urgent");

addTask.addEventListener("click", () => {
    generateAddTaskDialog(todoList);
});
inbox.addEventListener("click", () => {
    displayTodoList(todoList);
});
today.addEventListener("click", () => {
    displayTodoList(todoList, "today");
});
urgent.addEventListener("click", () => {
    displayTodoList(todoList, "urgent");
});

// default projects
generateProjectSidebar(todoList);

// default page
displayTodoList(todoList);