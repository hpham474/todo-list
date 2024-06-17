import TodoItem from './todo-item';
import { format, add, sub } from "date-fns";

const today = new Date();
const tommorow = add(today, {days: 1});
const yesterday = sub(today, {days: 1});
const threeDaysFromNow = add(today, {days: 3});
const weekFromNow = add(today, {days: 7});

const todoItem1 = new TodoItem(
    "title1", 
    "project1", 
    format(today, "yyyy-MM-dd"),
    "description1",
    1,
    "notes1");
const todoItem2 = new TodoItem(
    "title2", 
    "project1", 
    format(tommorow, "yyyy-MM-dd"),
    "description2",
    2,
    "notes2");
const todoItem3 = new TodoItem(
    "title3", 
    "project2", 
    format(yesterday, "yyyy-MM-dd"),
    "description3",
    1,
    "notes3");
const todoItem4 = new TodoItem(
    "title4", 
    "project2", 
    format(threeDaysFromNow, "yyyy-MM-dd"),
    "description4",
    1,
    "notes4");
const todoItem5 = new TodoItem(
    "title5", 
    "project3", 
    format(weekFromNow, "yyyy-MM-dd"),
    "description5",
    2,
    "notes5");

export { todoItem1, todoItem2, todoItem3, todoItem4, todoItem5 };