import generateProjectSidebar from "../interface/sidebar";
import displayTodoList from "../interface/display-list";

function removeTask(task, todoList) {
    for (let i = 0; i < todoList.length; i++) {
        if (task.equals(todoList.getItem(i))) {
            todoList.removeItem(i);
        }
    }

    generateProjectSidebar(todoList);
    displayTodoList(todoList);
}

export default removeTask;