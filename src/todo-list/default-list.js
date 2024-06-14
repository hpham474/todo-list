import TodoList from './todo-list';
import { todoItem1, todoItem2, todoItem3, todoItem4, todoItem5 } from './sample-items.js'

function getTodoList () {
    const todoList = new TodoList();

    todoList.addItem(todoItem1);
    todoList.addItem(todoItem2);
    todoList.addItem(todoItem3);
    todoList.addItem(todoItem4);
    todoList.addItem(todoItem5);

    return todoList;
}

export default getTodoList;