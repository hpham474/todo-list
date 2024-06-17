import TodoItem from "./todo-item";
import generateProjectSidebar from "../interface/sidebar";
import generateInbox from "../pages/inbox";

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

    generateProjectSidebar(todoList.projects);
    generateInbox(todoList);
}

export default addTask;