import TodoItem from "./todo-item";
import { compareAsc } from "date-fns";

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
        this.sortByDate();
    }

    getItem(value) {
        return this.#list[value];
    }

    addItem(value) {
        this.#list.push(value);
        this.sortByDate();
    }

    removeItem(value) {
        this.#list.splice(value, 1);
    }

    sortByDate() {
        this.#list.sort((a, b) => {
            return compareAsc(a.dueDate, b.dueDate);
        });
    }

    toJson() {
        return this.#list.map( (item) => {
            return item.toJson();
        });
    }

    filter(fn) {
        const filteredTodoList = new TodoList();
        const filteredList = filteredTodoList.list;
        for(let i = 0; i < this.length; i++) {
            if(fn(this.#list[i])) {
                filteredList.push(this.#list[i]);
            }
        }
        return filteredTodoList;
    }
}

export default TodoList;