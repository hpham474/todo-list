import generateAddTaskDialog from "./add-task-dialog";
import displayTodoList from "./display-list";

function sidebarButtonFunction() {
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
}

export default sidebarButtonFunction;