import TodoItem from "./todo-item";

class TodoList {
    #list;
    constructor() {
        this.list = [];
    }
    
    get list () {
        return this.#list;
    }

    get length () {
        return this.#list.length;
    }

    get projects () {
        let projects = [];
        for (let i = 0; i < this.#list.length; i++) {
            if (!projects.includes(this.#list[i].project)) {
                projects.push(this.#list[i].project);
            }
        }

        return projects;
    }

    set list (value) {
        this.#list = value;
    }

    getItem(value) {
        return this.#list[value];
    }

    addItem(value) {
        this.#list.push(value);
    }
}

export default TodoList;