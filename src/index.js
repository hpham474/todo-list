import './style.css';
import getTodoList from './todo-list/default-list';
import generateProjectSidebar from './interface/sidebar';
import generateAddTaskDialog from './interface/add-task-dialog';
import generateInbox from './pages/inbox';

const todoList = getTodoList();

const addTask = document.querySelector(".addTask");
const inbox = document.querySelector(".inbox");
const today = document.querySelector(".today");
const urgent = document.querySelector(".urgent");

addTask.addEventListener("click", () => {
    generateAddTaskDialog(todoList);
});
inbox.addEventListener("click", () => {
    generateInbox(todoList);
});

// default projects
generateProjectSidebar(todoList.projects);

// default page
generateInbox(todoList);