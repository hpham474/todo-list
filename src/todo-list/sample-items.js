import TodoItem from './todo-item';

const date = new Date();
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

export { todoItem1, todoItem2, todoItem3, todoItem4, todoItem5 };