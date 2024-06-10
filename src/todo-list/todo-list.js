import TodoItem from "./todo-item";

class TodoList {
    #list;
    constructor() {
        this.list = [];
    }
    
    get list () {
        return this.#list;
    }

    set list (value) {
        this.#list = value;
    }

    addItem(value) {
        this.#list.push(value);
    }
}

export default TodoList;