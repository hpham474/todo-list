import TodoItem from "./todo-item";
import generateProjectSidebar from "../interface/sidebar";
import displayTodoList from "../interface/display-list";
import getFilter from "../interface/get-page";
import save from "../storage/save";

function addTask(todoList) {
    const title = document.getElementById("title").value;
    const project = document.getElementById("project").value;
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;
    const notes = document.getElementById("notes").value;
    const urgency = document.getElementById("urgency").value;

    const task = new TodoItem(
        title, 
        project, 
        date,
        description,
        notes,
        urgency);

    todoList.addItem(task);

    const filter = getFilter();

    todoList.sortByDate();
    save(todoList);
    generateProjectSidebar(todoList);
    displayTodoList(todoList, filter);
}

export default addTask;