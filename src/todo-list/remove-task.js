import generateProjectSidebar from "../interface/sidebar";
import displayTodoList from "../interface/display-list";
import getFilter from "../interface/get-page";

function removeTask(task, todoList) {
    for (let i = 0; i < todoList.length; i++) {
        if (task.equals(todoList.getItem(i))) {
            todoList.removeItem(i);
        }
    }

    const filter = getFilter();

    generateProjectSidebar(todoList);
    displayTodoList(todoList, filter);
}

export default removeTask;