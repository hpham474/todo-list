import './style.css';
import getTodoList from './todo-list/default-list';
import sidebarButtonFunction from './interface/sidebar-buttons';
import generateProjectSidebar from './interface/projects';
import displayTodoList from './interface/display-list';
import load from './storage/load';

let todoList;
if (!localStorage.getItem("todoList")) {
    todoList = getTodoList();
} else {
    todoList = load();
}

// add event listeners to sidebar
sidebarButtonFunction(todoList);

// display default projects
generateProjectSidebar(todoList);

// display default list
displayTodoList(todoList);