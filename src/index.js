import './style.css';
import TodoItem from './todo-list/todo-item';
import TodoList from './todo-list/todo-list';

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
    "project2", 
    date,
    "description2",
    2,
    "notes2");
const todoItem3 = new TodoItem(
    "title3", 
    "project3", 
    date,
    "description3",
    1,
    "notes3");

todoList.addItem(todoItem1);
todoList.addItem(todoItem2);
todoList.addItem(todoItem3);