class TodoItem {
    title;
    description;
    dueDate;
    priority;
    notes;

    constructor(title, description = "", dueDate, priority = 0, notes = "") {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }

    get title() {
        return this.title;
    }

    get description() {
        return this.description;
    }

    get dueDate() {
        return this.dueDate;
    }

    get priority() {
        return this.priority;
    }

    get notes() {
        return this.notes;
    }

    set description(value) {
        this.description = value;
    }

    set dueDate(value) {
        this.dueDate = value;
    }

    set priority(value) {
        this.priority = value;
    }

    set notes(value) {
        this.notes = value;
    }
}