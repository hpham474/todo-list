class TodoItem {
    #title;
    #project;
    #description;
    #dueDate;
    #priority;
    #notes;

    constructor(title, project, dueDate, description, priority, notes) {
        this.#title = title;
        this.#project = project;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = Number(priority);
        this.#notes = notes;
    }

    get title() {
        return this.#title;
    }

    get project() {
        return this.#project;
    }

    get description() {
        return this.#description;
    }

    get dueDate() {
        return this.#dueDate;
    }

    get priority() {
        return this.#priority;
    }

    get notes() {
        return this.#notes;
    }

    set project(value) {
        this.#project = value;
    }

    set description(value) {
        this.#description = value;
    }

    set dueDate(value) {
        this.#dueDate = value;
    }

    set priority(value) {
        this.#priority = Number(priority);
    }

    set notes(value) {
        this.#notes = value;
    }

    toJson() {
        return {
            title: this.#title,
            project: this.#project,
            description: this.#description,
            dueDate: this.#dueDate,
            priority: this.#priority,
            notes: this.#notes,
        };
    }

    equals(other) {
        if (!(other instanceof TodoItem)) {
            return false;
        }
        return this.#title === other.#title &&
            this.#project === other.#project &&
            this.#description === other.#description &&
            this.#dueDate === other.#dueDate &&
            this.#priority === other.#priority &&
            this.#notes === other.#notes;
    }
}

export default TodoItem;