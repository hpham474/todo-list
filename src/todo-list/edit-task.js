import generateProjectSidebar from "../interface/projects";
import displayTodoList from "../interface/display-list";
import getFilter from "../interface/get-page";
import save from "../storage/save";

function editTask(itemIndex, todoList) {
    const project = document.getElementById("project").value;
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;
    const notes = document.getElementById("notes").value;
    const urgency = document.getElementById("urgency").value;

    if (project !== todoList.getItem(itemIndex).project) {
        todoList.getItem(itemIndex).project = project;
    }
    if (date !== todoList.getItem(itemIndex).dueDate) {
        todoList.getItem(itemIndex).dueDate = date;
    }
    if (description !== todoList.getItem(itemIndex).description) {
        todoList.getItem(itemIndex).description = description;
    }
    if (notes !== todoList.getItem(itemIndex).notes) {
        todoList.getItem(itemIndex).notes = notes;
    }
    if (urgency !== todoList.getItem(itemIndex).priority) {
        todoList.getItem(itemIndex).priority = urgency;
    }

    const filter = getFilter();

    todoList.sortByDate();
    save(todoList);
    generateProjectSidebar(todoList);
    displayTodoList(todoList, filter);
}

export default editTask;