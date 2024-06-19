import TodoList from "../todo-list/todo-list";
import TodoItem from "../todo-list/todo-item";

function load() {
    const todoListJson = localStorage.getItem("todoList");

    const todoListArray = JSON.parse(todoListJson);

    const todoList = new TodoList();

    for (let i = 0; i < todoListArray.length; i++) {
        const todoItem = new TodoItem(
            todoListArray[i].title,
            todoListArray[i].project,
            todoListArray[i].dueDate,
            todoListArray[i].description,
            todoListArray[i].priority,
            todoListArray[i].notes,
        );

        todoList.addItem(todoItem);
    }

    return todoList;
}

export default load;