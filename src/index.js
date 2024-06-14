import './style.css';
import getTodoList from './todo-list/default-list';
import generateProjecSidebar from './interface/sidebar';

const todoList = getTodoList();
const projects = todoList.projects;

generateProjecSidebar(projects);

// generate inbox
const content = document.querySelector(".content");
const title = document.createElement("h1");
const taskList = document.createElement("ul");

for(let i = 0; i < todoList.length; i++) {
    const listElement = document.createElement("li");
    const taskButton = document.createElement("button");

    taskButton.textContent = todoList.getItem(i).title;

    listElement.appendChild(taskButton);
    taskList.appendChild(listElement);
}

content.appendChild(title);
content.appendChild(taskList);