import TodoItem from './todo-item';
import { format, add, sub } from "date-fns";

const today = new Date();
const tommorow = add(today, {days: 1});
const yesterday = sub(today, {days: 1});
const weekFromNow = add(today, {days: 7});

const todoItem1 = new TodoItem(
    "Attend Meeting", 
    "Work", 
    format(today, "yyyy-MM-dd"),
    "Meeting at 12:00PM. Meeting is about upcoming deadlines.",
    1,
    "");
const todoItem2 = new TodoItem(
    "Submit a work ticket on IT", 
    "Work", 
    format(tommorow, "yyyy-MM-dd"),
    "Work laptop is running is having issues.",
    0,
    "Laptop is having issues connecting to VPN");
const todoItem3 = new TodoItem(
    "Unload the dishwasher", 
    "Chores", 
    format(yesterday, "yyyy-MM-dd"),
    "",
    0,
    "");
const todoItem4 = new TodoItem(
    "Mow the the lawn", 
    "Chores", 
    format(today, "yyyy-MM-dd"),
    "",
    1,
    "Mow the front yard and backyard");
const todoItem5 = new TodoItem(
    "Submit documents for Accountant", 
    "Finance", 
    format(weekFromNow, "yyyy-MM-dd"),
    "Accountant is asking for documents to complete tax return that coming.",
    2,
    "Bring W-2");

export { todoItem1, todoItem2, todoItem3, todoItem4, todoItem5 };