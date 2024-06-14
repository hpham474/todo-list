import './style.css';
import TodoItem from './todo-list/todo-item';
import TodoList from './todo-list/todo-list';

// generate sample data
const date = new Date();
const todoList = new TodoList();
const todoItem1 = new TodoItem(
    "title1", 
    "project1", 
    date,
    "description1",
    1,
    "notes1");
const todoItem2 = new TodoItem(
    "title2", 
    "project1", 
    date,
    "description2",
    2,
    "notes2");
const todoItem3 = new TodoItem(
    "title3", 
    "project2", 
    date,
    "description3",
    1,
    "notes3");
const todoItem4 = new TodoItem(
    "title4", 
    "project2", 
    date,
    "description4",
    1,
    "notes4");
const todoItem5 = new TodoItem(
    "title5", 
    "project3", 
    date,
    "description5",
    2,
    "notes5");

// add items to todo List
todoList.addItem(todoItem1);
todoList.addItem(todoItem2);
todoList.addItem(todoItem3);
todoList.addItem(todoItem4);
todoList.addItem(todoItem5);

const projects = todoList.projects;

// add projects to sidebar
const projectSidebar = document.querySelector(".sidebar .projects");
const title = document.createElement("h2");
title.textContent = "Projects";
const projectList = document.createElement("ul");
projectList.classList.add("project-list");
for (let i = 0; i < projects.length; i++) {
    const projectButton = document.createElement("button");
    projectButton.textContent = projects[i];
    projectList.appendChild(projectButton);
}
projectSidebar.appendChild(title);
projectSidebar.appendChild(projectList);