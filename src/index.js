import './style.css';
import getTodoList from './todo-list/default-list';
import generateProjectSidebar from './interface/sidebar';
import generateAddTaskDialog from './interface/add-task-dialog';
import generateInbox from './interface/inbox';
import { format, compareAsc } from 'date-fns';

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
today.addEventListener("click", () => {
    generateInbox(todoList.filter((value) => {
        return !compareAsc(value.dueDate, format(new Date(), "yyyy-MM-dd"))
    }));
});
urgent.addEventListener("click", () => {
    generateInbox(todoList.filter((value) => {
        if (value.priority === 1 || value.priority === 2) {
            return true;
        }
        return false;
    }));
});

// default projects
generateProjectSidebar(todoList);

// default page
generateInbox(todoList);