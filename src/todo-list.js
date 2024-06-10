import TodoItem from "./todo-item";

class TodoList {
    #list;
    constructor() {
        this.list = [];
    }
    
    get list () {
        return this.#list;
    }

    addItem(value) {
        this.#list.push(value);
    }
}

export default TodoList;